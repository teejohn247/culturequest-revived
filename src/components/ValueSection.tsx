import { motion } from "framer-motion";

const values = [
  {
    tag: "Streamline Operations",
    title: "Automated processes that save time and reduce errors",
    description: "AI-driven automation handles data processing, payroll, and reporting – freeing your team to focus on strategic initiatives. 90% increase in productivity and efficiency.",
    color: "purple",
  },
  {
    tag: "Real-time Business Intelligence",
    title: "Transform raw data into actionable insights",
    description: "Get instant access to critical business metrics with predictive analytics and automated reporting. Make data-driven decisions that drive growth.",
    color: "pink",
  },
  {
    tag: "Unified Platform",
    title: "All-in-one solution for HR, CRM, AI, and Accounting",
    description: "No more juggling multiple systems. SILO integrates everything you need in one platform – from recruitment to financial reporting, all seamlessly connected.",
    color: "blue",
  },
];

const ValueSection = () => {
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
          <span className="text-sm font-medium text-primary mb-4 block">How SILO creates value</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From data to decisions with
            <br />
            measurable business impact
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            SILO combines powerful software with expert consulting to help SMEs transform their operations.
          </p>
        </motion.div>

        {/* Value cards */}
        <div className="space-y-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative bg-card rounded-3xl p-8 md:p-12 border border-border overflow-hidden hover:shadow-card transition-all duration-500 ${
                index === 0 ? 'md:flex-row' : index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex flex-col md:flex-row items-center gap-8`}>
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <span className={`inline-block text-sm font-medium px-4 py-1.5 rounded-full ${
                    value.color === 'purple' ? 'bg-purple-500/10 text-purple-500' :
                    value.color === 'pink' ? 'bg-pink-500/10 text-pink-500' :
                    'bg-blue-500/10 text-blue-500'
                  }`}>
                    {value.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {value.description}
                  </p>
                </div>

                {/* Decorative illustration */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${
                    value.color === 'purple' ? 'from-purple-500/20 via-pink-500/10 to-blue-500/5' :
                    value.color === 'pink' ? 'from-pink-500/20 via-purple-500/10 to-blue-500/5' :
                    'from-blue-500/20 via-purple-500/10 to-pink-500/5'
                  } flex items-center justify-center`}>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-48 h-48 rounded-xl bg-card shadow-lg flex items-center justify-center"
                    >
                      <div className="space-y-3 w-36">
                        <div className={`h-3 rounded-full bg-gradient-to-r ${
                          value.color === 'purple' ? 'from-purple-500/40 to-pink-500/40' :
                          value.color === 'pink' ? 'from-pink-500/40 to-blue-500/40' :
                          'from-blue-500/40 to-purple-500/40'
                        } w-full`} />
                        <div className={`h-3 rounded-full bg-gradient-to-r ${
                          value.color === 'purple' ? 'from-purple-500/30 to-pink-500/30' :
                          value.color === 'pink' ? 'from-pink-500/30 to-blue-500/30' :
                          'from-blue-500/30 to-purple-500/30'
                        } w-3/4`} />
                        <div className={`h-3 rounded-full bg-gradient-to-r ${
                          value.color === 'purple' ? 'from-purple-500/20 to-pink-500/20' :
                          value.color === 'pink' ? 'from-pink-500/20 to-blue-500/20' :
                          'from-blue-500/20 to-purple-500/20'
                        } w-1/2`} />
                        <div className="flex gap-2 pt-2">
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${
                            value.color === 'purple' ? 'from-purple-500/20 to-pink-500/20' :
                            value.color === 'pink' ? 'from-pink-500/20 to-blue-500/20' :
                            'from-blue-500/20 to-purple-500/20'
                          }`} />
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${
                            value.color === 'purple' ? 'from-purple-500/30 to-pink-500/30' :
                            value.color === 'pink' ? 'from-pink-500/30 to-blue-500/30' :
                            'from-blue-500/30 to-purple-500/30'
                          }`} />
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${
                            value.color === 'purple' ? 'from-purple-500/40 to-pink-500/40' :
                            value.color === 'pink' ? 'from-pink-500/40 to-blue-500/40' :
                            'from-blue-500/40 to-purple-500/40'
                          }`} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
