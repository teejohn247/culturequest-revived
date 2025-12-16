import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Brain, BarChart3, Globe, Target, Star, Puzzle, MessageSquare, TrendingUp, Shield, BookOpen } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import ConsultingSection from "@/components/ConsultingSection";

const secondaryNavItems = [
  { icon: Users, label: "HR Management" },
  { icon: Briefcase, label: "CRM" },
  { icon: Brain, label: "AI Analytics" },
  { icon: BarChart3, label: "Accounting" },
];

const mainFeatures = [
  {
    title: "HR Management",
    description: "Managers get clear department insights, enabling early problem-solving and targeted improvements for a healthier team.",
    bullets: [
      "Automated recruitment workflows",
      "Leave and attendance tracking",
      "Payroll processing automation",
      "Employee data management"
    ],
    visualType: "HR"
  },
  {
    title: "CRM",
    description: "Access rich customer data, personalized interactions, and localized experiences designed to meet the diverse needs of your team wherever they are.",
    bullets: [
      "Contact and lead management",
      "Sales pipeline tracking",
      "Marketing campaign automation",
      "Customer interaction logging"
    ],
    visualType: "CRM"
  },
  {
    title: "AI Analytics",
    description: "Boost collaboration and efficiency with AI-powered insights, real-time analytics, and dashboards that turn data into impact.",
    bullets: [
      "Predictive analytics",
      "Real-time dashboards",
      "Automated reporting",
      "Intelligent recommendations"
    ],
    visualType: "AI"
  },
  {
    title: "Accounting",
    description: "Boost financial control and reporting with automated processes, real-time analytics, and dashboards that turn insights into action.",
    bullets: [
      "Real-time financial reports",
      "Automated payroll processing",
      "Expense management",
      "Financial statement generation"
    ],
    visualType: "Accounting"
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Secondary Navigation */}
   

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
                  <span className="bg-gradient-to-r from-[#6366F1] via-[#383DA0] to-[#AB4FCB] bg-clip-text text-transparent">
                    Data Intelligence
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Empower your workforce with intelligent, automated solutions designed to foster efficiency, 
                  collaboration, and data-driven decision-making across all business functions.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button size="lg" style={{backgroundColor: '#6366F1', height:'clamp(48px, 8vw, 60px)'}} className="bg-gradient-to-r" onClick={() => openCalendly()}>
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

        {/* Feature Showcase - Full Rows */}
        <section className="py-24 bg-background" style={{backgroundColor: '#F7F8FF'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
            <div>
              {mainFeatures.map((feature, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 md:gap-12 items-center mb-16 md:mb-24 last:mb-0"
                  >
                    {/* Visual Image - Alternates sides */}
                    <div className={`w-full md:w-1/2 flex justify-center md:justify-start ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="w-full max-w-sm aspect-square rounded-xl overflow-hidden">
                        <img 
                          src={
                            feature.visualType === "HR" ? "/HR 2.jpg" :
                            feature.visualType === "CRM" ? "/CRM.jpg" :
                            feature.visualType === "AI" ? "/Ai Analytics.jpg" :
                            "/Accounting.jpg"
                          }
                          alt={feature.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    
                    {/* Content - Alternates sides */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4 md:px-0" style={{fontSize:'clamp(28px, 6vw, 56px)', fontWeight:'600', lineHeight:'clamp(32px, 6vw, 67px)'}}>{feature.title}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed px-4 md:px-0" style={{fontWeight:'400', lineHeight:'clamp(24px, 4vw, 30px)', color: '#000000'}}>{feature.description}</p>
                      <ul className="space-y-3 px-4 md:px-0">
                        {feature.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-base text-muted-foreground justify-center md:justify-start">
                            <span className="text-primary flex-shrink-0" style={{fontSize:'clamp(20px, 4vw, 48px)', fontWeight:'400'}}>•</span>
                            <span className="text-left" style={{fontSize:'clamp(16px, 3vw, 20px)', color: '#000000', lineHeight:'clamp(24px, 4vw, 30px)'}}>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/20 via-[#383DA0]/20 to-[#AB4FCB]/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <item.icon className="w-6 h-6 text-[#6366F1]" />
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

        {/* CTA Section */}
        {/* <section className="py-24" style={{backgroundColor: '#6366F1'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Curious about more?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Book a short meeting and see how we can support your business operations.
                </p>
                <Button size="lg" style={{height:'60px'}} className="bg-white text-[#000000] hover:bg-white/90" onClick={() => openCalendly()}>
                  <span style={{fontSize:'18px',  display:'flex', alignItems:'center', justifyContent:'center'}}>Book a Meeting</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
               
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="/mockup 1.jpeg" 
                    alt="SILO Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}
        <ConsultingSection />

      </main>
      <Footer />
    </div>
  );
};
export default Features;
