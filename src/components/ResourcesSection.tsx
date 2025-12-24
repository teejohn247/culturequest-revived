import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = ["Blog posts", "Tips & Tricks", "Video Tutorials"];

const resources = {
  "Blog posts": [
    {
      title: "Performance Reporting for Busy Teams: What Your Clients Actually Want to See",
      category: "Blog",
      image: "/Homepage/Hr Management.jpg",
    },
    {
      title: "Weekly Social Media Scoop: TikTok, IGTV, Threads & More Go All-In on Engagement",
      category: "Blog",
      image: "/Homepage/CRM.jpg",
    },
    {
      title: "How to Create Snackable Content for Social Media: Trends, Tactics, and Tools",
      category: "Blog",
      image: "/Homepage/Accounting.jpg",
    },
  ],
  "Tips & Tricks": [
    {
      title: "Worst Brand Collabs in Marketing History | Pepsi, McDonald's & More",
      category: "Tips & Tricks",
      image: "/Homepage/Ai Analytics.jpg",
    },
    {
      title: "How to Handle a TikTok Crisis | Watch This Before You Get Cancelled",
      category: "Tips & Tricks",
      image: "/Homepage/Hr Management.jpg",
    },
    {
      title: "5 Influencer Marketing Strategies That Work | Even If Your Brand Isn't Cool Enough",
      category: "Tips & Tricks",
      image: "/Homepage/CRM.jpg",
    },
  ],
  "Video Tutorials": [
    {
      title: "Save Hours with ZoomSphere's Overall Dashboard - Step by Step Guide",
      category: "Video Tutorials",
      image: "/Homepage/Accounting.jpg",
    },
    {
      title: "Complete Guide to Scheduler Features",
      category: "Video Tutorials",
      image: "/Homepage/Ai Analytics.jpg",
    },
    {
      title: "Mastering Team Collaboration in ZoomSphere",
      category: "Video Tutorials",
      image: "/Homepage/Hr Management.jpg",
    },
  ],
};

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState("Blog posts");

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-primary text-foreground"
          >
            #Resources
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Discover our latest news
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-foreground text-background"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {resources[activeTab as keyof typeof resources].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden mb-4 aspect-video bg-muted">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-muted text-muted-foreground"
                >
                  {resource.category}
                </span>
                <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors leading-snug">
                  {resource.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/features"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground rounded-full text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            All Resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;