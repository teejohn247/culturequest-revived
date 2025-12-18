import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % 3);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FFF2E0' }}>
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

        {/* Dashboard Preview with Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={prevImage}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${imageIndex}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Mock Dashboard UI */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="hidden md:block w-48 bg-[#1a1f36] text-white p-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-6 h-6 bg-primary rounded" />
                      <span className="font-medium text-sm">Silo ERP</span>
                    </div>
                    <nav className="space-y-1">
                      {["Home", "Analytics", "Reports", "My Requests", "Service"].map((item, i) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 px-3 py-2 rounded text-sm ${
                            i === 4 ? "bg-white/10" : "hover:bg-white/5"
                          }`}
                        >
                          <div className="w-4 h-4 rounded bg-white/20" />
                          {item}
                        </div>
                      ))}
                      <div className="pt-4 space-y-1">
                        {["HR", "Development", "Operations", "Marketing", "Sales"].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-white/5"
                          >
                            <div className="w-4 h-4 rounded bg-white/20" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">Service Request_1312</span>
                      </div>
                      <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                        Create home service
                      </button>
                    </div>

                    {/* Cards Row */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {/* Customer Details */}
                      <div className="border rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                          <span className="font-medium text-sm">Customer Details</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200 to-amber-300" />
                          <div className="text-sm">
                            <p className="font-medium">Eva Gohar</p>
                            <p className="text-muted-foreground">+1-505-385-7024</p>
                          </div>
                          <div className="ml-auto bg-yellow-400 text-white px-3 py-1 rounded text-xs font-medium">
                            Gold
                          </div>
                        </div>
                      </div>

                      {/* Executive Details */}
                      <div className="border rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full bg-purple-500" />
                          <span className="font-medium text-sm">Executive Details</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-300" />
                          <div className="text-sm">
                            <p className="font-medium">Cade Alexis</p>
                            <p className="text-muted-foreground">Total Services: 218</p>
                          </div>
                          <span className="ml-auto bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                            Executive
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Upcoming Services */}
                    <div className="mb-6">
                      <h4 className="font-medium text-sm mb-3">Upcoming Services</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { type: "Painting", desc: "Painting fences", worker: "Samuel Mercer", rating: 4.5 },
                          { type: "Plumber", desc: "Repair work in kitchen", worker: "Brooklyn Simmons", rating: 4.5 },
                        ].map((service, i) => (
                          <div key={i} className="border rounded-xl p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{service.type}</span>
                              <span className="text-xs text-green-600">14/7/2023</span>
                            </div>
                            <p className="text-sm font-medium mb-2">{service.desc}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gray-200" />
                                <span className="text-xs">{service.worker}</span>
                                <span className="text-xs text-yellow-500">★ {service.rating}</span>
                              </div>
                              <button className="text-xs border px-2 py-1 rounded">Edit</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Team Service Badge */}
            <div className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
              <span className="text-xs">Team</span>
              <span className="font-medium">Service</span>
              <div className="w-8 h-8 rounded-full bg-white/20" />
            </div>
          </div>

          <button
            onClick={nextImage}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamCollaborationSection;
