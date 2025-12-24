import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "SILO is a great tool that works well in our day-to-day teamwork and with our clients. The intuitive interface, efficient support, and the possibilities provided have definitely improved our agency work and workflow.",
    author: "William Ashford",
    role: "Product Manager",
    company: "TechStart Inc",
    avatar: "/testi-1.png",
  },
  {
    quote: "Since working with SILO, we have found a partner who is flexible enough to personalize their services to our unique needs. They play a significant role in the success of our operations department.",
    author: "Scarlett Palmer",
    role: "Operations Director",
    company: "ManuCorp",
    avatar: "/testi-2.png",
  },
  {
    quote: "For many years, SILO has been our greatest asset in managing business operations. From HR to Finance, everything is in one place. Their support team is world-class!",
    author: "Ruby Hayes",
    role: "IT Director",
    company: "Global Services",
    avatar: "/testi-3.png",
  },
  {
    quote: "SILO is essential for managing our business. I love the clarity, intuitive interface, and the ability to manage multiple departments from one dashboard. The AI analytics are a game changer.",
    author: "Leila Smith",
    role: "Senior Manager",
    company: "RetailPro",
    avatar: "/testi-4.png",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-card rounded-2xl p-6 shadow-sm border border-border min-w-[340px] max-w-[400px] flex-shrink-0">
    <p className="text-foreground text-sm leading-relaxed mb-6">
      &ldquo;{testimonial.quote}&rdquo;
    </p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
        {testimonial.avatar ? (
          <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm font-medium">
            {testimonial.author.split(" ").map(n => n[0]).join("")}
          </span>
        )}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
        <p className="text-muted-foreground text-xs">{testimonial.company}, {testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-primary text-foreground">
            #Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Leading companies have trusted us
          </h2>
        </motion.div>

        {/* Testimonials Row */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;