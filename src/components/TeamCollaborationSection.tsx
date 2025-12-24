import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TeamCollaborationSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-background">
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
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Homepage/CRM.jpg"
                alt="SILO Team Collaboration"
                className="w-full h-auto"
              />
            </div>
            {/* Chat bubbles decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-sm">A</div>
                <div className="text-sm">
                  <p className="font-medium text-foreground">Alex</p>
                  <p className="text-muted-foreground text-xs">Great work! 👍</p>
                </div>
              </div>
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
              style={{ backgroundColor: "#FF7B6B", color: "#000" }}
            >
              #Team
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Teamwork made easy
            </h2>
            <p className="text-muted-foreground text-lg">
              Bring your team together and crush those goals! Discuss ideas, jot down notes, share comments, and assign tasks with ease across all departments.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors">
              Discover all of our teamwork features
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollaborationSection;