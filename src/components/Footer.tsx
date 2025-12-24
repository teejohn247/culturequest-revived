import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
              <path d="M8 8L16 16L8 24" stroke="#FFC800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 8L24 16L16 24" stroke="#40E0D0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="32" y="22" fontFamily="Poppins, sans-serif" fontSize="18" fontWeight="600" fill="white">zoomsphere</text>
            </svg>
            <p className="text-background/70 text-sm max-w-xs">
              The Social Media Scheduler for Effective Teamwork. Plan, schedule, analyze, and collaborate.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="text-background/70 hover:text-background">Scheduler</Link></li>
              <li><Link to="/features" className="text-background/70 hover:text-background">Analytics</Link></li>
              <li><Link to="/features" className="text-background/70 hover:text-background">Workflow Manager</Link></li>
              <li><Link to="/features" className="text-background/70 hover:text-background">Chat</Link></li>
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
            © 2025 ZoomSphere. All rights reserved.
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