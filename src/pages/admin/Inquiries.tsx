
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  X, 
  Mail,
  User
} from "lucide-react";

// Mock inquiry data
const mockInquiries = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    service: "PC Troubleshooting",
    status: "new",
    date: "2023-04-07T14:30:00",
    description: "My computer is running very slowly and occasionally freezes completely. I've tried restarting it but the problem persists."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "555-987-6543",
    service: "Network Setup",
    status: "in-progress",
    date: "2023-04-06T10:15:00",
    description: "I need assistance setting up a new mesh Wi-Fi system for my two-story home. I'm experiencing dead zones in several rooms."
  },
  {
    id: 3,
    name: "Mike Williams",
    email: "mike.w@example.com",
    phone: "555-456-7890",
    service: "Custom PC Build",
    status: "accepted",
    date: "2023-04-05T16:45:00",
    description: "Looking for a high-performance gaming PC build with the latest RTX graphics card and at least 32GB of RAM."
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "555-789-0123",
    service: "Data Recovery",
    status: "completed",
    date: "2023-04-04T09:00:00",
    description: "I accidentally deleted important work files from my laptop. Need help recovering these files as soon as possible."
  },
  {
    id: 5,
    name: "David Chen",
    email: "david.c@example.com",
    phone: "555-234-5678",
    service: "Virus Removal",
    status: "new",
    date: "2023-04-07T11:20:00",
    description: "My computer has become very slow and I'm seeing many pop-up ads. I think I might have a virus or malware."
  },
  {
    id: 6,
    name: "Lisa Brown",
    email: "lisa.b@example.com",
    phone: "555-345-6789",
    service: "Password Recovery",
    status: "accepted",
    date: "2023-04-06T13:10:00",
    description: "I'm locked out of my Windows account and can't reset the password through normal methods."
  },
  {
    id: 7,
    name: "Robert Garcia",
    email: "robert.g@example.com",
    phone: "555-567-8901",
    service: "Printer Setup",
    status: "in-progress",
    date: "2023-04-05T15:30:00",
    description: "Need help setting up my new wireless printer to work with multiple devices, including laptops and smartphones."
  },
  {
    id: 8,
    name: "Jennifer Taylor",
    email: "jennifer.t@example.com",
    phone: "555-678-9012",
    service: "System Upgrades",
    status: "new",
    date: "2023-04-07T10:00:00",
    description: "My laptop is running slowly and I'd like to upgrade the RAM and possibly install an SSD to improve performance."
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "new":
      return <Badge className="bg-blue-500">New</Badge>;
    case "in-progress":
      return <Badge className="bg-yellow-500">In Progress</Badge>;
    case "accepted":
      return <Badge className="bg-green-500">Accepted</Badge>;
    case "completed":
      return <Badge className="bg-gray-500">Completed</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const Inquiries = () => {
  const { toast } = useToast();
  const [inquiries, setInquiries] = useState(mockInquiries);
  const [filteredInquiries, setFilteredInquiries] = useState(mockInquiries);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedInquiry, setSelectedInquiry] = useState<typeof mockInquiries[0] | null>(null);
  const [emailTemplate, setEmailTemplate] = useState("");
  
  const itemsPerPage = 5;
  
  // Filter inquiries based on search term and status
  const filterInquiries = () => {
    let filtered = inquiries;
    
    if (searchTerm) {
      filtered = filtered.filter(inquiry => 
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== "all") {
      filtered = filtered.filter(inquiry => inquiry.status === statusFilter);
    }
    
    setFilteredInquiries(filtered);
    setCurrentPage(1);
  };
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle status filter change
  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
  };
  
  // Apply filters when search or status changes
  useState(() => {
    filterInquiries();
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInquiries = filteredInquiries.slice(startIndex, startIndex + itemsPerPage);
  
  // Handle inquiry acceptance
  const handleAccept = (inquiry: typeof mockInquiries[0]) => {
    // Set up email template
    setEmailTemplate(`Dear ${inquiry.name},

Thank you for submitting an inquiry about ${inquiry.service.toLowerCase()} with Tech Handyman. We're pleased to inform you that we've reviewed your request and can assist you.

One of our technicians will contact you shortly to discuss your needs in more detail and schedule a convenient time for service.

Your Inquiry Details:
Service Requested: ${inquiry.service}
Description: ${inquiry.description}

If you have any questions before we contact you, please don't hesitate to reply to this email.

Best regards,
The Tech Handyman Team`);
    
    setSelectedInquiry(inquiry);
  };
  
  // Handle sending confirmation email
  const handleSendEmail = () => {
    if (!selectedInquiry) return;
    
    // Update inquiry status
    const updatedInquiries = inquiries.map(item => 
      item.id === selectedInquiry.id ? { ...item, status: "accepted" } : item
    );
    
    setInquiries(updatedInquiries);
    filterInquiries();
    
    // Show success toast
    toast({
      title: "Email Sent",
      description: `Confirmation email sent to ${selectedInquiry.name}`,
    });
    
    // Reset selected inquiry
    setSelectedInquiry(null);
  };
  
  // Create customer account from inquiry
  const createCustomerAccount = (inquiry: typeof mockInquiries[0]) => {
    // In a real implementation, this would make an API call to create the account
    
    toast({
      title: "Account Created",
      description: `Customer account created for ${inquiry.name}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customer Inquiries</h1>
        <Button variant="default" className="bg-tech-blue hover:bg-tech-darkblue">
          Export Data
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Filter Inquiries</CardTitle>
          <CardDescription>Search and filter customer inquiries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search by name, email, or service..."
                className="pl-8"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyUp={() => filterInquiries()}
              />
            </div>
            <Select value={statusFilter} onValueChange={handleStatusChange}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={filterInquiries}>
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Inquiry List</CardTitle>
          <CardDescription>
            Showing {Math.min(filteredInquiries.length, startIndex + 1)}-
            {Math.min(filteredInquiries.length, startIndex + itemsPerPage)} of {filteredInquiries.length} inquiries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Name</th>
                  <th className="text-left py-3 px-2">Service</th>
                  <th className="text-left py-3 px-2">Date</th>
                  <th className="text-left py-3 px-2">Status</th>
                  <th className="text-right py-3 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedInquiries.length > 0 ? (
                  paginatedInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2">
                        <div>
                          <p className="font-medium">{inquiry.name}</p>
                          <p className="text-sm text-gray-500">{inquiry.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-2">{inquiry.service}</td>
                      <td className="py-3 px-2">
                        {new Date(inquiry.date).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-2">
                        {getStatusBadge(inquiry.status)}
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">View</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>Inquiry Details</DialogTitle>
                                <DialogDescription>
                                  Submitted on {new Date(inquiry.date).toLocaleString()}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                <div>
                                  <h3 className="font-semibold text-gray-700">Customer Information</h3>
                                  <div className="mt-2 space-y-2">
                                    <p><span className="font-medium">Name:</span> {inquiry.name}</p>
                                    <p><span className="font-medium">Email:</span> {inquiry.email}</p>
                                    <p><span className="font-medium">Phone:</span> {inquiry.phone}</p>
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-700">Service Details</h3>
                                  <div className="mt-2 space-y-2">
                                    <p><span className="font-medium">Service:</span> {inquiry.service}</p>
                                    <p><span className="font-medium">Status:</span> {getStatusBadge(inquiry.status)}</p>
                                  </div>
                                </div>
                                <div className="md:col-span-2">
                                  <h3 className="font-semibold text-gray-700">Description</h3>
                                  <p className="mt-2 text-gray-600">{inquiry.description}</p>
                                </div>
                              </div>
                              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                                {inquiry.status === "new" && (
                                  <>
                                    <DialogClose asChild>
                                      <Button variant="outline" className="flex-1">
                                        Close
                                      </Button>
                                    </DialogClose>
                                    <Button 
                                      variant="default" 
                                      className="flex-1 bg-tech-blue hover:bg-tech-darkblue"
                                      onClick={() => handleAccept(inquiry)}
                                    >
                                      Accept Inquiry
                                    </Button>
                                  </>
                                )}
                                {inquiry.status !== "new" && (
                                  <>
                                    <DialogClose asChild>
                                      <Button variant="outline" className="flex-1">
                                        Close
                                      </Button>
                                    </DialogClose>
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <Button 
                                          variant="default" 
                                          className="flex-1 bg-tech-blue hover:bg-tech-darkblue"
                                        >
                                          <User className="mr-2 h-4 w-4" /> Create Customer Account
                                        </Button>
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>Create Customer Account</AlertDialogTitle>
                                          <AlertDialogDescription>
                                            This will create a new customer account for {inquiry.name} and send them login credentials via email.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                                          <AlertDialogAction onClick={() => createCustomerAccount(inquiry)}>
                                            Create Account
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                  </>
                                )}
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          {inquiry.status === "new" && (
                            <>
                              <Button 
                                variant="default" 
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => handleAccept(inquiry)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-gray-500">
                      No inquiries found matching your criteria
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
      
      {/* Email Confirmation Dialog */}
      <Dialog open={!!selectedInquiry} onOpenChange={(open) => !open && setSelectedInquiry(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Send Confirmation Email</DialogTitle>
            <DialogDescription>
              Review and edit the email that will be sent to {selectedInquiry?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="font-medium">To:</div>
              <div>{selectedInquiry?.email}</div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="font-medium">Subject:</div>
              <div>Your Tech Handyman Inquiry - {selectedInquiry?.service}</div>
            </div>
            <div className="mb-2 font-medium">Email Content:</div>
            <Textarea 
              value={emailTemplate} 
              onChange={(e) => setEmailTemplate(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setSelectedInquiry(null)}
            >
              Cancel
            </Button>
            <Button 
              variant="default" 
              className="flex-1 bg-tech-blue hover:bg-tech-darkblue"
              onClick={handleSendEmail}
            >
              <Mail className="mr-2 h-4 w-4" /> Send Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Inquiries;
