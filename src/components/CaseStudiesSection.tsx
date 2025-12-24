import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "How TechStart Increased Productivity by 40% with SILO",
    image: "/Homepage/Hr Management.jpg",
    company: "TechStart Inc",
  },
  {
    title: "Streamlining Operations: Manufacturing Success Story",
    image: "/Homepage/CRM.jpg",
    company: "ManuCorp",
  },
  {
    title: "From Chaos to Clarity: Retail Business Transformation",
    image: "/Homepage/Accounting.jpg",
    company: "RetailPro",
  },
  {
    title: "How Global Services Unified 200+ Team Members",
    image: "/Homepage/Ai Analytics.jpg",
    company: "Global Services",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#E0FFF4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-primary text-foreground"
          >
            #CaseStudies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What teams achieve with SILO
          </h2>
        </motion.div>

        {/* Case Studies Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden mb-4 aspect-video bg-muted">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors">
                {study.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground rounded-full text-foreground font-medium hover:bg-foreground hover:text-background transition-colors">
            All case studies
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;