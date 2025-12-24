import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Video, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const featureLinks = [
  {
    icon: Sparkles,
    title: "Our Top 10 Features",
    color: "#FFD700",
    link: "/features",
  },
  {
    icon: Video,
    title: "Best for AI Analytics",
    color: "#40E0D0",
    link: "/features",
  },
  {
    icon: Users,
    title: "Best for Growing Teams",
    color: "#9B59B6",
    link: "/features",
  },
  {
    icon: Workflow,
    title: "Team Collaboration",
    color: "#FF7B6B",
    link: "/features",
  },
];

const FeatureLinksSection = () => {
  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#58d4d2", color: "#000" }}
          >
            #Features
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            style={{ fontSize: "clamp(32px, 6vw, 48px)" }}
          >
            Our features
          </h2>
        </motion.div>

        {/* Feature Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureLinks.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={feature.link}
                className="group block bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureLinksSection;
