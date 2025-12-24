import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin } from "lucide-react";
import LogoMarquee from "@/components/LogoMarquee";
import FAQSection from "@/components/FAQSection";

const storySections = [
  {
    id: "story",
    title: "Our Story",
    content: [
      "Once upon a time, a digital enthusiast had this crazy idea: let's change the way businesses manage their operations! And so, SILO was born!",
      "As our crew grew, we kept the idea of a platform that's easy to use, effective, and full of useful features. Fast forward, and here we are, helping tons of businesses and agencies to crush it on operational efficiency."
    ],
    bgColor: "#FFFFFF",
    textColor: "#171717",
    image: "/story.png"
  },
  {
    id: "mission",
    title: "Mission",
    content: [
      "We're all about simplifying your work life by providing you with the best solution for effective teamwork.",
      "With our platform, we transform scattered chaos into streamlined productivity, ensuring every team member stays connected, informed, and empowered to deliver their best work."
    ],
    bgColor: "#171717",
    textColor: "#FFFFFF",
    image: "/mission.png"
  },
  {
    id: "vision",
    title: "Vision",
    content: [
      "At SILO, we believe that teamwork makes the dream work. Our mission is to help businesses and marketers elevate their operational presence with the help of our platform.",
      "We envision a world where every business has access to enterprise-grade tools, enabling them to compete effectively and achieve sustainable growth."
    ],
    bgColor: "#FFD700",
    textColor: "#171717",
    image: "/vision.jpg"
  }
];

const teamMembers = [
  {
    name: "Mr. Bola Badmus",
    role: "CEO",
    image: "/mr-bola.png"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "/sarah.png"
  },
  {
    name: "Michael Chen",
    role: "Director of Operations",
    image: "/mike.png"
  }
];

const StoryCard = ({ section, index }: { section: typeof storySections[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [300, 100, 0, 0, -100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="sticky top-8"
    >
      <div 
        className="relative rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 border-2 border-foreground/10"
        style={{ backgroundColor: section.bgColor, color: section.textColor }}
      >
        {/* Content */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h3 
            className="text-2xl md:text-4xl font-bold"
            style={{ lineHeight: '1.2', color: section.textColor }}
          >
            {section.title}
          </h3>
          {section.content.map((paragraph, i) => (
            <p 
              key={i} 
              className="text-base sm:text-lg max-w-md"
              style={{ color: section.textColor, opacity: 0.85 }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-lg relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section 
          className="relative pt-32 pb-20 overflow-hidden bg-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                style={{ lineHeight: '1.2' }}
              >
                Streamline your business<br />operations with{" "}
                <span className="inline-block px-3 py-1 rounded-lg bg-primary border-2 border-foreground">
                  SILO
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We specialize in building scalable, user-centric SaaS solutions that help startups and businesses transform ideas
              </p>
            </motion.div>

            {/* Image with Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-foreground/10">
                <img
                  src="/image.png"
                  alt="Team collaboration"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Quote Card Overlay */}
                <div className="absolute bottom-8 right-4 md:right-8 bg-foreground text-background p-6 rounded-2xl max-w-sm shadow-xl border-2 border-foreground">
                  <p className="text-sm md:text-base mb-4 leading-relaxed">
                    "We don't build products, we build partnerships. Our mission is to empower businesses with solutions that are agile and ambitious as they are."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src="/mr-bola.png"
                        alt="Mr Bola Badmus"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Mr Bola Badmus</p>
                      <p className="text-xs text-muted-foreground">CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stacking Story Cards Section */}
        <LogoMarquee />
        <section className="bg-background" style={{ paddingTop: '100px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span 
                className="inline-block px-4 py-2 rounded-full bg-primary text-foreground text-sm font-semibold uppercase tracking-wider mb-6 border-2 border-foreground"
              >
                About Silo
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
                style={{ fontSize: 'clamp(32px, 8vw, 58px)', lineHeight: '1.1' }}
              >
                Learn more about<br />
                <span className="inline-block px-3 py-1 rounded-lg bg-primary border-2 border-foreground mt-2">
                  who we are
                </span>
              </h2>
            </motion.div>

            {/* Stacking cards */}
            <div className="mt-12">
              {storySections.map((section, index) => (
                <StoryCard key={section.id} section={section} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-32 text-background" style={{ backgroundColor: '#171717', marginTop: '100px' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-8 rounded-lg border-2 flex items-center justify-center"
                style={{ borderColor: '#FFD700', backgroundColor: '#FFD700' }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-foreground" fill="none" stroke="#171717" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                We are{" "}
                <span 
                  className="inline-block px-3 py-1 rounded-lg border-2 border-white"
                  style={{ backgroundColor: '#FFD700', color: '#171717' }}
                >
                  SILO
                </span>
                , and the vision is to make business operations work for everyone.
              </h2>
            </motion.div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;