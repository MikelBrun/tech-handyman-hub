
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Users, FileText, CheckCircle, Clock } from "lucide-react";

const Dashboard = () => {
  // Mock statistics for the dashboard
  const stats = [
    { 
      title: "New Inquiries", 
      value: 8, 
      description: "Pending review", 
      icon: FileText,
      link: "/admin/inquiries?status=new"
    },
    { 
      title: "Active Customers", 
      value: 42, 
      description: "Total registered customers", 
      icon: Users,
      link: "/admin/customers"
    },
    { 
      title: "Jobs in Progress", 
      value: 12, 
      description: "Currently being worked on", 
      icon: Clock,
      link: "/admin/inquiries?status=in-progress"
    },
    { 
      title: "Completed Jobs", 
      value: 96, 
      description: "In the last 30 days", 
      icon: CheckCircle,
      link: "/admin/inquiries?status=completed"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link to="/admin/inquiries">View All Inquiries</Link>
          </Button>
          <Button variant="default" className="bg-tech-blue hover:bg-tech-darkblue">
            Generate Reports
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-xl font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-5 w-5 text-tech-blue" />
              </div>
              <CardDescription>{stat.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end">
                <p className="text-3xl font-bold">{stat.value}</p>
                <Link to={stat.link} className="text-tech-blue hover:underline flex items-center text-sm">
                  View <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Inquiries</CardTitle>
            <CardDescription>Latest customer service requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium">John Doe</p>
                    <span className="text-sm text-gray-500">Today at 2:34 PM</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">PC Troubleshooting</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending Review
                    </span>
                    <Button variant="ghost" size="sm" className="text-tech-blue">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild className="w-full">
                <Link to="/admin/inquiries">View All Inquiries</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Scheduled appointments and follow-ups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium">Network Setup - Sarah Johnson</p>
                    <span className="text-sm text-gray-500">Tomorrow, 10:00 AM</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">123 Main Street, Anytown</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                    <Button variant="ghost" size="sm" className="text-tech-blue">
                      Reschedule
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild className="w-full">
                <Link to="/admin/schedule">View Calendar</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
