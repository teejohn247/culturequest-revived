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
    quote: "ZoomSphere is a great tool that works well in our day-to-day teamwork and with our clients. The intuitive interface, efficient support, and the possibilities provided have definitely improved our agency work and workflow with clients.",
    author: "Filip Kulisz",
    role: "Social Media Business Owner",
    company: "Whites Agency",
    avatar: "/testi-1.png",
  },
  {
    quote: "Since working with ZoomSphere, we have found a partner who is flexible enough to personalize their services to our unique needs. I can attest that they play a significant role in the success of our social department.",
    author: "Gábor Kéri",
    role: "Digital Managing Partner",
    company: "Positive Adamsky",
    avatar: "/testi-2.png",
  },
  {
    quote: "For many years, ZoomSphere has been our greatest asset in managing the content of our 50+ social profiles for our clients. Their support team is world-class!",
    author: "Peter Lukacsi",
    role: "Marketing Strategy Advisor",
    company: "Kraftwork",
    avatar: "/testi-3.png",
  },
  {
    quote: "ZoomSphere is essential for managing our social media. I love the clarity, intuitive interface, and the ability to schedule one post across platforms, customize it, and use the AI copywriter. It's also great for team collaboration.",
    author: "Andrea Janovcová",
    role: "Senior Marketing Manager",
    company: "CineStar",
    avatar: "/testi-4.png",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-card rounded-2xl p-6 shadow-sm border border-border min-w-[340px] max-w-[400px] flex-shrink-0">
    <p className="text-foreground text-sm leading-relaxed mb-6">
      "{testimonial.quote}"
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
    <section className="py-24 relative overflow-hidden bg-card">
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