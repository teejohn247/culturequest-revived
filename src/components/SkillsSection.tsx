import { motion } from "framer-motion";
import { Shield, Brain, Zap, Play } from "lucide-react";

const skills = [
  {
    icon: Shield,
    title: "Comprehensive ERP Solution",
    description: "Fully committed to streamlining your business operations",
    color: "gold",
    iconColor: "#F59E0B",
  },
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Data-driven insights will always be your competitive advantage",
    color: "blue",
    iconColor: "#3B82F6",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "The ability to automate processes is essential for modern businesses",
    color: "purple",
    iconColor: "#8B5CF6",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-14" style={{backgroundColor: '#fff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-12 leading-tight" style={{fontSize:'clamp(32px, 8vw, 60px)', color: '#1F3C6B',   fontWeight:'600'}}>
            Access everything you need on one unified interface
              <span className="inline-block w-3 h-3 rounded-full bg-[#58d4d2] ml-2" />
            </h2>

            {/* Skills List with Dashed Line */}
            <div className="relative pl-8">
              {/* Dashed vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-muted-foreground/30" />

              {/* Skills */}
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 relative"
                  >
                    {/* Icon with connecting point */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${skill.iconColor}20` }}
                      >
                        {skill.icon === Shield ? (
                          <div className="relative">
                            <Shield className="w-6 h-6" style={{ color: skill.iconColor }} />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: skill.iconColor }}>
                              Σ
                            </span>
                          </div>
                        ) : (
                          <skill.icon className="w-6 h-6" style={{ color: skill.iconColor }} />
                        )}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Introductory Text */}
            {/* <p className="text-foreground text-base leading-relaxed">
              The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
            </p> */}

            {/* Statistics Banner */}
       

            {/* Video Player */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-card border border-border">
              <video
                src="/Homepage/laptop silo.mp4"
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div
              className="rounded-lg p-6 flex items-center gap-6"
              style={{
                background: "linear-gradient(270deg,#0000,#6bf4c7 48%,#0000)",
              }}
            >
              <div className="flex-1 text-center border-r border-white/30 pr-6">
                <div className="text-4xl md:text-5xl font-bold text-black mb-1">90%</div>
                <div className="text-sm text-black/90 uppercase tracking-wider">PRODUCTIVITY INCREASE</div>
              </div>

              <div className="flex-1 text-center pl-6">
                <div className="text-4xl md:text-5xl font-bold text-black mb-1">9</div>
                <div className="text-sm text-black/90 uppercase tracking-wider">INTEGRATED MODULES</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

