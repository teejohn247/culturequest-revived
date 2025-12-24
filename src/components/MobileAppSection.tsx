import { motion } from "framer-motion";

const MobileAppSection = () => {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#FFF5E6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-xl"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary text-foreground"
          >
            #MobileApp
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Keep SILO
            <br /> right in your pocket.
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            Stay in sync with your operations from anywhere. Approve workflows, review dashboards, and get real-time alerts
            from the SILO mobile app.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <img 
              style={{width: '50%', height: 'auto', maxWidth: '250px'}} 
              src="/Homepage/google-play-and-apple-app-store-logos-22.png" 
              alt="Download on App Store and Google Play" 
            />
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <video 
                src="/Homepage/All Scenes_1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover" 
                style={{maxHeight: '500px'}} 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppSection;