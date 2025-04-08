
# Tech Handyman - Backend Integration Documentation

This document provides comprehensive guidance for integrating the Tech Handyman front-end with various backend solutions to create a fully functional CRM and service management system.

## Table of Contents

1. [Database Integration Options](#database-integration-options)
2. [Authentication Implementation](#authentication-implementation)
3. [Form to Database Workflows](#form-to-database-workflows)
4. [Email Notification System](#email-notification-system)
5. [Customer Portal Integration](#customer-portal-integration)
6. [Admin Dashboard Data Flow](#admin-dashboard-data-flow)
7. [Security Best Practices](#security-best-practices)

## Database Integration Options

### Option 1: PostgreSQL (Recommended)

PostgreSQL offers a robust relational database solution ideal for the Tech Handyman CRM system.

**Implementation Steps:**

1. Set up a PostgreSQL server (can be hosted on AWS RDS, DigitalOcean, or other cloud providers)
2. Create the following database schema:
   - `users` - Store customer and admin accounts
   - `inquiries` - Store customer service inquiries
   - `services` - List of available services
   - `estimates` - Cost estimates for services
   - `invoices` - Generated invoices
   - `jobs` - Track service delivery and completion
3. Set up a Node.js/Express API server to handle database operations
4. Implement database connection and query functions

**Sample Database Schema:**

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL, -- Store hashed passwords only
  email VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  role VARCHAR(20) NOT NULL DEFAULT 'customer', -- 'admin' or 'customer'
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  status VARCHAR(20) NOT NULL DEFAULT 'active'
);

-- Inquiries table
CREATE TABLE inquiries (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  service_type VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Services table
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  base_price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT TRUE
);

-- Add additional tables as needed
```

### Option 2: MongoDB

For projects requiring more flexibility with data structure, MongoDB offers a document-based approach.

**Implementation Steps:**

1. Set up MongoDB (MongoDB Atlas provides a managed cloud solution)
2. Design document models for:
   - Users (customers and admins)
   - Inquiries
   - Services
   - Estimates/Invoices
3. Implement a Node.js/Express API with Mongoose for ODM

**Sample Mongoose Schema:**

```javascript
// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed passwords only
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: String,
  address: String,
  role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  created_at: { type: Date, default: Date.now }
});

// Inquiry Schema
const InquirySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service_type: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['new', 'in-progress', 'accepted', 'completed'], 
    default: 'new' 
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
```

### Option 3: Firebase/Firestore

For rapid development and simpler deployments, Firebase offers a complete backend solution.

**Implementation Steps:**

1. Create a Firebase project
2. Set up Firestore collections for users, inquiries, services, etc.
3. Implement Firebase Authentication
4. Use Firebase Cloud Functions for backend logic

## Authentication Implementation

### JSON Web Token (JWT) Authentication

For custom authentication implementations, JWT provides a secure, stateless approach.

**Implementation Steps:**

1. Set up a registration endpoint that:
   - Validates user input
   - Hashes passwords using bcrypt
   - Stores user data in the database
   - Returns a JWT token

2. Set up a login endpoint that:
   - Validates credentials
   - Issues a JWT token upon successful authentication

3. Implement middleware for protected routes:
   - Verify JWT tokens on requests
   - Parse user information from token
   - Check user roles for admin-only routes

**Example JWT Authentication Flow:**

```javascript
// Login endpoint (Node.js/Express example)
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Find user in database
    const user = await db.users.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Return token
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Authentication middleware
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    
    req.user = user;
    next();
  });
};

// Admin middleware
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

// Protected admin route example
app.get('/api/admin/dashboard', authenticateJWT, isAdmin, (req, res) => {
  // Handle admin dashboard data
});
```

### OAuth Integration

For social login options, implementing OAuth with providers like Google and Microsoft can enhance user experience.

**Implementation Steps:**

1. Register your application with OAuth providers
2. Implement OAuth flow endpoints
3. Create user accounts from OAuth profile data

## Form to Database Workflows

### Inquiry Form Submission Flow

1. Form validation (already implemented in front-end)
2. API endpoint to receive form data:
   ```javascript
   app.post('/api/inquiries', async (req, res) => {
     try {
       const { name, email, phone, service, description } = req.body;
       
       // Create user if doesn't exist
       let user = await db.users.findOne({ where: { email } });
       if (!user) {
         // Generate username based on name and random string
         const username = generateUsername(name);
         // Generate random password
         const password = generateSecurePassword();
         // Hash password
         const hashedPassword = await bcrypt.hash(password, 10);
         
         user = await db.users.create({
           username,
           password: hashedPassword,
           email,
           name,
           phone,
           role: 'customer'
         });
         
         // Send welcome email with credentials
         await sendWelcomeEmail(email, name, username, password);
       }
       
       // Create inquiry
       const inquiry = await db.inquiries.create({
         user_id: user.id,
         service_type: service,
         description,
         status: 'new'
       });
       
       // Send confirmation email
       await sendInquiryConfirmationEmail(email, name, service, description);
       
       res.status(201).json({ message: 'Inquiry submitted successfully' });
     } catch (error) {
       res.status(500).json({ message: 'Server error' });
     }
   });
   ```

3. Email notification triggers (see Email Notification System)

### Customer Account Creation Flow

1. Generate a secure random password
2. Create user record in database
3. Send credentials via email
4. Require password change on first login

## Email Notification System

### Email Service Integration

Options include:
- SendGrid
- Amazon SES
- Mailgun
- Nodemailer with SMTP

**Implementation Example with SendGrid:**

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendInquiryConfirmationEmail(email, name, service, description) {
  // Get email template from database or file
  let template = await db.emailTemplates.findOne({ where: { type: 'inquiry_confirmation' } });
  
  // Replace variables in template
  let content = template.content
    .replace('[Customer Name]', name)
    .replace('[Service Type]', service)
    .replace('[Description]', description)
    .replace('[Date]', new Date().toLocaleDateString());
  
  const msg = {
    to: email,
    from: 'support@techhandyman.com',
    subject: 'Your Tech Handyman Inquiry Confirmation',
    text: content,
    html: content.replace(/\n/g, '<br>')
  };
  
  return sgMail.send(msg);
}

async function sendAccountCreationEmail(email, name, username, password) {
  // Get email template from database or file
  let template = await db.emailTemplates.findOne({ where: { type: 'account_creation' } });
  
  // Replace variables in template
  let content = template.content
    .replace('[Customer Name]', name)
    .replace('[Username]', username)
    .replace('[Password]', password)
    .replace('[Login URL]', 'https://techhandyman.com/customer-login');
  
  const msg = {
    to: email,
    from: 'accounts@techhandyman.com',
    subject: 'Your Tech Handyman Account Details',
    text: content,
    html: content.replace(/\n/g, '<br>')
  };
  
  return sgMail.send(msg);
}
```

### Microsoft Outlook Integration

For invoice reminders and business communications, integrate with Microsoft Graph API:

1. Register your application in Azure AD
2. Implement OAuth 2.0 flow to get Microsoft Graph tokens
3. Use Microsoft Graph API to send emails

**Example Outlook Integration:**

```javascript
const axios = require('axios');

async function sendOutlookEmail(accessToken, recipient, subject, body, attachmentPath) {
  try {
    // Convert file to base64
    const fileContent = fs.readFileSync(attachmentPath);
    const base64Content = fileContent.toString('base64');
    
    const email = {
      message: {
        subject: subject,
        body: {
          contentType: 'HTML',
          content: body
        },
        toRecipients: [
          {
            emailAddress: {
              address: recipient
            }
          }
        ],
        attachments: [
          {
            '@odata.type': '#microsoft.graph.fileAttachment',
            name: 'invoice.pdf',
            contentType: 'application/pdf',
            contentBytes: base64Content
          }
        ]
      }
    };
    
    await axios.post('https://graph.microsoft.com/v1.0/me/sendMail', email, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    
    return true;
  } catch (error) {
    console.error('Error sending Outlook email:', error);
    throw error;
  }
}
```

## Customer Portal Integration

### Customer Data API Endpoints

Implement RESTful API endpoints for the customer portal:

1. `GET /api/customer/inquiries` - List customer's inquiries
2. `GET /api/customer/inquiries/:id` - Get inquiry details
3. `GET /api/customer/estimates` - List estimates for approval
4. `GET /api/customer/invoices` - List invoices
5. `GET /api/customer/invoices/:id` - Get invoice details
6. `PUT /api/customer/estimates/:id/approve` - Approve an estimate

### Payment Integration

For the customer portal payment system, integrate with Stripe:

1. Set up Stripe account and API keys
2. Implement payment endpoints
3. Handle webhook notifications for payment events

**Example Stripe Integration:**

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create payment intent
app.post('/api/payment/create-intent', authenticateJWT, async (req, res) => {
  try {
    const { invoiceId } = req.body;
    
    // Get invoice from database
    const invoice = await db.invoices.findByPk(invoiceId);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    
    // Check if user has access to this invoice
    if (invoice.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(invoice.total_amount * 100), // Amount in cents
      currency: 'usd',
      metadata: {
        invoice_id: invoice.id,
        customer_id: req.user.id
      }
    });
    
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ message: 'Payment processing error' });
  }
});

