import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <>
      {/* Left side shapes */}
      <motion.div
        className="absolute left-[5%] top-[15%] opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <rect x="10" y="10" width="80" height="80" rx="16" stroke="hsl(252 85% 60%)" strokeWidth="2" fill="none" />
          <rect x="50" y="50" width="80" height="80" rx="16" stroke="hsl(252 85% 60%)" strokeWidth="2" fill="none" />
          <rect x="90" y="90" width="80" height="80" rx="16" stroke="hsl(280 75% 55%)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[8%] top-[60%] opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <rect x="10" y="10" width="60" height="60" rx="12" stroke="hsl(175 70% 45%)" strokeWidth="2" fill="none" />
          <rect x="40" y="40" width="60" height="60" rx="12" stroke="hsl(252 85% 60%)" strokeWidth="2" fill="none" />
          <rect x="70" y="70" width="60" height="60" rx="12" stroke="hsl(15 85% 60%)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Right side shapes */}
      <motion.div
        className="absolute right-[5%] top-[10%] opacity-30"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <rect x="10" y="10" width="70" height="70" rx="14" stroke="hsl(252 85% 60%)" strokeWidth="2" fill="none" />
          <rect x="45" y="45" width="70" height="70" rx="14" stroke="hsl(280 75% 55%)" strokeWidth="2" fill="none" />
          <rect x="80" y="80" width="70" height="70" rx="14" stroke="hsl(252 85% 60%)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[55%] opacity-25"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="5" y="5" width="50" height="50" rx="10" stroke="hsl(175 70% 45%)" strokeWidth="2" fill="none" />
          <rect x="35" y="35" width="50" height="50" rx="10" stroke="hsl(252 85% 60%)" strokeWidth="2" fill="none" />
          <rect x="65" y="65" width="50" height="50" rx="10" stroke="hsl(15 85% 60%)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Side floating icons */}
      <motion.div
        className="absolute left-0 top-1/3 -translate-x-1/2"
        animate={{
          x: [-50, -40, -50],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(175 70% 45%)" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
            </svg>
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(252 85% 60%)" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(15 85% 60%)" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingShapes;
