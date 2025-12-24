import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Floating geometric shapes with illustrated characters - Zoomsphere style
const FloatingShape = ({ 
  color, 
  shape, 
  size, 
  position, 
  delay = 0,
  character
}: { 
  color: string; 
  shape: 'circle' | 'triangle' | 'semicircle';
  size: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
  character?: 'waving' | 'pointing' | 'sitting' | 'standing';
}) => {
  const shapeStyles: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    ...position,
  };

  // Simple character illustrations
  const renderCharacter = () => {
    return (
      <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 absolute bottom-2 left-1/2 -translate-x-1/2">
        {/* Simple stick figure */}
        <circle cx="50" cy="25" r="12" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
        <line x1="50" y1="37" x2="50" y2="65" stroke="#1a1a1a" strokeWidth="2"/>
        <line x1="50" y1="45" x2="30" y2="55" stroke="#1a1a1a" strokeWidth="2"/>
        <line x1="50" y1="45" x2="70" y2="40" stroke="#1a1a1a" strokeWidth="2"/>
        <line x1="50" y1="65" x2="35" y2="85" stroke="#1a1a1a" strokeWidth="2"/>
        <line x1="50" y1="65" x2="65" y2="85" stroke="#1a1a1a" strokeWidth="2"/>
      </svg>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
      transition={{ 
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
      }}
      style={shapeStyles}
      className="hidden lg:block"
    >
      {shape === 'circle' && (
        <div 
          className="w-full h-full rounded-full overflow-hidden relative"
          style={{ backgroundColor: color }}
        >
          {character && renderCharacter()}
        </div>
      )}
      {shape === 'triangle' && (
        <div className="relative" style={{ width: size, height: size }}>
          <div 
            className="w-0 h-0"
            style={{
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
            }}
          />
          {character && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16">
              {renderCharacter()}
            </div>
          )}
        </div>
      )}
      {shape === 'semicircle' && (
        <div 
          className="w-full overflow-hidden relative"
          style={{ height: size/2 }}
        >
          <div 
            className="w-full rounded-t-full"
            style={{ backgroundColor: color, height: size/2 }}
          />
          {character && renderCharacter()}
        </div>
      )}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Floating decorative shapes with characters */}
      <FloatingShape 
        color="#FF7B6B" 
        shape="circle" 
        size={180} 
        position={{ top: '12%', left: '3%' }} 
        delay={0.2}
        character="waving"
      />
      <FloatingShape 
        color="#40E0D0" 
        shape="triangle" 
        size={140} 
        position={{ top: '15%', right: '5%' }} 
        delay={0.4}
        character="pointing"
      />
      <FloatingShape 
        color="#FFC800" 
        shape="triangle" 
        size={120} 
        position={{ bottom: '30%', left: '5%' }} 
        delay={0.3}
        character="sitting"
      />
      <FloatingShape 
        color="#9B59B6" 
        shape="circle" 
        size={160} 
        position={{ bottom: '20%', right: '3%' }} 
        delay={0.5}
        character="standing"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" style={{marginTop: 'clamp(40px, 8vw, 80px)'}}>
        {/* Main heading with yellow highlight box */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span 
            className="block text-foreground"
            style={{ fontSize: 'clamp(32px, 7vw, 64px)', lineHeight: '1.15' }}
          >
            The All-In-One ERP
          </span>
          <span 
            className="block mt-2"
            style={{ fontSize: 'clamp(32px, 7vw, 64px)', lineHeight: '1.15' }}
          >
            for Effective{" "}
            <span 
              className="inline-block px-5 py-1 rounded-lg bg-primary border-2 border-foreground text-foreground"
              style={{ transform: 'rotate(-1deg)', display: 'inline-block' }}
            >
              #Teamwork
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4"
          style={{ fontWeight: '400' }}
        >
          Easily plan, manage, analyze, and work together – all on one easy-to-use platform designed for small & medium businesses.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="default"
            size="lg"
          >
            Start a free trial
          </Button>
        </motion.div>

        {/* Dashboard preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* AI-Powered badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 right-1/3 z-20 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg"
              style={{ 
                backgroundColor: '#4ADE80',
                color: '#1a1a1a',
                border: '2px solid #1a1a1a',
              }}
            >
              ✨ AI-Powered
            </motion.div>
            
            {/* Main dashboard image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <img 
                src="/Mockup 2 (3).png" 
                alt="SILO Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>

            {/* Floating UI elements around the dashboard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -left-4 top-1/4 bg-card rounded-xl p-3 shadow-lg border border-border hidden xl:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</div>
                <div>
                  <p className="text-xs font-medium text-foreground">Approved</p>
                  <p className="text-xs text-muted-foreground">11:12 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute -right-4 top-1/3 bg-card rounded-xl p-3 shadow-lg border border-border hidden xl:block"
            >
              <div className="text-xs font-medium text-foreground mb-1">Analytics Dashboard</div>
              <div className="flex gap-1">
                <div className="w-8 h-8 rounded bg-cyan-100"></div>
                <div className="w-8 h-8 rounded bg-purple-100"></div>
                <div className="w-8 h-8 rounded bg-yellow-100"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8"
        >
          <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span className="underline">Find out how our management tool works!</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;