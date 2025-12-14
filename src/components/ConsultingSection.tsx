import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const ConsultingSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg"
          style={{minHeight: '350px'}}
        >
          <div className="grid lg:grid-cols-2 gap-0 lg:h-[350px]">
            {/* Left section - Dark blue with text (2/3 width) */}
            <div className="lg:col-span-1 bg-[#252865] p-8 lg:p-12 flex flex-col justify-center
            min-h-[350px] lg:h-full" style={{textAlign: 'left'}}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Curious about more?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white/90 text-base sm:text-lg mb-8"
              >
                Book a short meeting and see how we can support your culture.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  size="lg" 
                  className="bg-[#6366F1] text-white hover:bg-[#6366F1]/90 rounded-lg"
                  onClick={() => openCalendly()}
                  style={{fontSize: '18px', fontWeight: '600', height: '65px', borderRadius: '.4rem'}}
                >
                  Book a Demo
                </Button>
              </motion.div>
            </div>

            {/* Right section - Image (1/3 width) - Hidden on mobile */}
            <div className="hidden lg:block lg:col-span-1 relative h-full overflow-hidden">
              <img 
                src="/foot.png" 
                alt="Support your culture" 
                className="w-full h-full"
                style={{objectPosition: 'top ', objectFit: 'cover'}}
              />
              {/* Fade overlay to blend with left section */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, #252865 0%, rgba(37, 40, 101, 0.8) 30%, rgba(37, 40, 101, 0.4) 60%, transparent 100%)'
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
