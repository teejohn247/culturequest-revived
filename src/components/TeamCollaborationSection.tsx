import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: "teamspaces",
    label: "Teamspaces",
    description: "Set up a dedicated space for each team. Let teams work with the data they need and nothing else.",
  },
  {
    id: "module-creation",
    label: "AI Module Creation",
    description: "Create custom modules effortlessly with AI assistance. Build exactly what your teams need.",
  },
  {
    id: "custom-design",
    label: "Custom Design",
    description: "Design interfaces tailored to your workflow. Every team gets the experience they deserve.",
  },
];

const TeamCollaborationSection = () => {
  const [activeTab, setActiveTab] = useState("teamspaces");

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#fcf8f2' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Teams that work together,</span>
            <br />
            <span className="text-primary">win together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Multiple teams come together with sales to close deals. With Silo ERP for Everyone, you can build unique, collaborative spaces for each team — all with some AI assistance, of course. Start winning more, together.
          </p>
          <Link
            to="/features"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Learn more
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-foreground text-background"
                  : "bg-white border border-gray-200 text-foreground hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {activeTabData?.description}
          </motion.p>
        </AnimatePresence>

        {/* Video Preview */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <video
              src="/Homepage/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollaborationSection;
