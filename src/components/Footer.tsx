import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
                src="/silo-logo.svg" 
                alt="SILO Logo" 
                className="h-8 w-auto"
                style={{width: 150, height: 90}}
              />
            </div>
            <p className="text-black max-w-sm">
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
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-black hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-black hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-black hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="text-black hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-black hover:text-background transition-colors">About us</a></li>
              <li><a href="#" className="text-black hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-black hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-black hover:text-background transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-black text-sm">
            © 2025 SILO Solutions Ltd. All rights reserved. www.silo-inc.com
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-black hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-black hover:text-background text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-black hover:text-background text-sm transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
