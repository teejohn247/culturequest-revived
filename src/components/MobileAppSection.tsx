import { motion } from "framer-motion";
import { Smartphone, Download, PlayCircle } from "lucide-react";

const MobileAppSection = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#fff" }}>
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#03312F]"
            style={{ backgroundColor: "#58d4d2" }}
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
          <img style={{width: '50%', height: 'auto'}} src="/Homepage/google-play-and-apple-app-store-logos-22.png" alt="App Store" className="w-4 h-4" />
{/* 
            <button className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black text-white text-sm font-medium">
              <Download className="w-4 h-4" />
              <span>Get it on App Store</span>
            </button>
            <button className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-foreground border border-border text-sm font-medium">
              <PlayCircle className="w-4 h-4" />
              <span>Get it on Google Play</span>
            </button> */}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <video src="/Homepage/All Scenes.mp4" autoPlay loop muted className="w-full h-full object-cover rounded-3xl" style={{height: '500px'}} />
            {/* <div className="absolute -top-8 -left-6 w-24 h-24 rounded-3xl bg-white shadow-md flex items-center justify-center text-xs text-muted-foreground border border-border">
              <span>
                Scan to
                <br /> download
              </span>
            </div>

            <div className="rounded-[2.5rem] bg-white shadow-2xl border border-border p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-muted-foreground">Overall Dashboard</span>
                <Smartphone className="w-4 h-4 text-muted-foreground" />
              </div>

              <div className="space-y-4">
                <div className="h-16 rounded-xl" style={{ backgroundColor: "#FDE68A" }} />
                <div className="h-16 rounded-xl" style={{ backgroundColor: "#BFDBFE" }} />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl" style={{ backgroundColor: "#FDBA74" }} />
                  <div className="h-20 rounded-xl" style={{ backgroundColor: "#A7F3D0" }} />
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppSection;