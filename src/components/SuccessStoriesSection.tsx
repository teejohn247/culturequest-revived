import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessStory {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  tags: string[];
  avatar?: string;
}

const successStories: SuccessStory[] = [
  {
    name: "Ethan Parker",
    role: "CTO",
    company: "NextGen SaaS",
    quote: "This AI completely transformed our lead strategy. Dead-end prospects disappeared, and we're closing deals faster than ever with incredible efficiency!",
    rating: 5,
    tags: ["SaaS", "Lead Conversion", "Sales Boost"],
  },
  {
    name: "Emily Nguyen",
    role: "Operations Manager",
    company: "CloudSync Ltd.",
    quote: "Manual tasks vanished overnight. AI automation saved us countless hours and our CRM seamlessly integrated, revolutionizing our entire workflow process!",
    rating: 5,
    tags: ["Automation", "CRM Integration", "Workflow"],
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    quote: "Generic responses became personalized at scale. Our email outreach improved dramatically, and we saw a 300% increase in engagement rates.",
    rating: 5,
    tags: ["AI", "Email Outreach", "Agency Success"],
  },
  {
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "DataDrive Inc.",
    quote: "The predictive analytics feature helped us identify high-value leads before our competitors. Game-changing technology that pays for itself.",
    rating: 5,
    tags: ["Analytics", "Lead Generation", "ROI"],
  },
  {
    name: "David Martinez",
    role: "Founder",
    company: "StartupHub",
    quote: "From chaos to clarity. SILO's platform gave us the insights we needed to scale from 10 to 100 employees without losing our culture.",
    rating: 5,
    tags: ["Scaling", "Culture", "Growth"],
  },
];

const customerAvatars = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  initials: successStories[i % successStories.length].name
    .split(" ")
    .map((n) => n[0])
    .join(""),
}));

const SuccessStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change testimonial every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextTestimonial]);

  const currentStory = successStories[currentIndex];
  const visibleStories = [
    successStories[(currentIndex - 1 + successStories.length) % successStories.length],
    currentStory,
    successStories[(currentIndex + 1) % successStories.length],
  ];

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #57D6D3, #7CF5CD)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-4">
            OUR CUSTOMERS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our success stories
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Real leaders share how they crushed dead-end leads and boosted sales with our game-changing AI solutions.
          </p>
        </motion.div>

        {/* Customer Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 overflow-x-auto pb-4"
        >
          {customerAvatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 border-2 border-white/30"
            >
              {avatar.initials}
            </div>
          ))}
        </motion.div>

        {/* Testimonial Cards Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-2 overflow-hidden">
            {visibleStories.map((story, index) => {
              const isActive = index === 1;
              return (
                <motion.div
                  key={`${story.name}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, x: index === 0 ? -50 : index === 2 ? 50 : 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 0.95 : 0.85,
                    x: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`flex-shrink-0 w-full md:w-1/3 ${
                    isActive ? "z-10" : "z-0"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300 ${
                      isActive
                        ? "border-2 border-white/50 scale-105"
                        : "border border-white/20 opacity-60"
                    }`}
                  >
                    {/* Profile Picture and Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{
                          background: "linear-gradient(135deg, #57D6D3, #7CF5CD)",
                        }}
                      >
                        {story.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{story.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          {story.role}, {story.company}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < story.rating
                              ? "fill-[#FBBF24] text-[#FBBF24]"
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground font-medium">
                        {story.rating}.0
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-foreground mb-6 leading-relaxed text-sm md:text-base">
                      "{story.quote}"
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium text-foreground border"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(87, 214, 211, 0.12), rgba(124, 245, 205, 0.12))",
                            borderColor: "rgba(87, 214, 211, 0.5)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setIsPaused(true);
                prevTestimonial();
                setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
              }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setIsPaused(true);
                nextTestimonial();
                setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
              }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;

