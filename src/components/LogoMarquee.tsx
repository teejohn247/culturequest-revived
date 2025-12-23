import { motion } from "framer-motion";

const logos = [
  { name: "Meta", image: "/sponsors/aquitane.jpg" },
  // { name: "UNICEF", image: "/sponsors/UNICEF_Logo.png" },
  { name: "Google Play", image: "/sponsors/Calvados.png" },
  { name: "Google Play", image: "/sponsors/image.png" },
  // { name: "App Store", image: "/sponsors/google-play-and-apple-app-store-logos-22.png" },
  // { name: "Canada", image: "/sponsors/Flag_of_Canada.png" },
];

const LogoMarquee = () => {
  return (
    <section className="py-16 overflow-hidden " style={{backgroundColor: '#fff'}}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-sm text-muted-foreground font-medium" style={{color: '#000000', fontSize: '16px'}}>Trusted by</p>
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
              className="flex-shrink-0 mx-16 flex items-center justify-center transition-opacity"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                style={{ maxHeight: '100px', width: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
