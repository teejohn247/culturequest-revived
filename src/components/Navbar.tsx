import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
            <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L16 16L8 24" stroke="#FFC800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 8L24 16L16 24" stroke="#40E0D0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="32" y="22" fontFamily="Poppins, sans-serif" fontSize="18" fontWeight="600" fill="currentColor">zoomsphere</text>
            </svg>
          </Link>

          {/* Desktop Navigation + CTA Buttons */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              <Link to="/pricing" onClick={handleLinkClick} className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
                Pricing
              </Link>
              <Link to="/about" onClick={handleLinkClick} className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
                Blog
              </Link>
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <Link to="/about" onClick={handleLinkClick} className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
                About us
              </Link>
              <Link to="/about" onClick={handleLinkClick} className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-foreground font-medium">
                Log In
              </Button>
              <Button variant="outline">
                Start a free trial
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background"
        >
          <div className="px-4 py-6 space-y-4">
            <Link to="/features" className="block text-foreground font-medium hover:text-foreground/70" onClick={handleLinkClick}>
              Solutions
            </Link>
            <Link to="/pricing" className="block text-foreground font-medium hover:text-foreground/70" onClick={handleLinkClick}>
              Pricing
            </Link>
            <Link to="/about" className="block text-foreground font-medium hover:text-foreground/70" onClick={handleLinkClick}>
              Blog
            </Link>
            <Link to="/about" className="block text-foreground font-medium hover:text-foreground/70" onClick={handleLinkClick}>
              Resources
            </Link>
            <Link to="/about" className="block text-foreground font-medium hover:text-foreground/70" onClick={handleLinkClick}>
              About us
            </Link>
            <Link to="/about" className="block text-foreground font-medium hover:text-foreground/70" onClick={handleLinkClick}>
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="ghost" className="w-full">Log In</Button>
              <Button variant="outline" className="w-full">Start a free trial</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;