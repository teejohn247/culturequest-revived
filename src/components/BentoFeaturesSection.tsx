import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, BarChart3, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data in milliseconds with our optimized infrastructure",
    delay: 0,
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly across departments",
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get insights the moment they happen",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption for all your data",
    delay: 0.3,
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Set it and forget it with smart workflows",
    delay: 0.4,
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Machine learning that adapts to your needs",
    delay: 0.5,
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: feature.delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white rounded-2xl p-6 border border-border overflow-hidden cursor-pointer"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Icon with animation */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="relative z-10 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
      >
        <feature.icon className="w-6 h-6 text-primary" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {feature.description}
        </p>
      </div>

      {/* Arrow indicator */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ArrowRight className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Decorative corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
    </motion.div>
  );
};

const BentoFeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-[#EFFEF9] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to
            <br />
            <span className="text-gradient">scale your business</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Built for modern teams who demand speed, security, and seamless integration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors group">
            Explore all features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoFeaturesSection;