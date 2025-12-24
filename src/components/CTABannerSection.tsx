import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const CTABannerSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#1F3C6B" }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full"
        />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/Silo-White-logo.png"
            alt="SILO Logo"
            className="h-12 mx-auto"
          />
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: "#58d4d2", color: "#000" }}
        >
          #AllInOne
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          style={{ fontSize: "clamp(32px, 6vw, 56px)", lineHeight: "1.2" }}
        >
          Enterprise Resource
          <br />
          <span style={{ color: "#58d4d2" }}>Management Made Simple</span>
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            onClick={() => openCalendly()}
            size="lg"
            className="bg-white text-foreground hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium"
          >
            Start a free trial
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABannerSection;
