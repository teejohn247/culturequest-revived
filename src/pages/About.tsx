import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
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

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />
      <main>
        {/* Decorative Top Waves */}
        <div className="relative pt-24 md:pt-32">
          <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-24 bg-[#E0F7FA] rounded-b-[50%] transform scale-x-150" />
            <div className="absolute top-12 left-0 right-0 h-24 bg-[#FCE4EC] rounded-b-[50%] transform scale-x-125" />
          </div>
        </div>

        {/* Story Sections with Scroll Animation */}
        {storySections.map((section, index) => (
          <StorySection key={section.id} section={section} index={index} />
        ))}

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

interface StorySectionProps {
  section: typeof storySections[0];
  index: number;
}

const StorySection = ({ section, index }: StorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen ${section.bgColor} overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            style={{ y: contentY, opacity }}
            className="text-center lg:text-left"
          >
            <div className="text-foreground/80 mb-8">
              {section.icon}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {section.title}
            </h2>
            {section.content.map((paragraph, i) => (
              <p key={i} className="text-lg text-foreground/80 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
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
    </section>
  );
};

export default About;
