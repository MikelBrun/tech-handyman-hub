
import { Monitor, Key, Wifi, HardDrive, Printer, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";

const FeaturedServices = () => {
  const services = [
    {
      title: "PC Troubleshooting",
      description: "Diagnose and fix slow performance, crashes, blue screens, and other common computer issues.",
      icon: Monitor,
      href: "/services#pc-troubleshooting"
    },
    {
      title: "Password Recovery",
      description: "Regain access to your accounts with our secure password recovery and account access solutions.",
      icon: Key,
      href: "/services#password-recovery"
    },
    {
      title: "Network Setup",
      description: "Professional installation and configuration of home or small business networks and Wi-Fi systems.",
      icon: Wifi,
      href: "/services#network-setup"
    },
    {
      title: "Custom PC Builds",
      description: "Custom-built computers designed for your specific needs, whether for gaming, work, or general use.",
      icon: HardDrive,
      href: "/services#custom-pc"
    },
    {
      title: "Printer Setup",
      description: "Installation, configuration and troubleshooting for all types of printers and printing issues.",
      icon: Printer,
      href: "/services#printer-setup"
    },
    {
      title: "Quick Response",
      description: "Fast service with most issues resolved within 24-48 hours of your initial inquiry submission.",
      icon: Clock,
      href: "/services#response-times"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Technical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technical support and solutions to solve all your computer and network related problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-tech-blue hover:bg-tech-darkblue text-white px-8 py-2">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
