import { motion } from "framer-motion";
import { ArrowRight, Workflow, MessageCircle, FolderOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Workflow,
    title: "Workflow Manager",
    description:
      "Coordinate and assign tasks within your team or departments. The Workflow Manager is suitable for any project, such as content planning, roadmaps, bug tracking, and client ideas.",
    color: "#FF7B6B",
    link: "/features",
    images: ["/Homepage/Hr Management.jpg"],
  },
  {
    icon: MessageCircle,
    title: "Team Chat",
    description:
      "Get ready for lightning-fast approvals and outstanding teamwork with your own team and client chat. Whether it's group discussions or direct messages, stay connected at all times!",
    color: "#40E0D0",
    link: "/features",
    images: ["/Homepage/CRM.jpg"],
  },
  {
    icon: FolderOpen,
    title: "Files & Storage",
    description:
      "Effortlessly organize all your work materials in one centralized cloud storage system! From content and brand guidelines to reports and presentations, Files keeps everything accessible.",
    color: "#FFC800",
    link: "/features",
    images: ["/Homepage/Accounting.jpg"],
  },
  {
    icon: FileText,
    title: "Notes & Docs",
    description:
      "Explore endless possibilities: layouts, formats, images, and to-do lists. Collaborate effortlessly and share notes with your team, all without the need for any external tools.",
    color: "#9B59B6",
    link: "/features",
    images: ["/Homepage/Ai Analytics.jpg"],
  },
];

const TeamworkSolutionsSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#40E0D0", color: "#000" }}
          >
            #Teamwork
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Explore our solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            With SILO, teamwork is not just a concept. It is the key to a happier team, 
            high-quality work, outstanding results, satisfied clients, and a thriving business.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${solution.color}20` }}
                >
                  <solution.icon className="w-7 h-7" style={{ color: solution.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Preview Image */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src={solution.images[0]}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <Link
                to={solution.link}
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
              >
                Discover more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamworkSolutionsSection;