import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const ShowreelSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
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
              Want to see ZoomSphere in action?
            </h2>
            <p className="text-muted-foreground text-lg">
              Try ZoomSphere on your own, or pick a date, and we'll walk you through 
              our tool step by step!
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;