
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Password reset requested for:", data.email);
      
      setIsSubmitted(true);
      toast({
        title: "Reset Request Sent",
        description: "If an account exists with this email, you will receive password reset instructions shortly.",
      });
    } catch (error) {
      console.error("Error sending reset request:", error);
      toast({
        title: "Request Failed",
        description: "An error occurred while trying to process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-tech-blue text-white p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
                <p className="text-gray-600 mt-2">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>
              
              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-tech-blue hover:bg-tech-darkblue text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Reset Instructions"}
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="text-center py-4">
                  <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
                    <p>Reset instructions sent! Please check your email.</p>
                  </div>
                  <p className="mb-4">Don't see the email? Check your spam folder or request another reset link.</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Try Again
                  </Button>
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm flex justify-between">
                  <Link to="/customer-login" className="text-tech-blue hover:underline">
                    Back to Login
                  </Link>
                  <Link to="/inquiry" className="text-tech-blue hover:underline">
                    Submit an Inquiry
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
