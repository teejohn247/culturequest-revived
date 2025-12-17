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
    <section className="relative py-24 overflow-hidden bg-[#EFFEF9]">
      {/* Subtle mint gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(111, 244, 200, 0.1) 0%, rgba(239, 254, 249, 0.5) 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block" style={{fontSize:'16px'}}>Our solution</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" style={{fontSize:'clamp(32px, 8vw, 68px)', lineHeight:'clamp(36px, 8vw, 58px)', fontWeight:'600'}}>
            Measure what matters.<br />Act where it counts.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg" style={{lineHeight:'28px'}}>
            Our platform helps you understand your people through surveys, personality insights, and data-driven tools—so you can build a healthier culture, one decision at a time.
          </p>
        </motion.div>

        {/* Steps - Equal height grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Step tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 flex flex-col justify-center"
          >
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white border-primary/30 shadow-lg'
                    : 'bg-white/50 border-border hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    activeStep === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
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

          {/* Visual - matching height */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex items-stretch"
          >
            <div className="relative bg-white rounded-3xl p-8 flex-1 flex items-center justify-center overflow-hidden border border-border">
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
                  className="bg-card rounded-2xl shadow-sm border border-border p-6 w-full max-w-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{activeStep + 1}</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{steps[activeStep].title}</h4>
                  </div>
                  
                  {/* Mock UI based on step */}
                  {activeStep === 0 && (
                    <div className="space-y-3">
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-primary" />
                        <span className="text-sm text-muted-foreground">HR Management System</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-primary bg-primary" />
                        <span className="text-sm text-muted-foreground">CRM Integration</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-accent bg-accent" />
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
                          className="w-8 bg-gradient-to-t from-primary/30 to-primary/10 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "80%" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-8 bg-gradient-to-t from-primary/50 to-primary/20 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "45%" }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="w-8 bg-gradient-to-t from-accent/40 to-accent/15 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "90%" }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="w-8 bg-gradient-to-t from-primary via-accent to-primary/50 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "70%" }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="w-8 bg-gradient-to-t from-primary/60 to-primary/30 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "70%" }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="w-8 bg-gradient-to-t from-primary/60 to-primary/30 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "60%" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="w-8 bg-gradient-to-t from-primary/30 to-primary/10 rounded-t"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground" style={{textAlign: 'center'}}>Data processing efficiency</p>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                        <span className="text-sm text-foreground">Automated Payroll Processing</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" />
                        <span className="text-sm text-foreground">Predictive Analytics Dashboard</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
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