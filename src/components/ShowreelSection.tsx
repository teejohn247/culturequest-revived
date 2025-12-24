import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const ShowreelSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#E8D5FF" }}>
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
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary text-foreground"
            >
              #Showreel
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Want to see SILO in action?
            </h2>
            <p className="text-muted-foreground text-lg">
              Try SILO on your own, or pick a date, and we will walk you through 
              our platform step by step! See how easy it is to transform your 
              business operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
              >
                Start a free trial
              </Button>
              <Button
                variant="outline"
                size="lg"
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
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
              <video
                src="/Homepage/silo vid 1_1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
            
            {/* Badge overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 left-1/4 z-20 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg"
              style={{ 
                backgroundColor: '#4ADE80',
                color: '#1a1a1a',
                border: '2px solid #1a1a1a',
              }}
            >
              Meet SILO ERP
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;