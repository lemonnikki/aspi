import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToAnchor = (anchorId: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // fallback to hash to let Index effect handle it
        navigate({ pathname: "/", hash: `#${anchorId}` });
      }
    } else {
      navigate({ pathname: "/", hash: `#${anchorId}` });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-white rounded-full px-8 py-4 items-center justify-between shadow-lg w-full">
          {/* Logo */}
          <img src="/logo.png" alt="Steelworks Logo" className="h-8 w-auto ml-0" />

          {/* Navigation Links */}
          <div className="flex gap-8 text-gray-700 text-base">
            <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">Home</button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  About
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem
                  className="hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                  onClick={() => navigate('/vision-mission')}
                >
                  Vision / Mission
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => goToAnchor('services')}
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => goToAnchor('faqs')}
              className="hover:text-blue-600 transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => goToAnchor('contact')}
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Contact Information */}
          <div className="hidden lg:flex items-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9894429728</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>aspire@aisgroup.net.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <div className="bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
          <img src="/logo.png" alt="Steelworks Logo" className="h-6 w-auto" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:bg-black/10"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-black/10">
          <div className="flex flex-col space-y-4 text-black/80">
            <button onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="hover:text-black transition-colors text-left">Home</button>
            <div className="space-y-2">
              <div className="font-medium">About</div>
              <div className="ml-4 space-y-2">
                <button onClick={() => { navigate('/vision-mission'); setIsMenuOpen(false); }} className="block hover:text-blue-600 transition-colors text-left w-full">Vision / Mission</button>

              </div>
            </div>
            <button onClick={() => { goToAnchor('services'); setIsMenuOpen(false); }} className="hover:text-black transition-colors text-left">Services</button>
            <button onClick={() => { navigate('/projects'); setIsMenuOpen(false); }} className="block hover:text-blue-600 transition-colors text-left w-full">Projects</button>
            <button onClick={() => { goToAnchor('faqs'); setIsMenuOpen(false); }} className="hover:text-black transition-colors text-left">FAQs</button>
            <button onClick={() => { goToAnchor('contact'); setIsMenuOpen(false); }} className="hover:text-black transition-colors text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 