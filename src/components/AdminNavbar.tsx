
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AdminNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    // Clear admin session/token
    localStorage.removeItem("adminAuthenticated");
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out of the admin dashboard.",
    });
    
    // Redirect to admin login
    navigate("/admin/login");
  };

  return (
    <nav className="bg-tech-darkblue text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/admin/dashboard" className="text-xl font-bold">
              Tech Handyman <span className="text-tech-orange">Admin</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              <NavLink to="/admin/dashboard" current={location.pathname}>
                Dashboard
              </NavLink>
              <NavLink to="/admin/inquiries" current={location.pathname}>
                Inquiries
              </NavLink>
              <NavLink to="/admin/customers" current={location.pathname}>
                Customers
              </NavLink>
              <NavLink to="/admin/settings" current={location.pathname}>
                Settings
              </NavLink>
            </div>
            
            <Button 
              variant="ghost" 
              className="text-white hover:text-tech-orange"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  current: string;
  children: React.ReactNode;
}

const NavLink = ({ to, current, children }: NavLinkProps) => {
  const isActive = current === to;
  
  return (
    <Link
      to={to}
      className={`py-1 ${
        isActive 
          ? "text-tech-orange border-b-2 border-tech-orange" 
          : "text-white hover:text-tech-orange"
      }`}
    >
      {children}
    </Link>
  );
};

export default AdminNavbar;
