import { motion } from "framer-motion";

const values = [
  {
    tag: "Simplifies work for HR and leaders",
    title: "User-friendly software that delivers clear insights",
    description: "AI-driven recommendations – saving time and helping HR and leaders act faster and smarter.",
    color: "primary",
  },
  {
    tag: "Make culture insights financially relevant",
    title: "Identify cultural blind spots that impact productivity",
    description: "With data-driven actions, leaders can reduce costly inefficiencies and build a culture that supports long-term business growth.",
    color: "teal",
  },
  {
    tag: "Predict and prevent employee loss",
    title: "AI to spot early signs of disengagement",
    description: "Helping HR and leaders act in time to retain talent and reduce costly turnover.",
    color: "coral",
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
          <span className="text-sm font-medium text-primary mb-4 block">How we create value</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From insight to impact with
            <br />
            measurable returns
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Culturequest consists of a software and consulting services.
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
                    value.color === 'primary' ? 'bg-primary/10 text-primary' :
                    value.color === 'teal' ? 'bg-teal/10 text-teal' :
                    'bg-coral/10 text-coral'
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
                    value.color === 'primary' ? 'from-primary/20 to-primary/5' :
                    value.color === 'teal' ? 'from-teal/20 to-teal/5' :
                    'from-coral/20 to-coral/5'
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
                        <div className={`h-3 rounded-full ${
                          value.color === 'primary' ? 'bg-primary/40' :
                          value.color === 'teal' ? 'bg-teal/40' :
                          'bg-coral/40'
                        } w-full`} />
                        <div className={`h-3 rounded-full ${
                          value.color === 'primary' ? 'bg-primary/30' :
                          value.color === 'teal' ? 'bg-teal/30' :
                          'bg-coral/30'
                        } w-3/4`} />
                        <div className={`h-3 rounded-full ${
                          value.color === 'primary' ? 'bg-primary/20' :
                          value.color === 'teal' ? 'bg-teal/20' :
                          'bg-coral/20'
                        } w-1/2`} />
                        <div className="flex gap-2 pt-2">
                          <div className={`h-8 w-8 rounded-lg ${
                            value.color === 'primary' ? 'bg-primary/20' :
                            value.color === 'teal' ? 'bg-teal/20' :
                            'bg-coral/20'
                          }`} />
                          <div className={`h-8 w-8 rounded-lg ${
                            value.color === 'primary' ? 'bg-primary/30' :
                            value.color === 'teal' ? 'bg-teal/30' :
                            'bg-coral/30'
                          }`} />
                          <div className={`h-8 w-8 rounded-lg ${
                            value.color === 'primary' ? 'bg-primary/40' :
                            value.color === 'teal' ? 'bg-teal/40' :
                            'bg-coral/40'
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
