
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, href, className }: ServiceCardProps) => {
  return (
    <div className={cn("service-card bg-white rounded-lg shadow-md p-6 hover:border-tech-blue border border-transparent", className)}>
      <div className="mb-4 bg-tech-lightgray p-3 rounded-full w-16 h-16 flex items-center justify-center">
        <Icon className="w-8 h-8 text-tech-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2 font-inter">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={href}>
        <Button variant="outline" className="mt-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-colors">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
