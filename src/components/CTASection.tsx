
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Solve Your Tech Problems?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Submit an inquiry today and our technical experts will get back to you quickly with a solution and cost estimate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/inquiry">
            <Button className="bg-tech-orange hover:bg-tech-lightorange text-white text-lg px-8 py-6 cta-button">
              Submit an Inquiry
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-tech-blue text-lg px-8 py-6 cta-button">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
