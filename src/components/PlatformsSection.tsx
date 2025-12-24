import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const platforms = [
  { name: "HR Management", icon: "👥", color: "#FF7B6B" },
  { name: "CRM", icon: "📊", color: "#40E0D0" },
  { name: "Accounting", icon: "💰", color: "#FFD700" },
  { name: "Inventory", icon: "📦", color: "#9B59B6" },
  { name: "Projects", icon: "📋", color: "#3B82F6" },
  { name: "Analytics", icon: "📈", color: "#10B981" },
];

const PlatformsSection = () => {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#40E0D0", color: "#000" }}
            >
              #Modules & Integrations
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(32px, 6vw, 48px)" }}
            >
              Works with all your business modules
            </h2>
            <p className="text-muted-foreground text-lg">
              Easily manage your departments across various modules, from HR and CRM to 
              Accounting and Inventory. With SILO, you can handle different business operations 
              seamlessly from one unified platform.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
              Learn more about modules
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-border text-center cursor-pointer"
                >
                  <div
                    className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    {platform.icon}
                  </div>
                  <p className="font-medium text-foreground text-sm">{platform.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Connection lines decoration */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 300">
                <path d="M50 50 L200 150 L350 50" stroke="#40E0D0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M50 250 L200 150 L350 250" stroke="#FFD700" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
