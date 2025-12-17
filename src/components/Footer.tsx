import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background" style={{backgroundColor: '#1A1A2E'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curious Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16 border-b border-background/20"
        >
          <div className="grid md:grid-cols-[minmax(0,1.6fr)_auto] gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-background mb-3">
                Curious about more?
              </h3>
              <p className="text-background/70 text-lg">
                Book a short meeting and see how we can support your culture.
              </p>
            </div>
            <div className="flex justify-end md:justify-end ml-auto">
              <Button
                onClick={() => openCalendly()}
                className="px-8 py-3 rounded-full font-semibold"
                style={{
                  background: "linear-gradient(135deg, #57D6D3, #7CF5CD)",
                  color: "#03312F"
                }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 py-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/Silo-White-logo.png" 
                alt="SILO Logo" 
                className="h-8 w-auto"
                style={{width: 150, height: 'auto'}}
              />
            </div>
            <p className="text-background/70 max-w-sm">
              SILO - The All-In-One ERP platform 
              that transforms raw data into valuable insights for small & medium businesses.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-background">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-background">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">About us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          
        </div>

        

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 pb-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-background/70 text-sm">
            © 2025 SILO Solutions Ltd. All rights reserved. www.silo-inc.com
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
