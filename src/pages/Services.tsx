
import { Monitor, Key, Wifi, HardDrive, Printer, Clock, ShieldCheck, Database, Cog, Wrench, LifeBuoy, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const Services = () => {
  const services = [
    {
      id: "pc-troubleshooting",
      title: "PC Troubleshooting",
      description: "Diagnose and fix slow performance, crashes, blue screens, startup issues, and other common computer problems.",
      icon: Monitor,
      href: "/inquiry",
      details: "Our expert technicians can identify and resolve a wide range of PC issues, from annoying slowdowns to complete system failures. We'll get your computer running smoothly again with minimal downtime."
    },
    {
      id: "password-recovery",
      title: "Password Recovery",
      description: "Regain access to your accounts with our secure password recovery and account access solutions.",
      icon: Key,
      href: "/inquiry",
      details: "Locked out of your accounts? Our password recovery service helps you regain access to your computer, email, or other important accounts safely and securely."
    },
    {
      id: "network-setup",
      title: "Network Setup",
      description: "Professional installation and configuration of home or small business networks and Wi-Fi systems.",
      icon: Wifi,
      href: "/inquiry",
      details: "We'll set up your entire network for optimal performance, including router configuration, network security, and Wi-Fi optimization to eliminate dead zones."
    },
    {
      id: "custom-pc",
      title: "Custom PC Builds",
      description: "Custom-built computers designed for your specific needs, whether for gaming, work, or general use.",
      icon: HardDrive,
      href: "/inquiry",
      details: "We build custom PCs tailored to your exact requirements and budget. From high-performance gaming rigs to reliable business workstations, we use quality components with comprehensive warranties."
    },
    {
      id: "printer-setup",
      title: "Printer Setup",
      description: "Installation, configuration and troubleshooting for all types of printers and printing issues.",
      icon: Printer,
      href: "/inquiry",
      details: "We'll get your printer connected to all your devices, configure wireless printing, install necessary drivers, and ensure everything is working perfectly."
    },
    {
      id: "data-recovery",
      title: "Data Recovery",
      description: "Recover lost or deleted files from computers, external drives, and other storage devices.",
      icon: Database,
      href: "/inquiry",
      details: "Our data recovery experts can help retrieve lost documents, photos, and other important files from damaged or corrupted storage devices."
    },
    {
      id: "software-installation",
      title: "Software Installation",
      description: "Professional installation and configuration of software applications for your specific needs.",
      icon: Cog,
      href: "/inquiry",
      details: "We'll install and configure your software programs, ensuring they're properly set up and optimized for your system."
    },
    {
      id: "virus-removal",
      title: "Virus Removal",
      description: "Comprehensive malware and virus detection and removal to protect your system and data.",
      icon: ShieldCheck,
      href: "/inquiry",
      details: "Our thorough virus removal process eliminates malware, spyware, and other threats while implementing better protection for the future."
    },
    {
      id: "hardware-repair",
      title: "Hardware Repair",
      description: "Diagnosis and repair of hardware issues including component replacement and upgrades.",
      icon: Wrench,
      href: "/inquiry",
      details: "From screen replacements to motherboard repairs, we can fix or replace damaged components to get your device working again."
    },
    {
      id: "tech-support",
      title: "Remote Support",
      description: "Get help with technical issues from the comfort of your home via secure remote assistance.",
      icon: LifeBuoy,
      href: "/inquiry",
      details: "Many issues can be resolved without an in-person visit. Our secure remote support allows us to troubleshoot and fix problems while you watch."
    },
    {
      id: "system-upgrades",
      title: "System Upgrades",
      description: "Boost your computer's performance with hardware upgrades that extend its useful life.",
      icon: Cpu,
      href: "/inquiry",
      details: "Improve your existing computer's speed and capabilities with targeted upgrades to RAM, storage, graphics cards, and other components."
    },
    {
      id: "response-times",
      title: "Quick Response",
      description: "Fast service with most issues resolved within 24-48 hours of your initial inquiry submission.",
      icon: Clock,
      href: "/inquiry",
      details: "We understand that technical problems can be urgent. That's why we prioritize quick response times and efficient problem-solving."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="gradient-bg py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technical Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive IT support and technical solutions for all your computer and network needs.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div id={service.id} key={service.id}>
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    href={service.href}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Service Details</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn more about each of our services and how we can help solve your technical problems.
              </p>
            </div>
            
            <div className="space-y-12">
              {services.map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-24 border-b border-gray-200 pb-8 last:border-0">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="bg-tech-lightgray p-4 rounded-full md:mt-2">
                      <service.icon className="w-12 h-12 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-700 mb-4 text-lg">{service.details}</p>
                      <Link to="/inquiry">
                        <Button className="bg-tech-blue hover:bg-tech-darkblue text-white">
                          Request this Service
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">How quickly can you respond to my inquiry?</h3>
                  <p className="text-gray-700">We typically respond to all inquiries within 24 hours, and often much faster during business hours.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Do you offer on-site service or is everything remote?</h3>
                  <p className="text-gray-700">We offer both remote and on-site services depending on the nature of your technical issue. Many problems can be resolved remotely, but we're happy to come to your location when necessary.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">What are your rates?</h3>
                  <p className="text-gray-700">Our rates vary depending on the service required. We provide detailed cost estimates before beginning any work, so you'll know exactly what to expect. We offer both hourly rates and flat-fee services for common issues.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">How do I pay for services?</h3>
                  <p className="text-gray-700">We accept all major credit cards, PayPal, and electronic bank transfers. Payment is typically due upon completion of service, and you'll receive a detailed invoice for your records.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Do you offer any guarantees?</h3>
                  <p className="text-gray-700">Yes! We offer a 30-day service guarantee on all our work. If the same issue recurs within 30 days of our service, we'll fix it at no additional charge.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
