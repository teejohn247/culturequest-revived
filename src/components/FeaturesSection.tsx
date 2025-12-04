import { motion } from "framer-motion";
import { MessageSquare, Users, BarChart3, Layers, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Qualitative insights",
    description: "Understand the \"why\" behind the numbers with anonymous comments and free-text feedback.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Manager access",
    description: "Give leaders direct access to relevant data for their own teams—secure and easy to use.",
    color: "teal",
  },
  {
    icon: BarChart3,
    title: "Unlimited surveys",
    description: "Run as many surveys as you need, whenever you need them—no limits.",
    color: "coral",
  },
  {
    icon: Layers,
    title: "Segment teams",
    description: "Filter data by team, location, or department to spot patterns and tailor your actions.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description: "Bank-level security with GDPR compliance and data encryption at rest and in transit.",
    color: "teal",
  },
  {
    icon: Zap,
    title: "AI-powered insights",
    description: "Get intelligent recommendations and predictions based on your culture data.",
    color: "coral",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Elevate Your Company Culture
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore some of the features in Culturequest.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'primary' ? 'bg-primary/10' :
                  feature.color === 'teal' ? 'bg-teal/10' :
                  'bg-coral/10'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'primary' ? 'text-primary' :
                    feature.color === 'teal' ? 'text-teal' :
                    'text-coral'
                  }`} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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

export default FeaturesSection;
