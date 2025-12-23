import { motion } from "framer-motion";
import { Brain, LayoutDashboard, Workflow, Plug, Shield, Headphones } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: "Data-Driven Insights",
    description: "Get actionable intelligence from your HR and CRM data. Make informed decisions with real-time analytics that reveal what matters most",
  },
  {
    icon: LayoutDashboard,
    title: "All-in-One Dashboard",
    description: "Access everything you need in one unified interface. No more switching between apps - your entire business ecosystem at your fingertips.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Save time on repetitive tasks with smart automation. From leave approvals to sales follow-ups, let SILO handle the routine while you focus on growth.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    description: "Connect SILO with your existing tools and services. Works perfectly with the apps you already use and love.",
  },
  {
    icon: Shield,
    title: "Top Notch Security",
    description: "Your data is protected with bank-level encryption and compliance with international security standards.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Never work alone. Our dedicated support team is available around the clock to help you succeed.",
  },
];

const IntelligentFeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#fff'}}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #57D6D3 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Tag/Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-white text-xs font-semibold uppercase tracking-wider mb-6"
          style={{backgroundColor: '#58d4d2', color: '#000000', padding: '10px 20px'}}>
            Best SaaS Features
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Intelligent Features. Real Results.
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Smart tools that automate tasks, reveal insights, and boost business outcomes — effortlessly and efficiently.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border-2 border-[#58d4d2] group-hover:bg-gradient-to-br group-hover:from-[#58d4d2] group-hover:via-[#58d4d2] group-hover:to-[#58d4d2] group-hover:border-transparent transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-[#58d4d2] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:bg-gradient-to-r group-hover:from-[#58d4d2] group-hover:via-[#58d4d2] group-hover:to-[#58d4d2] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-md leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentFeaturesSection;

