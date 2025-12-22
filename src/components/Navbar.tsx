import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

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
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20" >
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2" >
            <img 
              src="/silo-logo.svg" 
              alt="SILO Logo" 
              className="h-8 w-auto md:h-12 lg:h-16"
              style={{maxWidth: 'clamp(80px, 15vw, 180px)', maxHeight: 'clamp(80px, 15vw, 180px)'}}
            />
          </Link>

          {/* Desktop Navigation + CTA Buttons */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-12">
              <Link to="/features" onClick={handleLinkClick} className="text-lg text-foreground hover:text-foreground/80 transition-colors">
                Features
              </Link>
              <Link to="/pricing" onClick={handleLinkClick} className="text-lg text-foreground hover:text-foreground/80 transition-colors">
                Pricing
              </Link>
              <Link to="/about" onClick={handleLinkClick} className="text-lg text-foreground hover:text-foreground/80 transition-colors">
                About us
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                Login
              </Button>
              <Button variant="default">
                Try for free
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
            <Link to="/features" className="block text-muted-foreground hover:text-foreground" onClick={handleLinkClick}>
              Features
            </Link>
            <Link to="/pricing" className="block text-muted-foreground hover:text-foreground" onClick={handleLinkClick}>
              Pricing
            </Link>
            {/* <a href="#resources" className="block text-muted-foreground hover:text-foreground">
              Resources
            </a> */}
            <Link to="/about" className="block text-muted-foreground hover:text-foreground" onClick={handleLinkClick}>
              About us
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full">Login</Button>
              <Button variant="default" className="w-full">Try for free</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
