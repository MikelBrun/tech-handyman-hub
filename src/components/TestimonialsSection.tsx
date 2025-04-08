
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Small Business Owner",
      content: "Tech Handyman saved my business when our network went down. They responded within an hour and had us back up and running by the end of the day. Truly exceptional service!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "I was struggling with computer issues for months before contacting Tech Handyman. They diagnosed the problem quickly and provided a cost-effective solution. I'm now a loyal customer.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Graphic Designer",
      content: "The custom PC they built for me is incredible - fast, reliable, and perfect for my design work. They really listened to my needs and delivered exactly what I wanted within my budget.",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their experiences with Tech Handyman.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-transparent shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 text-tech-blue">
                  <Quote size={32} />
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
