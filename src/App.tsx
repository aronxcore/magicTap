import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import AppHeader from "@/components/AppHeader";
import PersonalRecollek from "@/pages/PersonalRecollek";
import CompanyRecollek from "@/pages/CompanyRecollek";
import ClassRecollek from "@/pages/ClassRecollek";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <AppHeader isDark={isDark} toggle={toggle} />
      <Routes>
        <Route path="/" element={<PersonalRecollek />} />
        <Route path="/company" element={<CompanyRecollek />} />
        <Route path="/class" element={<ClassRecollek />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
