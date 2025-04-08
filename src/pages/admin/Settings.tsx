
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  // Profile Settings
  const [profileSettings, setProfileSettings] = useState({
    companyName: "Tech Handyman",
    email: "admin@techhandyman.com",
    phone: "555-123-4567",
    address: "123 Tech Street, San Francisco, CA 94107",
    website: "https://techhandyman.com"
  });
  
  // Email Templates
  const [emailTemplates, setEmailTemplates] = useState({
    inquiryConfirmation: `Dear [Customer Name],

Thank you for submitting an inquiry with Tech Handyman. We've received your request regarding [Service Type] and will review it shortly.

We typically respond to all inquiries within 24 hours during business days.

Your Inquiry Details:
- Service Requested: [Service Type]
- Description: [Description]

If you need to add any additional information to your inquiry, please reply to this email.

Best regards,
The Tech Handyman Team`,

    accountCreation: `Dear [Customer Name],

Thank you for choosing Tech Handyman for your technical needs. We're pleased to inform you that we've created a customer account for you.

Your account details:
- Username: [Username]
- Password: [Password]

Please login at [Login URL] to access your customer portal where you can view the status of your inquiries, approved estimates, and invoices.

For security reasons, we recommend changing your password after your first login.

If you have any questions, please don't hesitate to contact us.

Best regards,
The Tech Handyman Team`
  });
  
  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    newInquiryEmail: true,
    newInquirySMS: false,
    inquiryStatusEmail: true,
    inquiryStatusSMS: false,
    customerAccountEmail: true,
    paymentReceivedEmail: true
  });
  
  // Handle profile settings change
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileSettings({
      ...profileSettings,
      [e.target.name]: e.target.value
    });
  };
  
  // Handle email template change
  const handleTemplateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailTemplates({
      ...emailTemplates,
      [e.target.name]: e.target.value
    });
  };
  
  // Handle notification toggle
  const handleNotificationToggle = (setting: string) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting as keyof typeof notificationSettings]
    });
  };
  
  // Save settings
  const saveSettings = () => {
    // In a real implementation, this would save to a database or API
    
    toast({
      title: "Settings Saved",
      description: "Your changes have been successfully saved.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Company Profile</TabsTrigger>
          <TabsTrigger value="email">Email Templates</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        {/* Profile Settings */}
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Profile</CardTitle>
              <CardDescription>
                Manage your company information and contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input 
                    id="companyName" 
                    name="companyName"
                    value={profileSettings.companyName}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    value={profileSettings.email}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Business Phone</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={profileSettings.phone}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input 
                    id="website" 
                    name="website"
                    value={profileSettings.website}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Input 
                    id="address" 
                    name="address"
                    value={profileSettings.address}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="ml-auto bg-tech-blue hover:bg-tech-darkblue"
                onClick={saveSettings}
              >
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Email Templates */}
        <TabsContent value="email" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>
                Customize email templates sent to customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="inquiryConfirmation">Inquiry Confirmation Email</Label>
                <div className="text-sm text-gray-500 mb-2">
                  Sent automatically when a customer submits an inquiry
                </div>
                <Textarea 
                  id="inquiryConfirmation" 
                  name="inquiryConfirmation"
                  value={emailTemplates.inquiryConfirmation}
                  onChange={handleTemplateChange}
                  rows={10}
                />
                <div className="text-sm text-gray-500 mt-2">
                  Available variables: [Customer Name], [Service Type], [Description], [Date]
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accountCreation">Account Creation Email</Label>
                <div className="text-sm text-gray-500 mb-2">
                  Sent when creating a new customer account
                </div>
                <Textarea 
                  id="accountCreation" 
                  name="accountCreation"
                  value={emailTemplates.accountCreation}
                  onChange={handleTemplateChange}
                  rows={10}
                />
                <div className="text-sm text-gray-500 mt-2">
                  Available variables: [Customer Name], [Username], [Password], [Login URL]
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="ml-auto bg-tech-blue hover:bg-tech-darkblue"
                onClick={saveSettings}
              >
                Save Templates
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Notification Settings */}
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure when and how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="newInquiryEmail" className="font-normal">New Inquiry Notification</Label>
                    <p className="text-sm text-gray-500">Receive an email when a new inquiry is submitted</p>
                  </div>
                  <Switch 
                    id="newInquiryEmail" 
                    checked={notificationSettings.newInquiryEmail}
                    onCheckedChange={() => handleNotificationToggle('newInquiryEmail')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="inquiryStatusEmail" className="font-normal">Inquiry Status Updates</Label>
                    <p className="text-sm text-gray-500">Receive emails when an inquiry status changes</p>
                  </div>
                  <Switch 
                    id="inquiryStatusEmail" 
                    checked={notificationSettings.inquiryStatusEmail}
                    onCheckedChange={() => handleNotificationToggle('inquiryStatusEmail')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="customerAccountEmail" className="font-normal">New Customer Account</Label>
                    <p className="text-sm text-gray-500">Receive an email when a new customer account is created</p>
                  </div>
                  <Switch 
                    id="customerAccountEmail" 
                    checked={notificationSettings.customerAccountEmail}
                    onCheckedChange={() => handleNotificationToggle('customerAccountEmail')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="paymentReceivedEmail" className="font-normal">Payment Received</Label>
                    <p className="text-sm text-gray-500">Receive an email when a customer makes a payment</p>
                  </div>
                  <Switch 
                    id="paymentReceivedEmail" 
                    checked={notificationSettings.paymentReceivedEmail}
                    onCheckedChange={() => handleNotificationToggle('paymentReceivedEmail')}
                  />
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">SMS Notifications</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="newInquirySMS" className="font-normal">New Inquiry SMS</Label>
                    <p className="text-sm text-gray-500">Receive an SMS when a new inquiry is submitted</p>
                  </div>
                  <Switch 
                    id="newInquirySMS" 
                    checked={notificationSettings.newInquirySMS}
                    onCheckedChange={() => handleNotificationToggle('newInquirySMS')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="inquiryStatusSMS" className="font-normal">Inquiry Status SMS</Label>
                    <p className="text-sm text-gray-500">Receive SMS when an inquiry status changes</p>
                  </div>
                  <Switch 
                    id="inquiryStatusSMS" 
                    checked={notificationSettings.inquiryStatusSMS}
                    onCheckedChange={() => handleNotificationToggle('inquiryStatusSMS')}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="ml-auto bg-tech-blue hover:bg-tech-darkblue"
                onClick={saveSettings}
              >
                Save Notification Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
