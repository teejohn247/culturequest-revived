import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Shirt, Brain, PersonStanding, Home, Maximize2, Smile, Heart, CircleDot } from "lucide-react";
import { useRef } from "react";

const categoryIcons = [
  { icon: MessageSquare, color: "bg-amber-400" },
  { icon: Shirt, color: "bg-purple-300" },
  { icon: Brain, color: "bg-teal-500" },
  { icon: PersonStanding, color: "bg-blue-500" },
  { icon: Home, color: "bg-teal-700" },
  { icon: Maximize2, color: "bg-sky-400" },
  { icon: Smile, color: "bg-violet-400" },
  { icon: Heart, color: "bg-emerald-400" },
  { icon: CircleDot, color: "bg-orange-500" },
];

const questions = [
  {
    question: "How often do you feel stressed?",
    options: ["Very Often", "Often", "Sometimes", "Rarely", "Never"],
    selected: 3,
    progressColor: "bg-coral",
  },
  {
    question: "How often do you feel in control of things at work?",
    options: ["Very Often", "Often", "Sometimes", "Rarely", "Never"],
    selected: 2,
    progressColor: "bg-amber-400",
  },
  {
    question: "How often do you feel frustrated by unexpected changes in your work?",
    options: ["Very Often", "Often", "Sometimes", "Rarely", "Never"],
    selected: 2,
    progressColor: "bg-amber-500",
  },
];

const DashboardShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Left cards: start from -100px, come to 0, then go to -100px
  const leftX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [-100, -50, 0, -50, -100]);
  // Right cards: start from 100px, come to 0, then go to 100px
  const rightX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [100, 50, 0, 50, 100]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background overflow-hidden relative">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Platform Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Comprehensive Culture Analytics
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main dashboard layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left column - Category + Survey */}
            <motion.div 
              className="lg:col-span-4 space-y-6"
              style={{ x: leftX }}
            >
              {/* Category Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Category</h3>
                <div className="grid grid-cols-3 gap-3">
                  {categoryIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className={`${item.color} rounded-xl p-4 flex items-center justify-center aspect-square`}
                    >
                      <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Survey Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-500 rounded-xl p-3">
                    <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Stress Management and Workload
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  Explore your employees' mental health with this survey designed
                </p>

                {questions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-5">
                    <p className="text-sm font-medium text-foreground mb-2">
                      {qIndex + 1}. {q.question}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {q.options.map((option, oIndex) => (
                        <button
                          key={oIndex}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            oIndex === q.selected
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground hover:bg-muted"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <div className={`h-1 rounded-full ${q.progressColor}`} />
                  </div>
                ))}

                <button className="w-full bg-foreground text-background py-3 rounded-xl font-medium mt-2 hover:opacity-90 transition-opacity">
                  Send
                </button>
              </motion.div>
            </motion.div>

            {/* Center - Analyze Circle with curved lines */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 flex items-center justify-center py-8 lg:py-0 lg:min-h-[600px] relative"
            >
              {/* SVG for curved connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid meet">
                {/* Left curves - green dots */}
                {/* Upper left curve */}
                <motion.path
                  d="M 40 220 Q 120 220 170 300"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                {/* Lower left curve */}
                <motion.path
                  d="M 80 420 Q 130 400 170 340"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                
                {/* Right curves - blue dots */}
                {/* Upper right curve going up */}
                <motion.path
                  d="M 230 280 Q 280 200 360 120"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                {/* Middle right curve */}
                <motion.path
                  d="M 230 300 Q 280 300 340 260"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.55 }}
                />
                {/* Lower right curve going down */}
                <motion.path
                  d="M 230 320 Q 280 400 340 480"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />

                {/* Green dots on left */}
                <motion.circle
                  cx="40"
                  cy="220"
                  r="6"
                  fill="#4ADE80"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                />
                <motion.circle
                  cx="80"
                  cy="420"
                  r="6"
                  fill="#4ADE80"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                />
                {/* Green dot near center left */}
                <motion.circle
                  cx="170"
                  cy="320"
                  r="6"
                  fill="#4ADE80"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.85 }}
                />

                {/* Blue dots on right */}
                <motion.circle
                  cx="360"
                  cy="120"
                  r="6"
                  fill="#60A5FA"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                />
                <motion.circle
                  cx="340"
                  cy="260"
                  r="6"
                  fill="#60A5FA"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.85 }}
                />
                {/* Blue dot near center right */}
                <motion.circle
                  cx="230"
                  cy="300"
                  r="6"
                  fill="#60A5FA"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                />
                <motion.circle
                  cx="340"
                  cy="480"
                  r="6"
                  fill="#60A5FA"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.95 }}
                />
              </svg>

              {/* Main analyze box */}
              <div className="relative z-10">
                <div className="w-40 h-40 rounded-3xl bg-card border-2 border-border flex items-center justify-center shadow-card">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-300 via-purple-200 to-pink-200 flex items-center justify-center shadow-lg">
                    <span className="text-foreground font-semibold text-lg">Analyze</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Score + Progress */}
            <motion.div 
              className="lg:col-span-4 space-y-6"
              style={{ x: rightX }}
            >
              {/* Culture Score Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground text-center mb-6">
                  Culture Score
                </h3>
                <div className="relative w-48 h-48 mx-auto">
                  {/* Background circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="16"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#4A90D9"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeDasharray={502}
                      initial={{ strokeDashoffset: 502 }}
                      whileInView={{ strokeDashoffset: 502 * 0.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="text-5xl font-bold text-foreground"
                    >
                      70
                    </motion.span>
                    <span className="text-muted-foreground text-sm">Score</span>
                  </div>
                </div>

                {/* Summary card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6 bg-secondary rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary">✦</span>
                    <span className="text-sm font-medium text-muted-foreground">Summary</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Good Mental Health</h4>
                  <p className="text-xs text-muted-foreground">
                    The survey highlighted the growing need for accessible mental health services, with 71% calling for more affordable therapy options
                  </p>
                </motion.div>
              </motion.div>

              {/* Progress Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">Progress</h3>
                  <button className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:bg-secondary transition-colors">
                    All Categories
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-emerald-500 text-sm font-medium">↗ +3.4%</span>
                  <span className="text-muted-foreground text-sm">from last month</span>
                </div>

                {/* Chart */}
                <div className="relative h-32">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="400" y2="25" stroke="hsl(var(--border))" strokeDasharray="4" strokeWidth="1" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="hsl(var(--border))" strokeDasharray="4" strokeWidth="1" />
                    
                    {/* Area fill */}
                    <motion.path
                      d="M0,80 L33,70 L66,40 L100,45 L133,30 L166,50 L200,35 L233,40 L266,45 L300,55 L333,70 L366,100 L400,100 L400,100 L0,100 Z"
                      fill="hsl(var(--primary) / 0.1)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    
                    {/* Line */}
                    <motion.path
                      d="M0,80 L33,70 L66,40 L100,45 L133,30 L166,50 L200,35 L233,40 L266,45 L300,55 L333,70 L366,100"
                      fill="none"
                      stroke="#4A90D9"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Data points */}
                    {[
                      { x: 0, y: 80 }, { x: 33, y: 70 }, { x: 66, y: 40 }, { x: 100, y: 45 },
                      { x: 133, y: 30 }, { x: 166, y: 50 }, { x: 200, y: 35 }, { x: 233, y: 40 },
                      { x: 266, y: 45 }, { x: 300, y: 55 }, { x: 333, y: 70 }, { x: 366, y: 100 }
                    ].map((point, index) => (
                      <motion.circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#4A90D9"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Month labels */}
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
