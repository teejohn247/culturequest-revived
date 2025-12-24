import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

// Floating geometric shapes inspired by Zoomsphere
const FloatingShape = ({ 
  color, 
  shape, 
  size, 
  position, 
  delay = 0 
}: { 
  color: string; 
  shape: 'circle' | 'triangle' | 'semicircle';
  size: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
}) => {
  const shapeStyles: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    ...position,
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
      className="hidden md:block"
    >
      {shape === 'circle' && (
        <div 
          className="w-full h-full rounded-full overflow-hidden"
          style={{ backgroundColor: color }}
        >
          {/* Simple illustration placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-white/30 rounded-full" />
          </div>
        </div>
      )}
      {shape === 'triangle' && (
        <div 
          className="w-0 h-0"
          style={{
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${size}px solid ${color}`,
          }}
        />
      )}
      {shape === 'semicircle' && (
        <div 
          className="w-full overflow-hidden"
          style={{ height: size/2 }}
        >
          <div 
            className="w-full rounded-t-full"
            style={{ backgroundColor: color, height: size/2 }}
          />
        </div>
      )}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Floating decorative shapes - Zoomsphere style */}
      <FloatingShape 
        color="#FF7B6B" 
        shape="circle" 
        size={180} 
        position={{ top: '15%', left: '5%' }} 
        delay={0.2}
      />
      <FloatingShape 
        color="#40E0D0" 
        shape="triangle" 
        size={120} 
        position={{ top: '20%', right: '8%' }} 
        delay={0.4}
      />
      <FloatingShape 
        color="#FFD700" 
        shape="triangle" 
        size={100} 
        position={{ bottom: '35%', left: '8%' }} 
        delay={0.3}
      />
      <FloatingShape 
        color="#9B59B6" 
        shape="circle" 
        size={160} 
        position={{ bottom: '25%', right: '5%' }} 
        delay={0.5}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" style={{marginTop: 'clamp(40px, 10vw, 100px)'}}>
        {/* Main heading with yellow highlight box like Zoomsphere */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span 
            className="block text-foreground"
            style={{ fontSize: 'clamp(32px, 8vw, 72px)', lineHeight: '1.1' }}
          >
            The All-In-One ERP
          </span>
          <span 
            className="block mt-2"
            style={{ fontSize: 'clamp(32px, 8vw, 72px)', lineHeight: '1.1' }}
          >
            for Effective{" "}
            <span 
              className="inline-block px-4 py-1 rounded-lg bg-primary border-2 border-foreground text-foreground"
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
            onClick={() => openCalendly()}
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
          <div className="relative mx-auto max-w-4xl">
            {/* AI-Powered badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 right-1/4 z-20 bg-green text-foreground px-4 py-2 rounded-full text-sm font-semibold border-2 border-foreground shadow-md"
              style={{ transform: 'rotate(5deg)' }}
            >
              ✨ AI-Powered
            </motion.div>
            
            {/* Main dashboard image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-foreground/10">
              <img 
                src="/Mockup 2 (3).png" 
                alt="SILO Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;