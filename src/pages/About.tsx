import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin } from "lucide-react";
import ConsultingSection from "@/components/ConsultingSection";

const storySections = [
  {
    id: "story",
    title: "Our Story",
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32">
        <circle cx="50" cy="35" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="50" cy="30" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="35" cy="50" r="4" fill="hsl(var(--primary))"/>
        <path d="M30 60 L50 85 L70 60" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="85" r="3" fill="currentColor"/>
        <path d="M75 45 L85 35 M75 50 L90 50" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    content: [
      "Once upon a time, a digital enthusiast had this crazy idea: let's change the way businesses manage their operations! And so, SILO was born!",
      "As our crew grew, we kept the idea of a platform that's easy to use, effective, and full of useful features. Fast forward, and here we are, helping tons of businesses and agencies to crush it on operational efficiency."
    ],
    bgColor: "bg-[#FFF5E0]",
    image: "/testi-1.png"
  },
  {
    id: "mission",
    title: "Mission",
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32">
        <ellipse cx="50" cy="60" rx="35" ry="20" fill="none" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="50" cy="60" rx="25" ry="14" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M35 25 L35 45 M65 25 L65 45" stroke="currentColor" strokeWidth="3"/>
        <circle cx="35" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="65" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="42" y="50" width="16" height="20" rx="2" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
      </svg>
    ),
    content: [
      "We're all about simplifying your work life by providing you with the best solution for effective teamwork.",
      "With our platform, we transform scattered chaos into streamlined productivity, ensuring every team member stays connected, informed, and empowered to deliver their best work."
    ],
    bgColor: "bg-[#E0F7FA]",
    image: "/testi-2.png"
  },
  {
    id: "vision",
    title: "Vision",
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32">
        <circle cx="50" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M25 55 C25 75, 50 90, 50 90 C50 90, 75 75, 75 55" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="40" r="4" fill="hsl(var(--primary))"/>
        <path d="M30 30 L20 20 M70 30 L80 20" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="35" cy="70" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="65" cy="70" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    content: [
      "At SILO, we believe that teamwork makes the dream work. Our mission is to help businesses and marketers elevate their operational presence with the help of our platform.",
      "We envision a world where every business has access to enterprise-grade tools, enabling them to compete effectively and achieve sustainable growth."
    ],
    bgColor: "bg-[#FCE4EC]",
    image: "/testi-3.png"
  }
];

const teamMembers = [
  {
    name: "Bola Badmus",
    role: "CEO",
    image: "/testi-1.png"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "/testi-2.png"
  },
  {
    name: "Michael Chen",
    role: "Director of Operations",
    image: "/testi-3.png"
  }
];

const StoryCard = ({ section, index }: { section: typeof storySections[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Each card slides up from below and covers the previous one
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
      className="sticky top-32"
    >
      <div className={`relative ${section.bgColor} rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8`}>
        {/* Content */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="text-foreground/80 flex justify-center md:justify-start">
            {section.icon}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground" style={{ lineHeight: '1.2' }}>
            {section.title}
          </h3>
          {section.content.map((paragraph, i) => (
            <p key={i} className="text-foreground/80 text-base sm:text-lg max-w-md">
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/30 to-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ lineHeight: '1.2' }}>
                Streamline your business<br />operations with SILO
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
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/testi-1.png"
                  alt="Team collaboration"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Quote Card Overlay */}
                <div className="absolute bottom-8 right-4 md:right-8 bg-foreground text-background p-6 rounded-2xl max-w-sm shadow-xl">
                  <p className="text-sm md:text-base mb-4 leading-relaxed">
                    "We don't build products, we build partnerships. Our mission is to empower businesses with solutions that are agile and ambitious as they are."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src="/testi-1.png"
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
        <section className="py-8 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-md font-medium text-primary mb-4 block">About SILO</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" style={{fontSize:'clamp(32px, 8vw, 58px)', lineHeight:'clamp(36px, 8vw, 63px)', fontWeight:'600'}}>
                Learn more about<br />
                <span className="text-primary">who we are</span>
              </h2>
            </motion.div>

            {/* Stacking cards */}
            <div className="space-y-8">
              {storySections.map((section, index) => (
                <StoryCard key={section.id} section={section} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                We are <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg">#SILO</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                The team is currently composed of passionate people from various backgrounds.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-3">
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-32 bg-[#1a1a2e] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-8 rounded-lg border-2 border-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                We are <span className="text-primary">SILO</span>, and the vision is to make business operations work for everyone.
              </h2>
            </motion.div>
          </div>
        </section>

        <ConsultingSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
