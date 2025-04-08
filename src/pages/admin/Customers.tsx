
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ChevronLeft, 
  ChevronRight,
  UserPlus,
  Mail,
  FileText
} from "lucide-react";

// Mock customer data
const mockCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    username: "JohnDoe123",
    address: "123 Main St, Anytown, CA 12345",
    dateCreated: "2023-02-15T10:30:00",
    status: "active",
    inquiryCount: 3,
    jobsCompleted: 2
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "555-987-6543",
    username: "SarahJ456",
    address: "456 Oak Ave, Somewhere, CA 67890",
    dateCreated: "2023-03-10T14:45:00",
    status: "active",
    inquiryCount: 1,
    jobsCompleted: 1
  },
  {
    id: 3,
    name: "Mike Williams",
    email: "mike.w@example.com",
    phone: "555-456-7890",
    username: "MikeW789",
    address: "789 Pine Rd, Nowhere, CA 45678",
    dateCreated: "2023-01-05T09:15:00",
    status: "inactive",
    inquiryCount: 4,
    jobsCompleted: 0
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "555-789-0123",
    username: "EmilyR101",
    address: "101 Cedar Ln, Elsewhere, CA 10112",
    dateCreated: "2023-03-25T16:20:00",
    status: "active",
    inquiryCount: 2,
    jobsCompleted: 2
  },
  {
    id: 5,
    name: "David Chen",
    email: "david.c@example.com",
    phone: "555-234-5678",
    username: "DavidC234",
    address: "234 Maple Dr, Anywhere, CA 23456",
    dateCreated: "2023-02-28T11:10:00",
    status: "active",
    inquiryCount: 5,
    jobsCompleted: 3
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500">Active</Badge>;
    case "inactive":
      return <Badge className="bg-gray-500">Inactive</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const Customers = () => {
  const [customers, setCustomers] = useState(mockCustomers);
  const [filteredCustomers, setFilteredCustomers] = useState(mockCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCustomer, setSelectedCustomer] = useState<typeof mockCustomers[0] | null>(null);
  
  const itemsPerPage = 5;
  
  // Filter customers based on search term
  const filterCustomers = () => {
    if (!searchTerm.trim()) {
      setFilteredCustomers(customers);
      return;
    }
    
    const filtered = customers.filter(customer => 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredCustomers(filtered);
    setCurrentPage(1);
  };
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customer Management</h1>
        <Button variant="default" className="bg-tech-blue hover:bg-tech-darkblue">
          <UserPlus className="mr-2 h-4 w-4" /> Add New Customer
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Customers</CardTitle>
          <CardDescription>Manage registered customer accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search by name, email, or username..."
                className="pl-8"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <Button variant="outline" onClick={filterCustomers}>
              Search
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Name</th>
                  <th className="text-left py-3 px-2">Username</th>
                  <th className="text-left py-3 px-2">Date Created</th>
                  <th className="text-left py-3 px-2">Status</th>
                  <th className="text-left py-3 px-2">Inquiries</th>
                  <th className="text-right py-3 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCustomers.length > 0 ? (
                  paginatedCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2">
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-gray-500">{customer.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-2">{customer.username}</td>
                      <td className="py-3 px-2">
                        {new Date(customer.dateCreated).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-2">
                        {getStatusBadge(customer.status)}
                      </td>
                      <td className="py-3 px-2">
                        {customer.inquiryCount} ({customer.jobsCompleted} completed)
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">View</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>Customer Details</DialogTitle>
                                <DialogDescription>
                                  Account created on {new Date(customer.dateCreated).toLocaleDateString()}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                <div>
                                  <h3 className="font-semibold text-gray-700">Personal Information</h3>
                                  <div className="mt-2 space-y-2">
                                    <p><span className="font-medium">Name:</span> {customer.name}</p>
                                    <p><span className="font-medium">Email:</span> {customer.email}</p>
                                    <p><span className="font-medium">Phone:</span> {customer.phone}</p>
                                    <p><span className="font-medium">Address:</span> {customer.address}</p>
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-700">Account Information</h3>
                                  <div className="mt-2 space-y-2">
                                    <p><span className="font-medium">Username:</span> {customer.username}</p>
                                    <p><span className="font-medium">Status:</span> {getStatusBadge(customer.status)}</p>
                                    <p><span className="font-medium">Total Inquiries:</span> {customer.inquiryCount}</p>
                                    <p><span className="font-medium">Completed Jobs:</span> {customer.jobsCompleted}</p>
                                  </div>
                                </div>
                              </div>
                              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                                <DialogClose asChild>
                                  <Button variant="outline" className="flex-1">
                                    Close
                                  </Button>
                                </DialogClose>
                                <Button 
                                  variant="default" 
                                  className="flex-1 bg-tech-blue hover:bg-tech-darkblue"
                                >
                                  <Mail className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                                <Button 
                                  variant="outline" 
                                  className="flex-1 border-tech-blue text-tech-blue"
                                >
                                  <FileText className="mr-2 h-4 w-4" /> View Inquiries
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-tech-blue text-tech-blue"
                          >
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-gray-500">
                      No customers found matching your search
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
