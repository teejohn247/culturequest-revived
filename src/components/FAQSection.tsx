import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is SILO and how does it work?",
    answer: "SILO is an all-in-one business management platform that combines HR, CRM, AI analytics, and accounting tools. It works by integrating all your business operations into a single dashboard, allowing you to manage employees, customers, finances, and data insights from one place."
  },
  {
    question: "How long does it take to set up SILO for my business?",
    answer: "Most businesses are up and running within 24-48 hours. Our onboarding team provides personalized setup assistance, data migration support, and training to ensure a smooth transition. Complex enterprise setups may take 1-2 weeks."
  },
  {
    question: "Is my data secure with SILO?",
    answer: "Absolutely. We use enterprise-grade encryption, SOC 2 Type II compliance, and regular security audits. Your data is stored in secure cloud infrastructure with automatic backups and disaster recovery protocols."
  },
  {
    question: "Can I integrate SILO with my existing tools?",
    answer: "Yes! SILO offers 100+ native integrations with popular tools like Slack, Google Workspace, Microsoft 365, Salesforce, QuickBooks, and more. We also provide API access for custom integrations."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support via chat, email, and phone. Enterprise customers get a dedicated account manager. We also offer extensive documentation, video tutorials, and a community forum."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required. You can also request a personalized demo from our sales team."
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Everything you need to know about SILO. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
