import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Home from "./pages/dashboard/Home";
import Compare from "./pages/dashboard/Compare";
import Favorites from "./pages/dashboard/Favorites";
import Cart from "./pages/dashboard/Cart";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Protected = ({ children }: { children: React.ReactNode }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn redirectUrl="/auth" />
    </SignedOut>
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <Protected>
                <DashboardLayout>
                  <Home />
                </DashboardLayout>
              </Protected>
            }
          />
          <Route
            path="/dashboard/compare"
            element={
              <Protected>
                <DashboardLayout>
                  <Compare />
                </DashboardLayout>
              </Protected>
            }
          />
          <Route
            path="/dashboard/favorites"
            element={
              <Protected>
                <DashboardLayout>
                  <Favorites />
                </DashboardLayout>
              </Protected>
            }
          />
          <Route
            path="/dashboard/cart"
            element={
              <Protected>
                <DashboardLayout>
                  <Cart />
                </DashboardLayout>
              </Protected>
            }
          />
          <Route
            path="/dashboard/settings"
            element={
              <Protected>
                <DashboardLayout>
                  <Settings />
                </DashboardLayout>
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
