import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WorkspacesSection = () => {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#FBF8F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-foreground/10">
              <img
                src="/Mockup 2 (3).png"
                alt="SILO Workspaces Interface"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full hidden lg:flex items-center justify-center"
              style={{ backgroundColor: "#FFD700" }}
            >
              <span className="text-foreground font-bold text-sm">NEW</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#FFD700", color: "#000" }}
            >
              #Workspaces
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(32px, 6vw, 48px)" }}
            >
              Get your departments organized in Workspaces!
            </h2>
            <p className="text-muted-foreground text-lg">
              With just a click, you've got everything you need in one place. 
              Organize your HR, Sales, Finance, and Operations teams in dedicated workspaces. 
              Piece of cake!
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
              Try it now
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkspacesSection;
