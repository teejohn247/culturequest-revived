import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FloatingShapes from "./FloatingShapes";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-soft-gradient" />
      
      {/* Floating decorative shapes */}
      <FloatingShapes />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Demo badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8 cursor-pointer hover:shadow-md transition-shadow"
        >
          <span className="text-sm text-muted-foreground">Do you want to get a demo?</span>
          <ArrowRight className="w-4 h-4 text-primary" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-gradient">Culture Is Strategy.</span>
          <br />
          <span className="text-foreground">Treat It Like One.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A data-driven software solution that enables leaders to measure, understand, 
          and optimize company culture. Make teams thrive and companies grow.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="hero" size="xl">
            Book a Meeting
          </Button>
        </motion.div>

        {/* Floating dashboard preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="flex justify-center gap-4 flex-wrap">
            {/* Preview cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-card rounded-2xl shadow-card p-4 max-w-[200px]"
            >
              <div className="text-xs text-muted-foreground mb-2">Summary</div>
              <div className="font-semibold text-sm text-foreground">Good Mental Health</div>
              <p className="text-xs text-muted-foreground mt-1">
                The survey highlights accessible mental health support...
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-card rounded-2xl shadow-card p-4 max-w-[180px]"
            >
              <div className="text-xs text-primary mb-2">Analyze</div>
              <div className="h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
