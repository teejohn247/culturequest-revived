import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Create survey & collect data",
    description: "Choose from 10 different categories tailored to your workplace. Engage employees and collect honest feedback.",
  },
  {
    step: 2,
    title: "Get insights about the culture",
    description: "Our system processes the data to uncover key patterns. Gather comprehensive insights into organizational culture.",
  },
  {
    step: 3,
    title: "Take action and improve",
    description: "With Culturequest, companies don't just measure culture—they create meaningful change.",
  },
];

const SolutionSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Our solution</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Measure what matters.
            <br />
            Act where it counts.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our platform helps you understand your people through surveys, personality insights, 
            and data-driven tools—so you can build a healthier culture, one decision at a time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Step tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-card border-primary/30 shadow-card'
                    : 'bg-background/50 border-border hover:bg-card'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    activeStep === index
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {step.step}
                  </span>
                  <div>
                    <h3 className={`font-semibold text-lg mb-2 ${
                      activeStep === index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-muted-foreground"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 min-h-[400px] flex items-center justify-center overflow-hidden">
              {/* Decorative shapes */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
              >
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <rect x="50" y="50" width="100" height="100" rx="20" stroke="hsl(var(--primary))" strokeWidth="1" />
                  <rect x="120" y="120" width="100" height="100" rx="20" stroke="hsl(var(--primary))" strokeWidth="1" />
                  <rect x="200" y="200" width="100" height="100" rx="20" stroke="hsl(var(--primary))" strokeWidth="1" />
                </svg>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card rounded-2xl shadow-card p-6 w-full max-w-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{activeStep + 1}</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{steps[activeStep].title}</h4>
                  </div>
                  
                  {/* Mock UI based on step */}
                  {activeStep === 0 && (
                    <div className="space-y-3">
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-primary" />
                        <span className="text-sm text-muted-foreground">Employee satisfaction</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-primary bg-primary" />
                        <span className="text-sm text-muted-foreground">Team collaboration</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-border" />
                        <span className="text-sm text-muted-foreground">Leadership feedback</span>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-end gap-2 h-24">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "60%" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="w-8 bg-primary/30 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "80%" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-8 bg-primary/50 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "45%" }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="w-8 bg-primary/40 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "90%" }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="w-8 bg-gradient-primary rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "70%" }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="w-8 bg-primary/60 rounded-t"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Culture score trend</p>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 p-3 bg-teal/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-teal" />
                        <span className="text-sm text-foreground">Improve team meetings</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">Launch recognition program</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 p-3 bg-coral/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-coral" />
                        <span className="text-sm text-foreground">Schedule 1-on-1 reviews</span>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
