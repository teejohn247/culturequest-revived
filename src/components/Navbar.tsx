import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/silo-logo.svg" 
              alt="SILO Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            {/* <a href="#resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a> */}
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="default" size="sm">
              Try for free
            </Button>
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
            <Link to="/features" className="block text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link to="/pricing" className="block text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            {/* <a href="#resources" className="block text-muted-foreground hover:text-foreground">
              Resources
            </a> */}
            <Link to="/about" className="block text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
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
