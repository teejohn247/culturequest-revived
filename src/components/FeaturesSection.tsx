import { motion } from "framer-motion";
import { Users, Briefcase, Brain, BarChart3, Zap, Shield, Database, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Human Resources Management",
    description: "Automated Recruitment, Leave Management, Data Processing and Payroll, etc. Streamline your HR operations with intelligent automation.",
    color: "purple",
  },
  {
    icon: Briefcase,
    title: "Customer Relationship Management",
    description: "Sales & Marketing Platform, Call-logging, Contact Management, Lead Generation, etc. Build stronger customer relationships.",
    color: "pink",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "AI-powered predictive and suggestive analytics, Automated Reporting, Dashboard with Metrics, etc. Get intelligent insights.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Accounting and Finance",
    description: "Real-time Financial Reporting, Payroll, Financial Statement, Expense Management, etc. Complete financial control.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Instant Data Processing",
    description: "90% increase in productivity and efficiency. Automated data management & standardization for faster operations.",
    color: "pink",
  },
  {
    icon: Sparkles,
    title: "Natural Language Interface",
    description: "Zero learning curve, accessible to all skill levels. Interact with your data using simple, natural language commands.",
    color: "blue",
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
          <span className="text-sm font-medium text-primary mb-4 block">Features & Benefits</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            All-In-One ERP Platform
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Discover how SILO transforms raw data into valuable insights for your business.
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
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${
                  feature.color === 'purple' ? 'from-[#001305]/20 to-[#001305]/5' :
                  feature.color === 'pink' ? 'from-[#007C21]/20 to-[#007C21]/5' :
                  'from-[#89F335]/20 to-[#89F335]/5'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'purple' ? 'text-[#001305]' :
                    feature.color === 'pink' ? 'text-[#007C21]' :
                    'text-[#89F335]'
                  }`} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:bg-gradient-to-r group-hover:from-[#001305] group-hover:via-[#007C21] group-hover:to-[#89F335] group-hover:bg-clip-text group-hover:text-transparent transition-all">
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
