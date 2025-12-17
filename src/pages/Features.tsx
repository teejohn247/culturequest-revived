import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Brain, BarChart3, Globe, Target, Star, Puzzle } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import ConsultingSection from "@/components/ConsultingSection";

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
    image: "/HR 2.jpg"
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
    image: "/CRM.jpg"
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
    image: "/Ai Analytics.jpg"
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
    image: "/Accounting.jpg"
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

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <div className="container mx-auto px-4 relative z-10" style={{marginTop: 'clamp(40px, 10vw, 100px)'}}>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" style={{fontSize:'clamp(32px, 8vw, 68px)', lineHeight:'clamp(36px, 8vw, 78px)', fontWeight:'600'}}>
                  Unite Teams Through the Power of{" "}
                  <span className="text-primary">
                    Data Intelligence
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Empower your workforce with intelligent, automated solutions designed to foster efficiency, 
                  collaboration, and data-driven decision-making across all business functions.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button size="lg" style={{height:'clamp(48px, 8vw, 60px)'}} className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => openCalendly()}>
                    <span style={{fontSize:'clamp(14px, 3vw, 18px)',  display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'600'}}>Book a Demo</span>
                  </Button>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <motion.img
                    src="/mockup 3.png"
                    alt="SILO Platform Mockup"
                    className="w-full h-auto rounded-3xl shadow-2xl object-contain md:scale-125"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Showcase - Tabbed Design */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{fontSize:'clamp(28px, 6vw, 48px)', fontWeight:'600'}}>
                Everything You Need to Scale
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                Powerful modules designed to work together seamlessly
              </p>
            </motion.div>

            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
              {mainFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
                      activeFeature === index
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-card border border-border text-foreground hover:border-primary/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">{feature.title}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Feature Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl"
              >
                <div className="grid lg:grid-cols-2 min-h-[500px]">
                  {/* Content Side */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 w-fit">
                      {(() => {
                        const Icon = mainFeatures[activeFeature].icon;
                        return <Icon className="w-5 h-5" />;
                      })()}
                      <span className="font-medium">{mainFeatures[activeFeature].title}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{lineHeight: '1.2'}}>
                      {mainFeatures[activeFeature].title}
                    </h3>
                    
                    <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                      {mainFeatures[activeFeature].description}
                    </p>
                    
                    <ul className="space-y-4">
                      {mainFeatures[activeFeature].bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-foreground text-base md:text-lg">{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Side */}
                  <div className="relative bg-primary/5 flex items-center justify-center p-8 lg:p-12">
                    <motion.img
                      key={mainFeatures[activeFeature].image}
                      src={mainFeatures[activeFeature].image}
                      alt={mainFeatures[activeFeature].title}
                      className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Why Teams Love SILO Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
                Why Teams Love SILO
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Built for modern teams who value efficiency, data-driven decisions, and operational excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto" style={{marginTop: '50px'}}> 
              {whyLoveSilo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center md:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl text-foreground mb-3">
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

        <ConsultingSection />

      </main>
      <Footer />
    </div>
  );
};
export default Features;
