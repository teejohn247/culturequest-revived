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
    <section className="relative py-24 overflow-hidden" style={{backgroundColor: '#252865'}}>
      {/* Decorative arc in top right corner */}
      <div className="absolute top-0 right-0" style={{width: '500px', height: '200px', zIndex: 1}}>
        <img src="/arc.png" alt="" className="w-full h-full" style={{objectFit: 'contain', objectPosition: 'top right', opacity: 1}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white/80 mb-4 block" style={{fontSize:'16px'}}>Our solution</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{fontSize:'clamp(32px, 8vw, 68px)', lineHeight:'clamp(36px, 8vw, 58px)', fontWeight:'600'}}>
            Measure what matters.<br />Act where it counts.
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto text-base sm:text-lg" style={{lineHeight:'28px'}}>
            Our platform helps you understand your people through surveys, personality insights, and data-driven tools—so you can build a healthier culture, one decision at a time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Step tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 min-h-[400px] flex flex-col justify-center"
          >
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full  text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white border-white/30 shadow-lg'
                    : 'bg-white/10 border-white/20 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-4 ">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    activeStep === index
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'bg-white/20 text-white'
                  }`}>
                    {step.step}
                  </span>
                  <div>
                    <h3 className={`font-semibold text-lg mb-2 ${
                      activeStep === index ? 'text-black' : 'text-white/80'
                    }`}>
                      {step.title}
                    </h3>
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          // className="text-white/70"
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
            <div className="relative bg-white rounded-3xl p-8 min-h-[300px] flex items-center justify-center overflow-hidden shadow-lg">
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
                        <div className="w-4 h-4 rounded border-2 border-[#6366F1]" />
                        <span className="text-sm text-muted-foreground">HR Management System</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-[#383DA0] bg-[#383DA0]" />
                        <span className="text-sm text-muted-foreground">CRM Integration</span>
                      </div>
                      <div className="h-10 bg-secondary rounded-lg flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded border-2 border-[#AB4FCB] bg-[#AB4FCB]" />
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
                          className="w-8 bg-gradient-to-t from-[#6366F1]/30 to-[#6366F1]/10 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "80%" }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-8 bg-gradient-to-t from-[#383DA0]/50 to-[#383DA0]/20 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "45%" }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="w-8 bg-gradient-to-t from-[#AB4FCB]/40 to-[#AB4FCB]/15 rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "90%" }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="w-8 bg-gradient-to-t from-[#6366F1] via-[#383DA0] to-[#AB4FCB] rounded-t"
                        />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "70%" }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="w-8 bg-gradient-to-t from-[#383DA0]/60 to-[#383DA0]/30 rounded-t"
                        />
                         <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "70%" }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="w-8 bg-gradient-to-t from-[#383DA0]/60 to-[#383DA0]/30 rounded-t"
                        />
                         <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "60%" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="w-8 bg-gradient-to-t from-[#6366F1]/30 to-[#6366F1]/10 rounded-t"
                        />
                        {/* <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "45%" }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="w-8 bg-gradient-to-t from-[#AB4FCB]/40 to-[#AB4FCB]/15 rounded-t"
                        /> */}
                         {/* <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "90%" }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="w-8 bg-gradient-to-t from-[#6366F1] via-[#383DA0] to-[#AB4FCB] rounded-t"
                        /> */}
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
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#6366F1]/10 to-[#383DA0]/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#383DA0]" />
                        <span className="text-sm text-foreground">Automated Payroll Processing</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#383DA0]/10 to-[#AB4FCB]/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#383DA0] to-[#AB4FCB]" />
                        <span className="text-sm text-foreground">Predictive Analytics Dashboard</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#AB4FCB]/10 to-[#6366F1]/10 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#AB4FCB] to-[#6366F1]" />
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
