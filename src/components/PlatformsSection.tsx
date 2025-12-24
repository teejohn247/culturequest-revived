import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const platforms = [
  { name: "Facebook", icon: "📘", color: "#1877F2" },
  { name: "Instagram", icon: "📷", color: "#E4405F" },
  { name: "TikTok", icon: "🎵", color: "#000000" },
  { name: "LinkedIn", icon: "💼", color: "#0A66C2" },
  { name: "X", icon: "𝕏", color: "#000000" },
  { name: "YouTube", icon: "▶️", color: "#FF0000" },
];

const PlatformsSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#40E0D0", color: "#000" }}
            >
              #Platforms&Formats
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Works with all popular platforms and formats
            </h2>
            <p className="text-muted-foreground text-lg">
              Easily juggle your pages, profiles, and accounts across various platforms, like Facebook, Instagram, TikTok, LinkedIn, X and YouTube. With ZoomSphere, you can schedule and publish different content types, from short videos to stories.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors">
              Learn more about short video formats
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="grid grid-cols-3 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-background rounded-2xl p-6 shadow-lg border border-border text-center cursor-pointer"
                >
                  <div
                    className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${platform.color}15` }}
                  >
                    {platform.icon}
                  </div>
                  <p className="font-medium text-foreground text-sm">{platform.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;