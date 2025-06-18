import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import ApplicationDashboardPage from "./pages/ApplicationDashboardPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

// Placeholder for authentication status. In a real app, this would come from context or a store.
const isAuthenticated = () => {
  // Simple check, replace with actual auth logic (e.g., check for token)
  // For now, let's assume not authenticated initially to show login page.
  // To test dashboard directly, you might temporarily set this to true.
  // console.log("Current auth state for routing: false (example)");
  return false; 
};


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    // User not authenticated, redirect to login page
    // You can also pass the current location to redirect back after login
    // return <Navigate to="/login" state={{ from: location }} replace />;
    return <Navigate to="/login" replace />;
  }
  return children;
};


const App = () => {
  console.log('App.tsx loaded');
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              // <ProtectedRoute> // Uncomment this line and <Navigate> below for auth guard
                <ApplicationDashboardPage />
              // </ProtectedRoute>
            } 
          />

          {/* Default Route Handling */}
          {/* If authenticated, redirect to dashboard, else to login */}
          <Route 
            path="/" 
            element={
              isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
            } 
          />
          
          {/* Catch-all Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;