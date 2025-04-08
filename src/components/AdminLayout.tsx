
import { Navigate, Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  // Check if user is authenticated as admin
  const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true";
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminNavbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children || <Outlet />}
      </main>
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tech Handyman Admin Portal
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
