import { motion } from "framer-motion";

const values = [

  {
    tag: "Real-time Business Intelligence",
    title: "Transform raw data into actionable insights",
    description: "Get instant access to critical business metrics with predictive analytics and automated reporting. Make data-driven decisions that drive growth.",
    color: "pink",
    image: "/Frame 15.png",
  },
  {
    tag: "Streamline Operations",
    title: "Automated processes that save time and reduce errors",
    description: "AI-driven automation handles data processing, payroll, and reporting – freeing your team to focus on strategic initiatives. 90% increase in productivity and efficiency.",
    color: "purple",
    image: "/Frame 19.png",
  },
  {
    tag: "Unified Platform",
    title: "All-in-one solution for HR, CRM, AI, and Accounting",
    description: "No more juggling multiple systems. SILO integrates everything you need in one platform – from recruitment to financial reporting, all seamlessly connected.",
    color: "blue",
    image: "/Frame 18.png",
  },
];

const ValueSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">How SILO creates value</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" style={{fontSize:'clamp(32px, 8vw, 78px)', lineHeight:'clamp(36px, 8vw, 73px)', fontWeight:'600'}}>
            From setup to<br /> success with
            <br />
            <span className="text-gradient">Streamlined returns.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            SILO combines powerful software with expert consulting to help SMEs transform their operations.
          </p>
        </motion.div>

        {/* Value cards */}
        <div className="space-y-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative bg-card rounded-3xl p-8 md:p-8  overflow-hidden  transition-all duration-500 ${
                index === 0 ? 'md:flex-row' : index === 1 ? 'md:flex-row-reverse' : 'md:flex-row' 
              } flex flex-col md:flex-row items-center gap-8`} >
                {/* Content */}
                <div className="flex-1 space-y-4 justify-start" >
                  {/* <span className={`inline-block text-sm font-medium px-4 py-1.5 rounded-full ${
                    value.color === 'purple' ? 'bg-[#6366F1]/10 text-[#6366F1]' :
                    value.color === 'pink' ? 'bg-[#383DA0]/10 text-[#383DA0]' :
                    'bg-[#AB4FCB]/10 text-[#AB4FCB]'
                  }`}>
                    {value.tag}
                  </span> */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{fontSize:'clamp(24px, 6vw, 56px)', lineHeight:'clamp(28px, 6vw, 56px)', fontWeight:'600', color: '#000000'}}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    {value.description}
                  </p>
                </div>

                {/* Mockup Image */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1.10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-lg"
                  >
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
