
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2LTZoNnYtNmgtNnY2aC02djZoNnY2aDZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-center opacity-15"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Expert Technical Solutions for All Your IT Needs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
            Professional IT support and services for homes and small businesses. 
            We handle everything from troubleshooting to custom builds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Link to="/inquiry">
              <Button className="bg-tech-orange hover:bg-tech-lightorange text-white text-lg px-8 py-6 cta-button">
                Submit an Inquiry
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-tech-blue text-lg px-8 py-6 cta-button">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
