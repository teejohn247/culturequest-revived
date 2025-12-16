import { motion } from "framer-motion";

const AnimatedBannerSection = () => {
  const bannerText = "From Idea to MVP in 8 Weeks * Build Smarter. Launch Faster. * Where AI Meets";
  const backgroundText = "Human Expertise * MVP in 8 Weeks * Build Smarter. Launch Faster. * Where AI Meets Human Expertise";

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background animated text */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground"
                style={{
                  fontFamily: 'serif',
                }}
              >
                {backgroundText}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Diagonal gradient banner */}
        <div className="relative z-10 mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Diagonal banner container */}
            <div
              className="relative overflow-hidden"
              style={{
                transform: "skewY(-2deg)",
                transformOrigin: "center",
              }}
            >
              {/* Gradient banner background */}
              <div
                className="py-6 md:py-8 px-8 md:px-12"
                style={{
                  background: "linear-gradient(135deg, #6366F1 0%, #383DA0 50%, #AB4FCB 100%)",
                }}
              >
                {/* Animated text on banner */}
                <div className="overflow-hidden">
                  <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{
                      x: [0, -800],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <span
                        key={i}
                        className="text-lg md:text-xl lg:text-2xl font-semibold text-white inline-block"
                        style={{
                          fontFamily: 'sans-serif',
                        }}
                      >
                        {bannerText}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Additional text above banner */}
            <div className="absolute -top-8 md:-top-12 left-0 right-0 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground"
                style={{
                  fontFamily: 'serif',
                }}
              >
                Human Expertise
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedBannerSection;

