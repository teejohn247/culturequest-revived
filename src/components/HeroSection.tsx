import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import { openCalendly } from "@/lib/calendly";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, #E0FFF4 0%, #FFFFFF 100%)'}} />
      
      {/* Floating decorative shapes */}
      <FloatingShapes />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" style={{marginTop: 'clamp(40px, 10vw, 100px)'}}>
        {/* Demo badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8 cursor-pointer transition-shadow relative"
          style={{
            boxShadow: `
              0 0 10px rgba(99, 102, 241, 0.3),
              0 0 10px rgb(249, 198, 199, 0.3),
              -10px -10px 30px rgb(249, 198, 199, 0.25),
              10px 10px 30px rgb(249, 198, 199, 0.25),
              0 0 60px rgb(249, 198, 199, 0.15)
            `
          }}
        >
          <span className="text-sm text-muted-foreground">Do you want to get a demo?</span>
          <ArrowRight className="w-4 h-4 text-[#057C78]" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl" style={{fontSize: 'clamp(32px, 8vw, 88px)', lineHeight: 'clamp(36px, 8vw, 88px)', fontWeight: '600', background: 'linear-gradient(135deg, #57D6D3, #7CF5CD)', backgroundClip: 'text', color: 'transparent'}}>One Platform</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl" style={{fontSize: 'clamp(32px, 8vw, 78px)', lineHeight: 'clamp(36px, 8vw, 88px)', fontWeight: '600', color: '#1f3c6b'}}>Limitless Possibilities.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4" style={{fontWeight: '500', color: '#4B5563'}}
        >
           The All-In-One ERP platform that transforms 
          raw data into valuable insights for small & medium businesses.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="hero"
            style={{
              padding: ' 25px',
              background: "linear-gradient(135deg, #57D6D3, #7CF5CD)",
              color: "#03312F",
              boxShadow: "0 12px 30px rgba(87, 214, 211, 0.35)",
            }}
            onClick={() => openCalendly()}
          >
            Book a Demo
          </Button>
        </motion.div>

        {/* Floating dashboard preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="flex justify-center gap-4 flex-wrap" >
            {/* Preview cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-card rounded-2xl shadow-card p-4 max-w-[200px] border border-[#57D6D3]/40 dark:border-[#57D6D3]/60"
              style={{borderRadius: '.5rem'}}
            >
              <div className="text-xs text-muted-foreground mb-2">Platform Performance</div>
              <div className="font-semibold text-sm bg-gradient-to-r from-[#57D6D3] via-[#7CF5CD] to-[#E0FFF7] bg-clip-text text-transparent">
                77% Efficiency
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                AI-powered analytics enabling 90% productivity increase...
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-card rounded-2xl shadow-card p-4 max-w-[180px] border border-[#57D6D3]/40 dark:border-[#57D6D3]/60"
              style={{borderRadius: '.5rem'}}
            >
              <div className="text-xs bg-gradient-to-r from-[#57D6D3] via-[#7CF5CD] to-[#E0FFF7] bg-clip-text text-transparent mb-2">
                AI Analytics
              </div>
              <div className="h-16 bg-gradient-to-br from-[#57D6D3]/10 via-[#7CF5CD]/10 to-[#E0FFF7]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 bg-gradient-to-r from-[#57D6D3] via-[#7CF5CD] to-[#E0FFF7] bg-clip-text text-transparent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#hero-analytics-gradient)"
                  strokeWidth="2"
                >
                  <defs>
                    <linearGradient id="hero-analytics-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#57D6D3" />
                      <stop offset="50%" stopColor="#7CF5CD" />
                      <stop offset="100%" stopColor="#E0FFF7" />
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
