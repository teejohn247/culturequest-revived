import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    tag: "Real-time Business Intelligence",
    title: "Transform raw data into actionable insights",
    description: "Get instant access to critical business metrics with predictive analytics and automated reporting.",
    image: "Homepage/Transform.png",
  },
  {
    tag: "Streamline Operations",
    title: "Automated processes that save time and reduce errors",
    description: "AI-driven automation handles data processing, payroll, and reporting – freeing your team to focus on strategic initiatives.",
    image: "Homepage/Automated.png",
  },
  {
    tag: "Unified Platform",
    title: "All-in-one solution for HR, CRM, AI, and Accounting",
    description: "No more juggling multiple systems. SILO integrates everything you need in one platform – from recruitment to financial reporting, all seamlessly connected.",
    image: "Homepage/All-in-one.png",
  },
];

const ValueCard = ({ value, index }: { value: typeof values[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Each card slides up from below and covers the previous one
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [300, 100, 0, 0, -100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="sticky top-32"
    >
      <div 
        className={`relative bg-card rounded-3xl p-8 md:p-12 overflow-hidden shadow-lg border border-border
          ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
          flex flex-col md:flex-row items-center gap-8`}
      >
        {/* Content */}
        <div className="flex-1 space-y-4">
          <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary">
            #{value.tag}
          </span>
          <h3 
            className="text-2xl md:text-4xl font-bold text-foreground"
            style={{ lineHeight: '1.2' }}
          >
            {value.title}
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md">
            {value.description}
          </p>
          <button className="mt-4 px-6 py-3 border border-foreground rounded-full text-foreground font-medium hover:bg-foreground hover:text-background transition-colors">
            Try it now
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-lg relative"
          >
            {/* Colored background behind image */}
            <div 
              className={`absolute -inset-4 rounded-3xl ${
                index === 0 ? 'bg-[#E9D5FF]' : 
                index === 1 ? 'bg-[#BFDBFE]' : 
                'bg-[#D1FAE5]'
              }`}
            />
            <img 
              src={value.image} 
              alt={value.title}
              className="w-full h-auto object-contain relative z-10 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ValueSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-md font-medium text-primary mb-4 block">How SILO creates value</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" style={{fontSize:'clamp(32px, 8vw, 78px)', lineHeight:'clamp(36px, 8vw, 73px)', fontWeight:'600'}}>
            From setup to<br /> success with
            <br />
            <span className="text-gradient">Streamlined returns.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            SILO combines powerful software with expert consulting to help SMEs transform their operations.
          </p>
        </motion.div>

        {/* Stacking value cards */}
        <div className="space-y-8 pb-[50vh]">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
