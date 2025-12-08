import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import { openCalendly } from "@/lib/calendly";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-soft-gradient" />
      
      {/* Floating decorative shapes */}
      <FloatingShapes />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" style={{marginTop: '100px'}}>
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
          <span className="text-gradient">SILO</span>
          <br />
          <span className="text-foreground">The Future of Data</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
           The All-In-One ERP platform that transforms 
          raw data into valuable insights for small & medium businesses. Designed to streamline your 
          internal processes and build improved operational capacity.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="hero" size="xl" onClick={() => openCalendly()}>
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
              className="bg-card rounded-2xl shadow-card p-4 max-w-[200px] border border-[#89F335]/30 dark:border-[#89F335]/50"
            >
              <div className="text-xs text-muted-foreground mb-2">Platform Performance</div>
              <div className="font-semibold text-sm bg-gradient-to-r from-[#001305] via-[#007C21] to-[#89F335] bg-clip-text text-transparent">77% Efficiency</div>
              <p className="text-xs text-muted-foreground mt-1">
                AI-powered analytics enabling 90% productivity increase...
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-card rounded-2xl shadow-card p-4 max-w-[180px] border border-[#007C21]/30 dark:border-[#007C21]/50"
            >
              <div className="text-xs bg-gradient-to-r from-[#001305] via-[#007C21] to-[#89F335] bg-clip-text text-transparent mb-2">AI Analytics</div>
              <div className="h-16 bg-gradient-to-br from-[#001305]/10 via-[#007C21]/10 to-[#89F335]/10 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 bg-gradient-to-r from-[#001305] via-[#007C21] to-[#89F335] bg-clip-text text-transparent" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#001305" />
                      <stop offset="50%" stopColor="#007C21" />
                      <stop offset="100%" stopColor="#89F335" />
                    </linearGradient>
                  </defs>
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
