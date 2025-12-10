import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const ConsultingSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg"
        >
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Left section - Dark blue with text */}
            <div className="lg:col-span-2 bg-[#252865] p-8 lg:p-12 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Curious about more?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white/90 text-lg mb-8"
              >
                Book a short meeting and see how we can support your culture.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  size="lg" 
                  style={{height: '50px'}}
                  className="bg-gradient-to-r from-[#6366F1] via-[#6366F1] to-[#6366F1] text-white hover:opacity-90 border-0"
                  onClick={() => openCalendly()}
                >
                  Book a Meeting
                </Button>
              </motion.div>
            </div>

            {/* Right section - Image */}
            <div className="lg:col-span-1 relative">
              <img 
                src="/foot.png" 
                alt="Support your culture" 
                className="w-full h-full object-cover"
                style={{minHeight: '300px'}}
              />
              {/* Fade overlay to blend with left section */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, #252865 1%, #252865 2%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingSection;
