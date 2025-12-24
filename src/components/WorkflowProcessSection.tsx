import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const statuses = [
  { label: "Idea", color: "#FEF3C7", textColor: "#92400E" },
  { label: "In Progress", color: "#DBEAFE", textColor: "#1E40AF" },
  { label: "To Approve", color: "#FCE7F3", textColor: "#9D174D" },
  { label: "Approved", color: "#D1FAE5", textColor: "#065F46" },
  { label: "Published", color: "#E0E7FF", textColor: "#3730A3" },
];

const WorkflowProcessSection = () => {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#FBF8F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Status badges floating */}
            <div className="relative h-[400px]">
              {statuses.map((status, index) => (
                <motion.div
                  key={status.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  animate={{ y: [0, -10, 0] }}
                  style={{
                    position: "absolute",
                    top: `${20 + index * 15}%`,
                    left: `${10 + (index % 3) * 25}%`,
                    backgroundColor: status.color,
                    color: status.textColor,
                  }}
                  className="px-4 py-2 rounded-full font-medium text-sm shadow-lg"
                >
                  {status.label}
                </motion.div>
              ))}

              {/* Connecting line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <motion.path
                  d="M50 50 C100 100, 150 150, 200 200 S300 300, 350 350"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#9B59B6", color: "#FFF" }}
            >
              #Process
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(32px, 6vw, 48px)" }}
            >
              Smooth Workflow
            </h2>
            <p className="text-muted-foreground text-lg">
              Start your task with an idea, polish it up, and execute it directly from the 
              dashboard. Use different statuses to track progress and keep everyone 
              aligned throughout the process!
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
              Dive into Workflows
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcessSection;
