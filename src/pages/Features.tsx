import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Brain, BarChart3, Globe, Target, Star, Puzzle, MessageSquare, TrendingUp, Shield, BookOpen } from "lucide-react";

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
    visualType: "chat"
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
    visualType: "chat"
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
    visualType: "dashboard"
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
    visualType: "dashboard"
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
          <div className="container mx-auto px-4 relative z-10" style={{marginTop: '100px'}}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Unite Teams Through the Power of{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Data Intelligence
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Empower your workforce with intelligent, automated solutions designed to foster efficiency, 
                  collaboration, and data-driven decision-making across all business functions.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:opacity-90">
                  Book a Meeting
                </Button>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <motion.img
                    src="/mockup 3.png"
                    alt="SILO Platform Mockup"
                    className="w-full h-auto rounded-3xl shadow-2xl object-contain"
                    initial={{ opacity: 0, scale: 4.95 }}
                    animate={{ opacity: 1, scale: 1.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Showcase - Full Rows */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
                  >
                    {/* Visual Icon - Alternates sides */}
                    <div className={`w-full md:w-1/2 flex justify-center md:justify-start ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="w-full max-w-sm aspect-square rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-6 flex items-center justify-center">
                        {feature.visualType === "chat" ? (
                          <div className="space-y-3 w-full">
                            <div className="bg-white rounded-lg p-3 relative">
                              <div className="h-3 bg-purple-200 rounded w-3/4"></div>
                              <div className="absolute -right-2 -top-2 w-4 h-4 bg-blue-300 rounded-full flex items-center justify-center">
                                <span className="text-[8px] text-white">★</span>
                              </div>
                              <div className="absolute -left-1.5 -top-1.5 w-3 h-3 bg-blue-300 rounded-full"></div>
                            </div>
                            <div className="bg-white rounded-lg p-3 relative">
                              <div className="h-3 bg-purple-200 rounded w-2/3"></div>
                              <div className="absolute -left-2 -top-2 w-4 h-4 bg-blue-300 rounded-full flex items-center justify-center">
                                <span className="text-[8px] text-white">★</span>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 relative">
                              <div className="h-3 bg-purple-200 rounded w-4/5"></div>
                              <div className="absolute -right-2 -top-2 w-4 h-4 bg-blue-300 rounded-full flex items-center justify-center">
                                <span className="text-[8px] text-white">★</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white rounded-lg p-4 w-full h-full flex flex-col">
                            <div className="text-xs font-semibold text-gray-700 mb-2">Culture score</div>
                            <div className="flex items-center justify-center gap-3 mb-3 flex-1">
                              <div className="relative w-20 h-20">
                                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 40 40">
                                  <circle cx="20" cy="20" r="16" fill="none" stroke="#E5E7EB" strokeWidth="3"/>
                                  <circle cx="20" cy="20" r="16" fill="none" stroke="#A855F7" strokeWidth="3" 
                                    strokeDasharray={`${2 * Math.PI * 16}`} 
                                    strokeDashoffset={`${2 * Math.PI * 16 * 0.3}`}
                                    strokeLinecap="round"/>
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-purple-600">70</span>
                              </div>
                            </div>
                            <div className="space-y-2 w-full">
                              <div className="h-2 bg-purple-200 rounded w-full"></div>
                              <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                              <div className="h-2 bg-purple-200 rounded w-1/2"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Content - Alternates sides */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{bullet}</span>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Teams Love SILO
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for modern teams who value efficiency, data-driven decisions, and operational excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyLoveSilo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
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
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Book a Meeting
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Placeholder for image */}
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-white/50 text-sm">Image placeholder</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
