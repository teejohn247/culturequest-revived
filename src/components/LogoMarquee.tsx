import { motion } from "framer-motion";

const logos = [
  { name: "TechCorp", initials: "TC" },
  { name: "Innovate", initials: "IN" },
  { name: "GrowthHub", initials: "GH" },
  { name: "TeamFlow", initials: "TF" },
  { name: "ScaleUp", initials: "SU" },
  { name: "Catalyst", initials: "CA" },
  { name: "Momentum", initials: "MM" },
];

const LogoMarquee = () => {
  return (
    <section className="py-16 overflow-hidden bg-background border-y border-border/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-sm text-muted-foreground font-medium">Trusted by</p>
      </motion.div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="font-semibold text-sm text-muted-foreground">{logo.initials}</span>
              </div>
              <span className="font-medium text-muted-foreground whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
