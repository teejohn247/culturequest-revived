import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "What service does SILO offer?",
    answer:
      "SILO is an all-in-one ERP platform that unifies HR, CRM, AI analytics and accounting so you can manage your operations from a single source of truth.",
  },
  {
    question: "How much does SILO ERP system cost?",
    answer:
      "Pricing depends on your team size, modules and implementation needs. Talk to our team for a tailored quote that fits your budget and growth plans.",
  },
  {
    question: "Is my data safe with your platform?",
    answer:
      "Yes. SILO uses bank-level encryption, role-based access control and audited infrastructure to keep your data secure and compliant.",
  },
  {
    question: "Can I migrate from another system?",
    answer:
      "Our implementation team helps you migrate from spreadsheets or legacy ERPs with minimal downtime and clear data mapping.",
  },
  {
    question: "Do you offer training?",
    answer:
      "We provide onboarding sessions, documentation and ongoing support so your team can get value from SILO quickly.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-12 items-start">
        {/* Left column */}
        <div className="space-y-8 max-w-xl">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold">
            FAQs
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Frequently Asked
              <br /> Questions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              We know choosing the right ERP software can raise a lot of questions. That&apos;s why we&apos;ve put together
              answers to the most common ones.
            </p>
          </div>

          {/* CTA card */}
          <div className="inline-flex items-center justify-between gap-4 rounded-full bg-foreground text-background pr-3 pl-6 py-3 max-w-xs">
            <div>
              <div className="text-sm font-medium">Need something specific?</div>
              <div className="text-xs opacity-80">Get a tailored quote for your team.</div>
            </div>
            <button
              className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #57D6D3, #7CF5CD)",
                color: "#03312F",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right column - FAQ list */}
        <div className="bg-card border border-border rounded-3xl divide-y divide-border overflow-hidden shadow-sm">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={faq.question}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                    {index + 1}. {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #57D6D3, #7CF5CD)",
                      color: "#03312F",
                    }}
                  >
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${isActive ? "rotate-90" : ""}`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-5 text-sm text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

 
