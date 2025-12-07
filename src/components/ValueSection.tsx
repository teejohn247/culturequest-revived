import { motion } from "framer-motion";

const values = [

  {
    tag: "Real-time Business Intelligence",
    title: "Transform raw data into actionable insights",
    description: "Get instant access to critical business metrics with predictive analytics and automated reporting. Make data-driven decisions that drive growth.",
    color: "pink",
    image: "/mockup4.png",
  },
  {
    tag: "Streamline Operations",
    title: "Automated processes that save time and reduce errors",
    description: "AI-driven automation handles data processing, payroll, and reporting – freeing your team to focus on strategic initiatives. 90% increase in productivity and efficiency.",
    color: "purple",
    image: "/Mockup 1.png",
  },
  {
    tag: "Unified Platform",
    title: "All-in-one solution for HR, CRM, AI, and Accounting",
    description: "No more juggling multiple systems. SILO integrates everything you need in one platform – from recruitment to financial reporting, all seamlessly connected.",
    color: "blue",
    image: "/mockup 3.png",
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

                {/* Mockup Image */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-lg"
                  >
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-auto rounded-2xl object-contain"
                    />
                  </motion.div>
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
