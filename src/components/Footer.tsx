import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src="/Silo-White-logo.png" 
              alt="SILO Logo" 
              className="h-10 mb-4"
            />
            <p className="text-background/70 text-sm max-w-xs">
              The All-In-One ERP for Effective Teamwork. Plan, manage, analyze, and collaborate seamlessly.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="text-background/70 hover:text-background">HR Management</Link></li>
              <li><Link to="/features" className="text-background/70 hover:text-background">CRM</Link></li>
              <li><Link to="/features" className="text-background/70 hover:text-background">Accounting</Link></li>
              <li><Link to="/features" className="text-background/70 hover:text-background">Analytics</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-background/70 hover:text-background">Blog</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background">Case Studies</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background">Video Tutorials</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background">Help Center</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-background/70 hover:text-background">About us</Link></li>
              <li><Link to="/pricing" className="text-background/70 hover:text-background">Pricing</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background">Contact</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 mt-12 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 SILO Solutions Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;