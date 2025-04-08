
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-tech-blue text-white p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="2" x2="9" y2="4"></line>
                <line x1="15" y1="2" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="22"></line>
                <line x1="15" y1="20" x2="15" y2="22"></line>
                <line x1="20" y1="9" x2="22" y2="9"></line>
                <line x1="20" y1="14" x2="22" y2="14"></line>
                <line x1="2" y1="9" x2="4" y2="9"></line>
                <line x1="2" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <span className="font-inter font-bold text-xl text-tech-blue">Tech Handyman</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Home</Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Services</Link>
            <Link to="/inquiry" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Submit Inquiry</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-tech-blue transition-colors">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/customer-login">
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-colors">
                Customer Login
              </Button>
            </Link>
            <Link to="/inquiry">
              <Button className="bg-tech-orange hover:bg-tech-lightorange text-white cta-button">
                Submit Inquiry
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-tech-blue transition-colors py-2">Home</Link>
              <Link to="/services" className="font-medium text-gray-700 hover:text-tech-blue transition-colors py-2">Services</Link>
              <Link to="/inquiry" className="font-medium text-gray-700 hover:text-tech-blue transition-colors py-2">Submit Inquiry</Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-tech-blue transition-colors py-2">About Us</Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-tech-blue transition-colors py-2">Contact</Link>
              
              <div className="flex flex-col space-y-3 pt-3">
                <Link to="/customer-login">
                  <Button variant="outline" className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-colors">
                    Customer Login
                  </Button>
                </Link>
                <Link to="/inquiry">
                  <Button className="w-full bg-tech-orange hover:bg-tech-lightorange text-white">
                    Submit Inquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
