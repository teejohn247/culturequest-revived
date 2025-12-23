import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Switching to SILO was a game-changer for us. Their platform streamlined our financial processes, saving us countless hours each month.",
    author: "William Ashford",
    role: "Product Manager",
    company: "Google",
    avatar: "/testi-1.png",
  },
  {
    quote: "The security features offered give us peace of mind knowing that our customer data is protected.",
    author: "Scarlett Palmer",
    role: "Marketing Director",
    company: "Adobe",
    avatar: "/testi-2.png",
  },
  {
    quote: "The integration process was seamless and we were up and running in no time.",
    author: "Ruby Hayes",
    role: "IT Director",
    company: "Mailchimp",
    avatar: "/testi-3.png",
  },
  {
    quote: "The customer support has been outstanding. Whenever we have questions or need assistance, their team is quick to respond and incredibly helpful.",
    author: "Leila Smith",
    role: "Account Executive",
    company: "Notion",
    avatar: "/testi-4.png",
  },
  {
    quote: "We've seen a significant improvement in our compliance management since the switch.",
    author: "Marlon Wright",
    role: "Product Manager",
    company: "Slack",
    avatar: "/testi-5.png",
  },
  {
    quote: "I can't recommend SILO enough! Their lending solutions have made it easier for us to manage customer applications and approvals, resulting in faster turnaround times and happier clients.",
    author: "Samuel Kingsley",
    role: "Financial Analyst",
    company: "Squarespace",
    avatar: "/testi-6.png",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className=" rounded-2xl p-6 shadow-sm border border-border min-w-[320px] max-w-[380px] flex-shrink-0">
    <p className="text-foreground text-sm leading-relaxed mb-6">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
        {testimonial.avatar ? (
          <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-xs font-medium">
            {testimonial.author.split(" ").map(n => n[0]).join("")}
          </span>
        )}
      </div>
      <div className="flex-1">
        <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
        <p className="text-muted-foreground text-xs">{testimonial.role}, {testimonial.company}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <Star className="w-4 h-4 text-primary" />
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#FFF] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
 <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-white text-xs font-semibold uppercase tracking-wider mb-6"
          style={{backgroundColor: '#58d4d2', color: '#000000', padding: '10px 20px'}}>
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We take pride in delivering exceptional solutions that deliver great results. But don't just take our word for it.
          </p>
        </motion.div>

        {/* Single Row Testimonials - Row 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide mb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Single Row Testimonials - Row 2 */}
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.slice(2, 6).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div> */}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-foreground rounded-full text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
          style={{borderRadius: '.4rem'}}>
            See all Reviews
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
