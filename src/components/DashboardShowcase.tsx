import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Briefcase, Brain, BarChart3, TrendingUp, Zap, Shield, Database, Sparkles } from "lucide-react";
import { useRef } from "react";

const siloModules = [
  { icon: Users, color: "bg-gradient-to-br from-[#001305] to-[#007C21]", label: "HR Management" },
  { icon: Briefcase, color: "bg-gradient-to-br from-[#007C21] to-[#89F335]", label: "CRM" },
  { icon: Brain, color: "bg-gradient-to-br from-[#89F335] to-[#007C21]", label: "AI Analytics" },
  { icon: BarChart3, color: "bg-gradient-to-br from-[#001305] to-[#007C21]", label: "Accounting" },
  { icon: TrendingUp, color: "bg-gradient-to-br from-[#007C21] to-[#89F335]", label: "Reporting" },
  { icon: Zap, color: "bg-gradient-to-br from-[#89F335] to-[#001305]", label: "Automation" },
  { icon: Shield, color: "bg-gradient-to-br from-[#001305] to-[#89F335]", label: "Security" },
  { icon: Database, color: "bg-gradient-to-br from-[#007C21] to-[#89F335]", label: "Data Management" },
  { icon: Sparkles, color: "bg-gradient-to-br from-[#001305] to-[#007C21]", label: "Insights" },
];

const features = [
  {
    title: "Instant Data Processing",
    description: "90% increase in productivity and efficiency",
    metric: "90%",
    color: "from-[#001305] to-[#007C21]",
  },
  {
    title: "Natural Language Interface",
    description: "Zero learning curve, accessible to all skill levels",
    metric: "100%",
    color: "from-[#007C21] to-[#89F335]",
  },
  {
    title: "Predictive Analytics",
    description: "Future trend forecasting and risk assessment",
    metric: "85%",
    color: "from-[#89F335] to-[#001305]",
  },
];

const DashboardShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Left cards: start from -100px, come to 0, then go to -100px
  const leftX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [-200, -520, 0, -100, -250]);
  // Right cards: start from 100px, come to 0, then go to 100px
  // const rightX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [100, 50, 0, 50, 100]);
  const rightX = useTransform(scrollYProgress,  [0, 0.3, 0.5, 0.7, 1], [-200, 520, 0, 100, 250]);


  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background overflow-hidden relative">
      {/* Dotted background pattern with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
            </pattern>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--soft-green))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--soft-green))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--soft-blue))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
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
            SILO Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            All-In-One ERP Solution
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Transform raw data into valuable insights. Streamline your internal processes and build improved operational capacity.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main dashboard layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left column - Category + Survey */}
            <motion.div 
              className="lg:col-span-4 space-y-6"
              style={{ x: leftX }}
            >
              {/* SILO Modules Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Platform Modules</h3>
                <div className="grid grid-cols-3 gap-3">
                  {siloModules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className={`${module.color} rounded-xl p-4 flex flex-col items-center justify-center aspect-square group hover:scale-105 transition-transform`}
                    >
                      <module.icon className="w-6 h-6 text-white mb-1" strokeWidth={1.5} />
                      <span className="text-[10px] text-white font-medium text-center leading-tight">{module.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-[#001305] via-[#007C21] to-[#89F335] rounded-xl p-3">
                    <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Key Features & Benefits
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  AI-driven platform that democratizes operations management
                </p>

                {features.map((feature, fIndex) => (
                  <div key={fIndex} className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-foreground">
                        {feature.title}
                      </p>
                      <span className={`text-xs font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.metric}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {feature.description}
                    </p>
                    <div className={`h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                  </div>
                ))}

                <button className="w-full bg-gradient-to-r from-[#001305] via-[#007C21] to-[#89F335] text-white py-3 rounded-xl font-medium mt-2 hover:opacity-90 transition-opacity shadow-lg">
                  Explore Platform
                </button>
              </motion.div>
            </motion.div>

            {/* Center - Analyze Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 flex items-center justify-center py-8 lg:py-0 lg:min-h-[600px] relative"
            >
              <motion.img
                src="/analyse.png"
                alt="Analyze"
                className="w-full h-auto max-w-md object-contain"
                style={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>

            {/* Right column - Score + Progress */}
            <motion.div 
              className="lg:col-span-4 space-y-6"
              style={{ x: rightX }}
            >
              {/* Performance Metrics Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground text-center mb-6">
                  Platform Performance
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
                    <defs>
                      <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#001305" />
                        <stop offset="50%" stopColor="#007C21" />
                        <stop offset="100%" stopColor="#89F335" />
                      </linearGradient>
                    </defs>
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="url(#performanceGradient)"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeDasharray={502}
                      initial={{ strokeDashoffset: 502 }}
                      whileInView={{ strokeDashoffset: 502 * 0.23 }}
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
                      className="text-5xl font-bold bg-gradient-to-r from-[#001305] via-[#007C21] to-[#89F335] bg-clip-text text-transparent"
                    >
                      77
                    </motion.span>
                    <span className="text-muted-foreground text-sm">Efficiency</span>
                  </div>
                </div>

                {/* Summary card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6 bg-gradient-to-br from-[#001305]/10 via-[#007C21]/10 to-[#89F335]/10 dark:from-[#001305]/20 dark:via-[#007C21]/20 dark:to-[#89F335]/20 rounded-xl p-4 border border-[#007C21]/30 dark:border-[#007C21]/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#007C21]">✦</span>
                    <span className="text-sm font-medium text-muted-foreground">Key Insight</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Optimized Operations</h4>
                  <p className="text-xs text-muted-foreground">
                    SILO's AI-powered analytics have enabled businesses to achieve 90% productivity increase with automated data processing and real-time insights
                  </p>
                </motion.div>
              </motion.div>

              {/* Growth Metrics Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">Growth Metrics</h3>
                  <button className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:bg-secondary transition-colors">
                    All Modules
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-medium bg-gradient-to-r from-[#001305] via-[#007C21] to-[#89F335] bg-clip-text text-transparent">↗ +13.8% CAGR</span>
                  <span className="text-muted-foreground text-sm">projected growth</span>
                </div>

                {/* Chart */}
                <div className="relative h-32">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#001305" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#007C21" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#89F335" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#001305" />
                        <stop offset="50%" stopColor="#007C21" />
                        <stop offset="100%" stopColor="#89F335" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="400" y2="25" stroke="hsl(var(--border))" strokeDasharray="4" strokeWidth="1" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="hsl(var(--border))" strokeDasharray="4" strokeWidth="1" />
                    
                    {/* Area fill */}
                    <motion.path
                      d="M0,80 L33,70 L66,40 L100,45 L133,30 L166,50 L200,35 L233,40 L266,45 L300,55 L333,70 L366,100 L400,100 L400,100 L0,100 Z"
                      fill="url(#chartGradient)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    
                    {/* Line */}
                    <motion.path
                      d="M0,80 L33,70 L66,40 L100,45 L133,30 L166,50 L200,35 L233,40 L266,45 L300,55 L333,70 L366,100"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="2.5"
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
                        r="4.5"
                        fill="url(#lineGradient)"
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
