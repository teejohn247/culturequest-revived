import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Engage with customers",
    description: "Contextual customer engagement in real-time, across every channel, to ensure rich experiences.",
    link: "/features",
  },
  {
    title: "Automate workflows",
    description: "Streamline repetitive tasks and boost productivity with intelligent automation across your organization.",
    link: "/features",
  },
  {
    title: "Unified analytics",
    description: "Get actionable insights from all your data sources in one powerful, intuitive dashboard.",
    link: "/features",
  },
];

const CustomerEngagementSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFF2E0' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Content */}
          <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {slides[currentSlide].description}
                    </p>
                    <Link
                      to={slides[currentSlide].link}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Visual Cards */}
              <div className="relative h-[300px] md:h-[350px] bg-gradient-to-br from-sky-100 via-blue-50 to-purple-100 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-6"
                  >
                    {/* Best time to contact card */}
                    <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                      <p className="text-xs text-muted-foreground">Best time to Contact - Today</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-semibold">06:30 PM</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-muted-foreground">in 36 minutes</span>
                      </div>
                    </div>

                    {/* Caller card */}
                    <div className="absolute top-20 left-6 bg-white rounded-xl p-4 shadow-lg w-48">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-200 to-amber-300 mb-3 flex items-center justify-center">
                        <span className="text-2xl">👩</span>
                      </div>
                      <p className="font-semibold text-center">Melinda Anderson</p>
                      <p className="text-sm text-muted-foreground text-center">Calling..</p>
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 bg-red-500 text-white text-sm py-1.5 rounded-lg">Decline</button>
                        <button className="flex-1 bg-green-500 text-white text-sm py-1.5 rounded-lg">Answer</button>
                      </div>
                    </div>

                    {/* Customer Segmentation card */}
                    <div className="absolute top-32 right-4 bg-white rounded-xl p-3 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">Customer Segmentation</span>
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div>
                          <p>Champion</p>
                          <p>Segment Label</p>
                        </div>
                        <div className="text-right">
                          <p>Mar, 2022</p>
                          <p>Recency 3</p>
                        </div>
                      </div>
                    </div>

                    {/* Social card */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl p-3 shadow-lg w-64">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                          <span>👨</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Hendry A</span>
                            <button className="text-xs text-primary border border-primary rounded px-2 py-0.5 flex items-center gap-1">
                              <Plus className="w-3 h-3" /> Add to CRM
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground">@hendrya</p>
                        </div>
                      </div>
                      <p className="text-sm mt-2">Just ordered a new laptop from <span className="text-primary">@ZylkerInc</span> :)</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerEngagementSection;
