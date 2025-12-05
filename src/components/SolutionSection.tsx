import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "System Integration & Setup",
    description: "Connect AI-driven solutions with existing company databases and tools. Our team handles seamless integration and custom configuration.",
  },
  {
    step: 2,
    title: "Data Migration & Processing",
    description: "Move your data to the platform with automated processing. Get instant access to critical business metrics and insights.",
  },
  {
    step: 3,
    title: "AI Analytics & Optimization",
    description: "Leverage predictive analytics and automated reporting. Transform raw data into actionable insights that drive business growth.",
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
          <span className="text-sm font-medium text-primary mb-4 block">How it works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From setup to success.
            <br />
            Streamlined implementation.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            SILO's implementation services help businesses connect AI-driven solutions, migrate data, 
            configure dashboards, and train teams—so you get maximum value from day one.
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
                        <div className="w-4 h-4 rounded border-2 border-purple-500" />
                        <span className="text-sm text-muted-foreground">HR Management System</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-pink-500 bg-pink-500" />
                        <span className="text-sm text-muted-foreground">CRM Integration</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-blue-500 bg-blue-500" />
                        <span className="text-sm text-muted-foreground">AI Analytics Setup</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-border" />
                        <span className="text-sm text-muted-foreground">Accounting Module</span>
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
                          className="w-8 bg-gradient-to-t from-purple-500/30 to-purple-500/10 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "80%" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-8 bg-gradient-to-t from-pink-500/50 to-pink-500/20 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "45%" }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="w-8 bg-gradient-to-t from-blue-500/40 to-blue-500/15 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "90%" }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="w-8 bg-gradient-to-t from-purple-500 via-pink-500 to-blue-500 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "70%" }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="w-8 bg-gradient-to-t from-pink-500/60 to-pink-500/30 rounded-t"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Data processing efficiency</p>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                        <span className="text-sm text-foreground">Automated Payroll Processing</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500" />
                        <span className="text-sm text-foreground">Predictive Analytics Dashboard</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span className="text-sm text-foreground">Real-time Financial Reports</span>
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
