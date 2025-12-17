import { motion } from "framer-motion";
import { Zap, Users, MessageSquare, Database, BarChart3, RefreshCw, FolderSync } from "lucide-react";

const BentoFeaturesSection = () => {
  return (
    <section className="py-20 bg-[#F5F5F5] relative overflow-hidden">
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #ccc 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* AI Automation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-red-500" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <h3 className="font-bold text-foreground text-lg">AI-Powered Automation</h3>
            <p className="text-muted-foreground text-sm mt-1">boost productivity with AI</p>
          </motion.div>

          {/* Analytics Chart - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm md:col-span-2 lg:row-span-2"
          >
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold text-foreground">2h 20m <span className="text-sm text-muted-foreground">↓</span></h3>
              <p className="text-muted-foreground text-sm">Average time you spent per day</p>
            </div>
            
            {/* Bar Chart */}
            <div className="flex items-end justify-center gap-2 h-32 mt-6">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 bg-[#BFFF00] rounded-t" style={{height: '40px'}} />
                <span className="text-xs text-muted-foreground">M</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 bg-foreground rounded-t" style={{height: '70px'}} />
                <span className="text-xs text-muted-foreground">T</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 bg-[#BFFF00] rounded-t" style={{height: '30px'}} />
                <span className="text-xs text-muted-foreground">W</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 bg-foreground rounded-t" style={{height: '90px'}} />
                <span className="text-xs text-muted-foreground">T</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 bg-foreground rounded-t" style={{height: '60px'}} />
                <span className="text-xs text-muted-foreground">F</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 bg-[#BFFF00] rounded-t" style={{height: '45px'}} />
                <span className="text-xs text-muted-foreground">S</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 bg-[#BFFF00] rounded-t" style={{height: '25px'}} />
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
            </div>

            {/* Side labels */}
            <div className="flex justify-between mt-4">
              <div className="flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 17l4-4 4 4 7-7 3 3" />
                </svg>
                <div>
                  <p className="text-sm font-medium">Monthly</p>
                  <p className="text-xs text-muted-foreground">Increment</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7 7 4-4 7 7" />
                </svg>
                <div>
                  <p className="text-sm font-medium">Yearly</p>
                  <p className="text-xs text-muted-foreground">Increment</p>
                </div>
              </div>
            </div>

            {/* Center Text */}
            <div className="text-center mt-6 pt-4 border-t border-border">
              <h4 className="font-bold text-foreground">Human Resources Management</h4>
              <p className="text-muted-foreground text-sm mt-1">Manage your workforce effortlessly.</p>
              <p className="text-muted-foreground text-xs mt-2">Boost productivity, reduce complexity, and empower your teams to achieve more.</p>
              
              <h4 className="font-bold text-foreground mt-4">Relationship Management</h4>
              <p className="text-muted-foreground text-sm">Build lasting relationships and close more deals</p>
            </div>
          </motion.div>

          {/* AI Chatbot Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2">
                  <p className="text-sm">Hello, how are you?</p>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-end">
                <div className="bg-muted rounded-lg px-3 py-2">
                  <p className="text-sm">Fine, i need helps</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2">
                  <p className="text-sm">Sure, can i do?</p>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-foreground mt-4">Customers AI-powered to chatbots — free forever.</h3>
          </motion.div>

          {/* Cutting-edge AI Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="relative h-32 flex items-center justify-center">
              {/* Center icon */}
              <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center z-10">
                <div className="flex gap-0.5">
                  <div className="w-4 h-4 rounded-full bg-background" />
                  <div className="w-4 h-4 rounded-full bg-background" />
                </div>
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute top-0 left-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <div className="absolute top-0 right-1 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                <Database className="w-5 h-5 text-purple-500" />
              </div>
              <div className="absolute bottom-0 left-1 w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="absolute bottom-0 right-1 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <h3 className="font-bold text-foreground text-center mt-4">Cutting-edge AI features for grow business</h3>
          </motion.div>

          {/* Auto Backup Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex justify-center gap-8 h-28">
              <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center">
                <Database className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center">
                <FolderSync className="w-8 h-8 text-muted-foreground" />
              </div>
            </div>
            <h3 className="font-bold text-foreground text-center">Auto backup and recovery automated backups</h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeaturesSection;
