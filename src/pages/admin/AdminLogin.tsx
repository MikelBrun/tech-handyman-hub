
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
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, { message: "Please enter your admin username." }),
  password: z.string().min(1, { message: "Please enter your password." }),
});

type FormValues = z.infer<typeof formSchema>;

const AdminLogin = () => {
  const { toast } = useToast();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoggingIn(true);

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Admin login attempted with:", data.username);
      
      // For demo purposes, automatically log in with any credentials
      if (data.username === "admin" && data.password === "admin") {
        // Set session or token here in a real app
        localStorage.setItem("adminAuthenticated", "true");
        
        toast({
          title: "Login Successful",
          description: "Welcome to the admin dashboard.",
        });
        
        // Redirect to admin dashboard
        navigate("/admin/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. For demo, use username 'admin' and password 'admin'.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast({
        title: "Login Failed",
        description: "An error occurred while trying to log in. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoggingIn(false);
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
                    <path d="M14 22h5a2 2 0 0 0 2-2V7l-5-5H5a2 2 0 0 0-2 2v4"></path>
                    <path d="M14 2v5h5"></path>
                    <circle cx="8" cy="16" r="5"></circle>
                    <path d="m6 18 4-4"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
                <p className="text-gray-600 mt-2">
                  Access the admin dashboard to manage inquiries and customers.
                </p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter admin username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-blue hover:bg-tech-darkblue text-white"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? "Logging in..." : "Log In"}
                  </Button>
                  
                  <div className="text-center text-sm text-gray-600 mt-2">
                    <p>Demo credentials: username "admin" / password "admin"</p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLogin;
