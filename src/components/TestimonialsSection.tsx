import { motion } from "framer-motion";

interface Testimonial {
  company: string;
  companyLogo?: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    company: "VICA DANMARK",
    quote: "Culturequest has given us the insights and tools to actively improve employee well-being. It has strengthened our focus, created more open dialogue, and made our initiatives far more effective.",
    author: "Lone Spangsberg",
    role: "CFO - VICA Danmark A/S",
  },
  {
    company: "Concens",
    quote: "Previously, our homemade surveys were subjective and time-consuming – Culturequest has made the process both easier and more professional. We now have a solid platform to build on – and surveys developed by professionals give us a more accurate picture of the temperature in our organization.",
    author: "René Lynge",
    role: "CEO - Concens",
  },
  {
    company: "CamVision",
    quote: "We've been very pleased with CultureQuest. They guided us safely through our APV (workplace assessment) and delivered valuable insights into our culture. Open, constructive conversations gave us fresh perspectives that challenged and inspired action. The software is intuitive, making data collection and follow-up simple. Overall, CultureQuest helped us uncover insights we wouldn't have reached on our own.",
    author: "Joy Kolby",
    role: "Head of Administration - Camvision",
  },
  {
    company: "MARIA BLACK",
    quote: "A user-friendly, accessible tool that could be tailored to our specific needs. Their wide range of categories and questions made it much easier for us to focus on the areas that mattered most, such as general well-being, motivation, leadership feedback, and skill development. The insights and comments we received have given us a strong foundation to implement new initiatives that support both individual and collective growth.",
    author: "Team Lead",
    role: "MARIA BLACK",
  },
  {
    company: "VICA DANMARK",
    quote: "Culturequest has given us the insights and tools to actively improve employee well-being. It has strengthened our focus, created more open dialogue, and made our initiatives far more effective.",
    author: "Lone Spangsberg",
    role: "CFO - VICA Danmark A/S",
  },
  {
    company: "Concens",
    quote: "Previously, our homemade surveys were subjective and time-consuming – Culturequest has made the process both easier and more professional.",
    author: "René Lynge",
    role: "CEO - Concens",
  },
];

// Split testimonials into 3 columns
const column1 = [testimonials[0], testimonials[3]];
const column2 = [testimonials[1], testimonials[4]];
const column3 = [testimonials[2], testimonials[5]];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
  <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
    <div className="flex items-center gap-2 mb-4">
      {testimonial.company === "CamVision" ? (
        <span className="text-teal font-semibold text-sm">⚙ CamVision</span>
      ) : testimonial.company === "Concens" ? (
        <span className="font-semibold text-sm text-foreground">concens⊙</span>
      ) : (
        <span className="text-xs font-semibold tracking-wider text-muted-foreground">
          {testimonial.company}
        </span>
      )}
    </div>
    <p className="text-foreground text-sm leading-relaxed mb-6">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-xs">
          {testimonial.author.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
    </div>
  </div>
);

const AnimatedColumn = ({ 
  testimonials, 
  direction, 
  duration 
}: { 
  testimonials: Testimonial[]; 
  direction: "up" | "down"; 
  duration: number;
}) => {
  const yFrom = direction === "up" ? 0 : -100;
  const yTo = direction === "up" ? -100 : 0;

  return (
    <div className="relative overflow-hidden h-[600px]">
      <motion.div
        animate={{ y: [`${yFrom}%`, `${yTo}%`] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="space-y-6"
      >
        {/* Duplicate testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Purple/Pink/Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500" />
      
      {/* Diagonal edge at top - slanted from top-left to right */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1440 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 0H1440V0L0 128V0Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" style={{marginTop: '100px'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 max-w-2xl">
            What other users are saying
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-xl">
            Join the growing number of users and start measuring your company culture.
          </p>
        </motion.div>

        {/* Testimonials columns with vertical animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 - moves up */}
          <AnimatedColumn testimonials={column1} direction="up" duration={25} />
          
          {/* Column 2 - moves down */}
          <div className="hidden md:block">
            <AnimatedColumn testimonials={column2} direction="down" duration={30} />
          </div>
          
          {/* Column 3 - moves up */}
          <div className="hidden lg:block">
            <AnimatedColumn testimonials={column3} direction="up" duration={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
