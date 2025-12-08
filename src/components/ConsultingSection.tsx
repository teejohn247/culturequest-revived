import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const ConsultingSection = () => {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Implementation Services & Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From system integration to team training, our expert consultants help you get maximum value 
            from SILO. Custom configuration, data migration, and ongoing support—all tailored to your needs.
          </p>
        </motion.div>

        {/* Consultant cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:shadow-card transition-all duration-300"
          >
            <span className="text-xs font-medium text-primary mb-2 block">SILO Implementation Services</span>
            <h3 className="text-xl font-bold text-foreground mb-4">System Integration & Setup</h3>
            
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#001305]/20 to-[#001305]/5 flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-card shadow-sm flex items-center justify-center">
                  <span className="text-lg font-semibold bg-gradient-to-r from-[#001305] to-[#007C21] bg-clip-text text-transparent">SI</span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007C21]/20 to-[#007C21]/5 flex items-center justify-center -ml-4"
              >
                <div className="w-12 h-12 rounded-full bg-card shadow-sm flex items-center justify-center">
                  <span className="text-lg font-semibold bg-gradient-to-r from-[#007C21] to-[#89F335] bg-clip-text text-transparent">DM</span>
                </div>
              </motion.div>
            </div>
            
            <p className="text-muted-foreground">
              System Integration, Data Migration, Custom Configuration, and Training services to get you started.
            </p>

            {/* Decorative element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:shadow-card transition-all duration-300"
          >
            <span className="text-xs font-medium bg-gradient-to-r from-[#007C21] to-[#89F335] bg-clip-text text-transparent mb-2 block">Custom Solutions</span>
            <h3 className="text-xl font-bold text-foreground mb-4">Tailored to Your Business</h3>
            
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#89F335]/20 to-[#89F335]/5 flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-card shadow-sm flex items-center justify-center">
                  <span className="text-lg font-semibold bg-gradient-to-r from-[#89F335] to-[#001305] bg-clip-text text-transparent">AI</span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#001305]/20 to-[#001305]/5 flex items-center justify-center -ml-4"
              >
                <div className="w-12 h-12 rounded-full bg-card shadow-sm flex items-center justify-center">
                  <span className="text-lg font-semibold bg-gradient-to-r from-[#001305] via-[#007C21] to-[#89F335] bg-clip-text text-transparent">CC</span>
                </div>
              </motion.div>
            </div>
            
            <p className="text-muted-foreground">
              Custom dashboards, analytics specific to your needs, and AI-powered insights tailored to your industry.
            </p>

            {/* Decorative element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-teal/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="inline-block relative">
            {/* Decorative shapes */}
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-primary/20 rounded-lg"
            />
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-teal/20 rounded-lg"
            />
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-2">Ready to Transform Your Operations?</h3>
              <p className="text-muted-foreground mb-6">
                Book a consultation and discover how SILO can streamline your business processes.
              </p>
              <Button variant="default" size="lg" onClick={() => openCalendly()}>
                Book a Meeting
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingSection;
