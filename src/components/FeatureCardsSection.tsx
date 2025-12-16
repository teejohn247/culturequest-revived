import { motion } from "framer-motion";
import { Brain, Users, MessageSquare, Zap, Shield, Database, TrendingUp, BarChart3, ArrowRight, Bot, RotateCw } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  visualType: "automation" | "hr" | "chatbot" | "ai" | "backup" | "crm";
  color: "purple" | "blue" | "pink";
}

const featureCards: FeatureCard[] = [
  {
    title: "AI-Powered Automation",
    description: "boost productivity with AI",
    icon: Brain,
    visualType: "automation",
    color: "purple",
  },
  {
    title: "Human Resources Management",
    description: "Manage your workforce effortlessly. Boost productivity, reduce complexity, and empower your teams to achieve more.",
    icon: Users,
    visualType: "hr",
    color: "blue",
  },
  {
    title: "AI-Powered Chatbots",
    description: "Customers AI-powered to chatbots – free forever.",
    icon: MessageSquare,
    visualType: "chatbot",
    color: "pink",
  },
  {
    title: "Cutting-edge AI Features",
    description: "Cutting-edge AI features for grow business",
    icon: Zap,
    visualType: "ai",
    color: "purple",
  },
  {
    title: "Relationship Management",
    description: "Build lasting relationships and close more deals",
    icon: TrendingUp,
    visualType: "crm",
    color: "blue",
  },
  {
    title: "Auto Backup and Recovery",
    description: "automated backups",
    icon: Database,
    visualType: "backup",
    color: "pink",
  },
];

const FeatureCardsSection = () => {
  const getVisualContent = (visualType: string, color: string) => {
    const colorClasses = {
      purple: "from-[#6366F1] to-[#383DA0]",
      blue: "from-[#383DA0] to-[#AB4FCB]",
      pink: "from-[#AB4FCB] to-[#6366F1]",
    };

    switch (visualType) {
      case "automation":
        return (
          <div className="relative h-36 flex flex-col items-center justify-center">
            {/* Light green overlapping circles */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-28">
              <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-[#86EFAC] opacity-40" />
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-[#86EFAC] opacity-30" />
            </div>
            {/* Icons below */}
            <div className="flex gap-3 mt-20 relative z-10">
              <Brain className="w-5 h-5 text-foreground" />
              <div className="w-5 h-5 rounded-full border-2 border-foreground" />
              <Bot className="w-5 h-5 text-foreground" />
            </div>
          </div>
        );
      case "hr":
        return (
          <div className="relative h-36 bg-white rounded-lg p-3 border border-border">
            {/* Title */}
            <div className="mb-1.5">
              <div className="text-xs font-semibold text-foreground">2h 20m +</div>
              <div className="text-[10px] text-muted-foreground">Average time you spent per day</div>
            </div>
            {/* Bar Chart */}
            <div className="flex items-end gap-0.5 h-16 mb-1.5">
              {["M", "T", "W", "T", "F", "S", "Today"].map((day, i) => (
                <div key={day} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full rounded-t ${
                      i === 0 || i === 5 || i === 6
                        ? "bg-[#86EFAC] h-6"
                        : "bg-[#4B5563] h-10"
                    }`}
                  />
                  <span className="text-[10px] text-muted-foreground mt-0.5">{day}</span>
                </div>
              ))}
            </div>
            {/* Icons */}
            <div className="flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5 text-muted-foreground" />
                <span className="text-muted-foreground">Monthly Increment</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart3 className="w-2.5 h-2.5 text-muted-foreground" />
                <span className="text-muted-foreground">Yearly Increment</span>
              </div>
            </div>
          </div>
        );
      case "chatbot":
        return (
          <div className="relative h-36 space-y-1.5">
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1 bg-[#10B981] rounded-lg px-2 py-1.5">
                <p className="text-[11px] text-white">Hello, how are you?</p>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="flex-1 bg-[#E5E7EB] rounded-lg px-2 py-1.5">
                <p className="text-[11px] text-foreground">Fine, i need helps</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                <Users className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1 bg-[#10B981] rounded-lg px-2 py-1.5">
                <p className="text-[11px] text-white">Sure, can i do?</p>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="flex-1 bg-[#E5E7EB] rounded-lg px-2 py-1.5">
                <p className="text-[11px] text-foreground">...</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                <Users className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </div>
          </div>
        );
      case "ai":
        return (
          <div className="relative h-36 flex items-center justify-center">
            {/* Central black overlapping circles */}
            <div className="absolute w-14 h-14 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-0 left-0 w-11 h-11 rounded-full bg-foreground opacity-80" />
              <div className="absolute top-1.5 left-1.5 w-11 h-11 rounded-full bg-foreground opacity-60" />
            </div>
            {/* Four circular icons around */}
            <div className="relative z-10 grid grid-cols-2 gap-3">
              <div className="w-9 h-9 rounded-full bg-[#3B82F6] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#8B5CF6] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#3B82F6] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="w-9 h-9 rounded-full bg-[#F97316] flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        );
      case "backup":
        return (
          <div className="relative h-36 flex items-center justify-center gap-5">
            <div className="relative">
              <Database className="w-10 h-10 text-foreground" />
              <RotateCw className="w-7 h-7 text-foreground absolute -top-0.5 -right-0.5" />
            </div>
            <div className="w-6 h-0.5 bg-foreground opacity-30" />
            <div className="relative">
              <Database className="w-10 h-10 text-foreground" />
              <RotateCw className="w-7 h-7 text-foreground absolute -top-0.5 -right-0.5" />
            </div>
          </div>
        );
      case "crm":
        return (
          <div className="relative h-36 flex items-center justify-center">
            {/* No visual, just text content - but maintain height */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {featureCards.map((card, index) => {
            const colorClasses = {
              purple: "from-[#6366F1] to-[#383DA0]",
              blue: "from-[#383DA0] to-[#AB4FCB]",
              pink: "from-[#AB4FCB] to-[#6366F1]",
            };

            const bgColorClasses = {
              purple: "from-[#6366F1]/5 to-[#6366F1]/0",
              blue: "from-[#383DA0]/5 to-[#383DA0]/0",
              pink: "from-[#AB4FCB]/5 to-[#AB4FCB]/0",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* Visual Content */}
                  <div className="mb-4 flex-shrink-0">
                    {getVisualContent(card.visualType, card.color)}
                  </div>

                  {/* Title and Description */}
                  <div className="flex-grow flex flex-col justify-end">
                    <h3 className="font-semibold text-base text-foreground mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;

