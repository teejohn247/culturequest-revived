import { motion } from "framer-motion";

const logos = [
  { name: "Deloitte", text: "deloitte" },
  { name: "E.ON", text: "E.ON" },
  { name: "ESET", text: "ESET" },
  { name: "IKEA", text: "IKEA" },
  { name: "O2", text: "O2" },
  { name: "Ogilvy", text: "Ogilvy" },
  { name: "Orange", text: "Orange" },
  { name: "Sony", text: "SONY" },
  { name: "Tesco", text: "TESCO" },
];

const LogoMarquee = () => {
  return (
    <section className="py-12 overflow-hidden bg-card">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span 
                className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                style={{ letterSpacing: '0.05em' }}
              >
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;