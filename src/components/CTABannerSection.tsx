import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTABannerSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-foreground">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-20 h-20 border-2 border-background/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-32 h-32 border-2 border-background/10 rounded-full"
        />
        
        {/* Decorative curves */}
        <svg className="absolute bottom-0 left-0 w-1/3 h-auto opacity-10" viewBox="0 0 200 200" fill="none">
          <path d="M0 200 Q100 100 200 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-background"/>
        </svg>
        <svg className="absolute top-0 right-0 w-1/3 h-auto opacity-10" viewBox="0 0 200 200" fill="none">
          <path d="M0 0 Q100 100 200 0" stroke="currentColor" strokeWidth="2" fill="none" className="text-background"/>
        </svg>
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
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M15 15L30 30L15 45" stroke="#FFC800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30 15L45 30L30 45" stroke="#40E0D0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-primary text-foreground"
        >
          #Collaborative
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-8"
        >
          Social Media Management
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Start a free trial
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABannerSection;