import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Brain, BarChart3, Globe, Target, Star, Puzzle } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import BentoFeaturesSection from "@/components/BentoFeaturesSection";

const mainFeatures = [
  {
    id: "hr",
    icon: Users,
    title: "HR Management",
    description: "Managers get clear department insights, enabling early problem-solving and targeted improvements for a healthier team.",
    bullets: [
      "Automated recruitment workflows",
      "Leave and attendance tracking",
      "Payroll processing automation",
      "Employee data management"
    ],
    image: "/Homepage/Hr Management.jpg",
    color: "#FF7B6B"
  },
  {
    id: "crm",
    icon: Briefcase,
    title: "CRM",
    description: "Access rich customer data, personalized interactions, and localized experiences designed to meet the diverse needs of your team wherever they are.",
    bullets: [
      "Contact and lead management",
      "Sales pipeline tracking",
      "Marketing campaign automation",
      "Customer interaction logging"
    ],
    image: "/Homepage/CRM.jpg",
    color: "#40E0D0"
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Analytics",
    description: "Boost collaboration and efficiency with AI-powered insights, real-time analytics, and dashboards that turn data into impact.",
    bullets: [
      "Predictive analytics",
      "Real-time dashboards",
      "Automated reporting",
      "Intelligent recommendations"
    ],
    image: "/Homepage/Ai Analytics2.jpg",
    color: "#FFD700"
  },
  {
    id: "accounting",
    icon: BarChart3,
    title: "Accounting",
    description: "Boost financial control and reporting with automated processes, real-time analytics, and dashboards that turn insights into action.",
    bullets: [
      "Real-time financial reports",
      "Automated payroll processing",
      "Expense management",
      "Financial statement generation"
    ],
    image: "/Homepage/Accounting.jpg",
    color: "#9B59B6"
  },
];

const whyLoveSilo = [
  {
    icon: Globe,
    title: "Boost Cross-Platform Collaboration",
    description: "Equip teams to work seamlessly across departments, systems, and communication styles."
  },
  {
    icon: Target,
    title: "Drive Business Growth with Impact",
    description: "Make data-driven decisions tangible through measurable insights and actionable analytics."
  },
  {
    icon: Star,
    title: "Scalable for Growing Businesses",
    description: "Whether you're 10 or 10,000 employees, we scale to support your entire organization."
  },
  {
    icon: Puzzle,
    title: "Easy Onboarding & Integration",
    description: "Plug into your existing systems or run standalone with intuitive UX and minimal setup."
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof mainFeatures[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = feature.icon;
  
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
      className="sticky top-10"
    >
      <div 
        className="relative rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-8 bg-card border-2 border-foreground/10"
      >
        {/* Content */}
        <div className="flex-1 space-y-4">
          <span 
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border-2 border-foreground"
            style={{ backgroundColor: feature.color }}
          >
            <Icon className="w-4 h-4" />
            {feature.title}
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground" style={{ lineHeight: '1.2' }}>
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md">
            {feature.description}
          </p>
          <ul className="space-y-2 pt-2">
            {feature.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3">
                <span 
                  className="w-2 h-2 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: feature.color }}
                />
                <span className="text-foreground text-sm md:text-base">{bullet}</span>
              </li>
            ))}
          </ul>
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
            <div 
              className="absolute -inset-4 rounded-3xl"
              style={{ backgroundColor: `${feature.color}30` }}
            />
            <img 
              src={feature.image} 
              alt={feature.title}
              className="w-full h-auto object-cover relative z-10 rounded-2xl border-2 border-foreground/10"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 lg:pt-24 pb-0 overflow-visible bg-background">
          <div className="container mx-auto px-4 relative z-10" style={{marginTop: 'clamp(40px, 10vw, 100px)'}}>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left pt-8 lg:pt-16"
              >
                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                  style={{ fontSize: 'clamp(32px, 8vw, 68px)', lineHeight: '1.1' }}
                >
                  Unite Teams Through the Power of{" "}
                  <span 
                    className="inline-block px-3 py-1 rounded-lg bg-primary border-2 border-foreground"
                    style={{ transform: 'rotate(-1deg)', display: 'inline-block' }}
                  >
                    #DataIntelligence
                  </span>
                </h1>
                <p 
                  className="text-base sm:text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
                  style={{ fontSize: '18px', lineHeight: '28px' }}
                >
                  Empower your workforce with intelligent, automated solutions designed to foster efficiency, collaboration, and data-driven decision-making across all business functions.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button variant="default" size="lg" onClick={() => openCalendly()}>
                    Book a Demo
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative">
                  <img
                    src="/Mockup 2 (3).png"
                    alt="SILO Platform Mockup"
                    className="w-full object-cover relative z-10"
                    style={{ transform: 'scale(1.3)', marginTop: '100px' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <BentoFeaturesSection />

        {/* Feature Showcase - Scroll Stacking Cards */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}
              >
                Everything You Need to{" "}
                <span className="inline-block px-3 py-1 rounded-lg bg-primary border-2 border-foreground">
                  Scale
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                Powerful modules designed to work together seamlessly
              </p>
            </motion.div>

            <div className="mt-8">
              {mainFeatures.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Teams Love SILO Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
                Why Teams Love{" "}
                <span className="inline-block px-3 py-1 rounded-lg bg-primary border-2 border-foreground">
                  SILO
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Built for modern teams who value efficiency, data-driven decisions, and operational excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-12"> 
              {whyLoveSilo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border-2 border-foreground/10 rounded-2xl p-6 md:p-8 text-center md:text-left hover:border-foreground/30 transition-colors"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0 border-2 border-foreground"
                    style={{ backgroundColor: '#FFD700' }}
                  >
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;