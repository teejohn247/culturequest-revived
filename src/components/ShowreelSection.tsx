import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";
import { Play } from "lucide-react";

const ShowreelSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#E0FFF4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#58d4d2", color: "#000" }}
            >
              #Showreel
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(32px, 6vw, 48px)", color: "#1F3C6B" }}
            >
              Want to see SILO in action?
            </h2>
            <p className="text-muted-foreground text-lg">
              Try SILO on your own, or pick a date, and we'll walk you through 
              our platform step by step! See how easy it is to transform your 
              business operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => openCalendly()}
                size="lg"
                className="rounded-full"
              >
                Start a free trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => openCalendly()}
              >
                <Play className="w-4 h-4 mr-2" />
                Book a demo
              </Button>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-foreground/10">
              <video
                src="/Homepage/silo vid 1_1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
            
            {/* Play button overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-foreground ml-1" />
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
