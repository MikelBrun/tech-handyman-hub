
import HeroSection from "@/components/HeroSection";
import FeaturedServices from "@/components/FeaturedServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Your Trusted Tech Handyman</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional IT support and technical solutions for homes and small businesses. 
              From troubleshooting to setup and customization, we've got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-tech-blue font-bold text-5xl mb-2">250+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-tech-blue font-bold text-5xl mb-2">24h</div>
                <p className="text-gray-600">Average Response Time</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-tech-blue font-bold text-5xl mb-2">98%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        <FeaturedServices />
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h3>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="bg-tech-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Submit Your Inquiry</h4>
                        <p className="text-gray-600">Fill out our simple inquiry form with details about your technical issue.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-tech-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Get a Quick Response</h4>
                        <p className="text-gray-600">Our technicians will review your inquiry and respond with questions or a solution.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-tech-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Receive a Cost Estimate</h4>
                        <p className="text-gray-600">We'll provide a clear cost estimate for resolving your specific issue.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-tech-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Problem Solved</h4>
                        <p className="text-gray-600">Upon approval, we'll quickly resolve your issue and follow up to ensure satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-8 md:p-12 flex items-center justify-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Guarantees</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Fast response within 24 hours</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Clear and transparent pricing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">No fix, no fee policy</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">30-day service guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Certified technical professionals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