// Handle Stripe webhook
app.post('/api/webhooks/stripe', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    
    // Update invoice status in database
    await db.invoices.update(
      { status: 'paid', payment_date: new Date() },
      { where: { id: paymentIntent.metadata.invoice_id } }
    );
    
    // Send payment confirmation email
    const invoice = await db.invoices.findByPk(paymentIntent.metadata.invoice_id, {
      include: [{ model: db.users }]
    });
    
    await sendPaymentConfirmationEmail(
      invoice.user.email,
      invoice.user.name,
      invoice.id,
      invoice.total_amount
    );
  }
  
  res.json({received: true});
});
```

## Admin Dashboard Data Flow

### Key API Endpoints for Admin Dashboard

1. `GET /api/admin/inquiries` - List inquiries with filtering/pagination
2. `GET /api/admin/customers` - List customers
3. `PUT /api/admin/inquiries/:id/status` - Update inquiry status
4. `POST /api/admin/estimates` - Create estimates
5. `POST /api/admin/invoices` - Generate invoices

### Dashboard Statistics API

Implement an endpoint that provides key statistics for the admin dashboard:

```javascript
app.get('/api/admin/statistics', authenticateJWT, isAdmin, async (req, res) => {
  try {
    // Get counts from different tables
    const newInquiries = await db.inquiries.count({ where: { status: 'new' } });
    const activeCustomers = await db.users.count({ where: { role: 'customer', status: 'active' } });
    
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const jobsInProgress = await db.inquiries.count({ where: { status: 'in-progress' } });
    const completedJobs = await db.inquiries.count({ 
      where: { 
        status: 'completed',
        updated_at: { [Op.gte]: thirtyDaysAgo }
      } 
    });
    
    // Get revenue statistics
    const totalRevenue = await db.invoices.sum('total_amount', {
      where: { 
        status: 'paid',
        payment_date: { [Op.gte]: thirtyDaysAgo }
      }
    });
    
    res.json({
      newInquiries,
      activeCustomers,
      jobsInProgress,
      completedJobs,
      totalRevenue: totalRevenue || 0
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
```

## Security Best Practices

### Data Protection

1. **Password Security:**
   - Never store plain-text passwords
   - Use bcrypt for password hashing
   - Implement password complexity requirements
   - Enforce regular password changes for admin accounts

2. **Data Encryption:**
   - Use HTTPS for all traffic
   - Encrypt sensitive data at rest
   - Implement field-level encryption for PII when necessary

3. **Input Validation:**
   - Validate all user inputs server-side
   - Implement input sanitization to prevent SQL injection and XSS

### Implementation Example for Password Security:

```javascript
const bcrypt = require('bcrypt');

// Password hashing
async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

// Password validation
function validatePasswordStrength(password) {
  // At least 8 characters, contains uppercase, lowercase, number, and special character
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// User registration with password validation
app.post('/api/register', async (req, res) => {
  try {
    const { username, password, email, name } = req.body;
    
    // Validate password strength
    if (!validatePasswordStrength(password)) {
      return res.status(400).json({ 
        message: 'Password must be at least 8 characters and contain uppercase, lowercase, number, and special character' 
      });
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password);
    
    // Create user
    const user = await db.users.create({
      username,
      password: hashedPassword,
      email,
      name,
      role: 'customer'
    });
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
```

### API Security

1. Implement rate limiting to prevent brute force attacks
2. Use API keys for third-party integrations
3. Set proper CORS policies
4. Implement token expiration and refresh mechanisms

This documentation should provide a comprehensive guide for implementing the backend integration for the Tech Handyman CRM system. The implementation can be adapted based on specific technology preferences and hosting environments.
