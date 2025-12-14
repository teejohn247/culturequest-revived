import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import ConsultingSection from "@/components/ConsultingSection";

const teamMembers = [
  {
    name: "Bola Badmus, Jr.",
    role: "CEO & Founder",
    description: "Visionary leader with extensive experience in software development and business strategy. Founded SILO Solutions Ltd. in 2023 to transform how SMEs manage their operations.",
    email: "bola@silo-inc.com",
    phone: "+1 (555) 123-4567",
    image: "/api/placeholder/300/400"
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-founder",
    description: "Technology expert specializing in AI and data analytics. Leads the development of SILO's innovative platform and ensures cutting-edge solutions for our clients.",
    email: "sarah@silo-inc.com",
    phone: "+1 (555) 234-5678",
    image: "/api/placeholder/300/400"
  },
  {
    name: "Michael Chen",
    role: "COO & Co-founder",
    description: "Operations specialist focused on delivering exceptional customer experiences. Ensures seamless implementation and ongoing support for all SILO clients.",
    email: "michael@silo-inc.com",
    phone: "+1 (555) 345-6789",
    image: "/api/placeholder/300/400"
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 px-4">
                Learn More About SILO
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 px-4">
                We are a team of founders who believe that operational efficiency is a strategy. 
                Our platform provides continuous data processing, AI-driven analytics, and actionable insights 
                to translate raw data into practical business actions.
              </p>
              <Button size="lg" style={{height:'clamp(48px, 8vw, 60px)'}} className="bg-gradient-to-r from-[#7074F2] via-[#7074F2] to-[#7074F2] text-white hover:opacity-90" onClick={() => openCalendly()}>
                <span style={{fontSize:'clamp(14px, 3vw, 18px)',  display:'flex', alignItems:'center', justifyContent:'center'}}>Book a Demo</span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Do in SILO
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SILO provides clarity to businesses and leaders, enabling them to act on insights from 
                automated data processing, AI-powered analytics, and comprehensive reporting. Our platform 
                transforms raw data into valuable business intelligence, helping companies streamline operations, 
                reduce costs, and drive growth through data-driven decision-making.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mission
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our mission is to deliver innovative digital analytics and services for business operations 
                and efficiency. We foster sustainable change and long-term success by providing SMEs with 
                accessible, powerful tools that transform how they manage HR, CRM, accounting, and data analytics. 
                Through AI-driven automation and intelligent insights, we help businesses operate more efficiently, 
                make better decisions, and achieve their growth objectives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vision
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We envision a world where companies prioritize operational excellence and data-driven decision-making 
                as key strategies for success. By making enterprise-grade ERP solutions accessible to small and 
                medium businesses, we empower organizations to compete effectively, scale efficiently, and build 
                sustainable operations that support long-term growth and employee satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
                Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Meet the founders and leaders behind SILO, dedicated to transforming how businesses operate.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6366F1]/20 via-[#383DA0]/20 to-[#AB4FCB]/20 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#6366F1] via-[#383DA0] to-[#AB4FCB] bg-clip-text text-transparent">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className=" bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                About SILO Solutions Ltd.
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <p>
                  Incorporated in 2023, SILO Solutions Ltd. is an innovative software development and consulting 
                  firm trusted by SMEs to create custom IT solutions for daily business functions.
                </p>
                <p>
                  We are cloud-based ERP specialists covering HR, CRM, Accounting, and more. We provide tailored 
                  software solutions for SMEs and nonprofits, helping companies gain instant access to critical 
                  business metrics and insights with just a few clicks.
                </p>
                <p>
                  Our platform identifies issues before they become problems, along with detailed reporting that 
                  provides actionable insights. We help businesses streamline operations, reduce manual work, and 
                  make data-driven decisions that drive growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-24 bg-gradient-to-br from-[#6063EB] via-[#6063EB] to-[#6063EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Curious about more?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Book a short meeting and see how we can support your business operations.
              </p>
              <Button size="lg" style={{height:'60px'}} variant="secondary" className="bg-white text-[#6366F1] hover:bg-white/90" onClick={() => openCalendly()}>
                <span style={{fontSize:'18px',  display:'flex', alignItems:'center', justifyContent:'center'}}>Book a Meeting</span>
              </Button>
            </motion.div>
          </div>
        </section> */}
        <ConsultingSection />

      </main>
      <Footer />
    </div>
  );
};

export default About;

