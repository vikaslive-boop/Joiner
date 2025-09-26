import { motion } from 'motion/react';
import { GlassmorphismCard } from './glassmorphism-card';
import { GlowingButton } from './glowing-button';
import { 
  Download, 
  Smartphone, 
  Settings, 
  Eye, 
  FileText, 
  Phone, 
  PhoneCall,
  Calendar,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const timelineData = [
  {
    day: 1,
    title: "Setup & Installation",
    icon: <Download className="w-8 h-8" />,
    content: (
      <div className="space-y-6">
        <p className="text-white/80 mb-6">Install all essential apps for your DBMCI One journey:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <GlowingButton 
              href="https://play.google.com/store/apps/details?hl=en_US&id=one.dbmci"
              variant="primary"
              size="sm"
            >
              DBMCI One (Android)
            </GlowingButton>
            
            <GlowingButton 
              href="https://apps.apple.com/us/app/dbmci-one-notes-neet-pg-fmge/id6738907848"
              variant="info"
              size="sm"
            >
              DBMCI One Notes (iOS)
            </GlowingButton>
            
            <GlowingButton 
              href="https://apps.apple.com/us/app/egurukul-elearning-by-dbmci/id1491444366"
              variant="success"
              size="sm"
            >
              eGurukul (iOS)
            </GlowingButton>
            
            <GlowingButton 
              href="https://play.google.com/store/apps/details?hl=en_US&id=com.egurukulapp"
              variant="success"
              size="sm"
            >
              eGurukul (Android)
            </GlowingButton>
          </div>
          
          <div className="space-y-3">
            <GlowingButton 
              href="https://play.google.com/store/apps/details?id=com.marrow"
              variant="warning"
              size="sm"
            >
              Marrow (Android)
            </GlowingButton>
            
            <GlowingButton 
              href="https://apps.apple.com/us/app/marrow-for-neet-pg-next/id1226886654"
              variant="warning"
              size="sm"
            >
              Marrow (iOS)
            </GlowingButton>
            
            <GlowingButton 
              href="https://apps.apple.com/in/app/dbmci-live/id6482232219"
              variant="secondary"
              size="sm"
            >
              DBMCI Live (iOS)
            </GlowingButton>
            
            <GlowingButton 
              href="https://play.google.com/store/apps/details?hl=en_US&id=co.arya.bhatiai"
              variant="secondary"
              size="sm"
            >
              DBMCI Live (Android)
            </GlowingButton>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <Smartphone className="w-5 h-5 text-teal-400" />
            <span className="text-white/90">Office SIM Setup</span>
          </div>
          <p className="text-white/70 text-sm">Purchase SIM for official use.</p>
        </div>
      </div>
    )
  },
  {
    day: 2,
    title: "Explore Platforms",
    icon: <Eye className="w-8 h-8" />,
    content: (
      <div className="space-y-4">
        <p className="text-white/80 mb-6">Familiarize yourself with the main platforms:</p>
        
        <div className="space-y-3">
          <GlowingButton 
            href="https://dbmci.one"
            variant="primary"
            size="md"
          >
            DBMCI One Platform
          </GlowingButton>
          
          <GlowingButton 
            href="https://www.marrow.com/"
            variant="warning"
            size="md"
          >
            Marrow Platform
          </GlowingButton>
          
          <GlowingButton 
            href="https://dbmci.com"
            variant="secondary"
            size="md"
          >
            DBMCI Live Platform
          </GlowingButton>
        </div>
      </div>
    )
  },
  {
    day: 3,
    title: "Plans Review",
    icon: <FileText className="w-8 h-8" />,
    content: (
      <div className="space-y-4">
        <p className="text-white/80 mb-6">Deep dive into DBMCI One & Marrow plans:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl border border-blue-400/30">
            <h4 className="text-white mb-2">DBMCI One Plans</h4>
            <p className="text-white/70 text-sm">Comprehensive medical education packages</p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-400/30">
            <h4 className="text-white mb-2">Marrow Plans</h4>
            <p className="text-white/70 text-sm">NEET PG preparation solutions</p>
          </div>
        </div>
      </div>
    )
  },
  {
    day: "4 & 5",
    title: "App Review",
    icon: <Smartphone className="w-8 h-8" />,
    content: (
      <div className="space-y-4">
        <p className="text-white/80 mb-6">Explore & review features of all apps:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "DBMCI One", color: "from-blue-500/30 to-teal-500/30" },
            { name: "eGurukul", color: "from-green-500/30 to-emerald-500/30" },
            { name: "DBMCI One Notes", color: "from-purple-500/30 to-pink-500/30" },
            { name: "Marrow", color: "from-orange-500/30 to-red-500/30" },
            { name: "DBMCI Live", color: "from-cyan-500/30 to-blue-500/30" }
          ].map((app, index) => (
            <motion.div
              key={app.name}
              className={`p-4 bg-gradient-to-br ${app.color} rounded-xl border border-white/20 text-center`}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-sm">{app.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    day: "6 & 7",
    title: "SOPs & Sheets",
    icon: <FileText className="w-8 h-8" />,
    content: (
      <div className="space-y-6">
        <p className="text-white/80 mb-6">Essential documentation and procedures:</p>
        
        <div className="space-y-4">
          <GlowingButton 
            href="https://docs.google.com/spreadsheets/d/1AEj-pBNifEkirrqCflp1KalnLQfWqCYmnwfKfdMsxGc/edit?gid=2080270710#gid=2080270710"
            variant="primary"
            size="md"
          >
            Omni SOP Sheet
          </GlowingButton>
          
          <GlowingButton 
            href="https://docs.google.com/spreadsheets/d/1ZzPLn2X5W5T_UYphlIZFsyMRmXa96rjIjwxVmjtC3_0/edit?pli=1&gid=978555492#gid=978555492"
            variant="info"
            size="md"
          >
            Freshdesk Types & Subtypes
          </GlowingButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            "Responses",
            "Merge Process",
            "Country Availability",
            "Centre POCs",
            "Remaining Workbooks"
          ].map((item, index) => (
            <motion.div
              key={item}
              className="p-4 bg-white/5 rounded-xl border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-white/90">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    day: 8,
    title: "Tool Familiarisation",
    icon: <Settings className="w-8 h-8" />,
    content: (
      <div className="space-y-6">
        <p className="text-white/80 mb-6">Get familiar with essential tools:</p>
        
        <div className="space-y-4">
          <GlowingButton 
            href="https://help.dbmci.one/a/dashboard/unresolved_tickets/agent?q=%5B%7B%22group_ids%22%3A%5B1060000147617%5D%7D%5D"
            variant="primary"
            size="md"
          >
            Freshdesk Tickets
          </GlowingButton>
          
          <GlowingButton 
            href="https://admin-v1.egurukulapp.com/#/dashboard"
            variant="success"
            size="md"
          >
            Admin Panel (eGurukul)
          </GlowingButton>
          
          <GlowingButton 
            href="https://ikigai.dbmci.one/ikigai"
            variant="secondary"
            size="md"
          >
            IKIGAI Dashboard
          </GlowingButton>
        </div>
        
        <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30">
          <h4 className="text-white mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Login Credentials
          </h4>
          <div className="space-y-2 text-sm">
            <p className="text-white/80">Login: <span className="text-teal-400">care@dbmci.one</span></p>
            <p className="text-white/80">Password: <span className="text-pink-400">Marrow@2090</span></p>
          </div>
        </div>
      </div>
    )
  },
  {
    day: "9 & 10",
    title: "Ticket Management",
    icon: <FileText className="w-8 h-8" />,
    content: (
      <div className="space-y-6">
        <div className="p-6 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl border border-blue-400/30">
          <h4 className="text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-teal-400" />
            Daily Tasks
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-teal-500/30 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">1</span>
              </div>
              <span className="text-white/90">Open 10 email tickets per day</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">2</span>
              </div>
              <span className="text-white/90">Do NOT reply to users</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">3</span>
              </div>
              <div>
                <p className="text-white/90">Add internal notes with:</p>
                <ul className="text-white/70 text-sm mt-1 ml-4">
                  <li>• Suggested reply draft</li>
                  <li>• Your investigation/findings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/30">
          <div className="flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90">Track all tickets in a Google Sheet</span>
          </div>
        </div>
      </div>
    )
  },
  {
    day: "11, 12 & 13",
    title: "Outbound Calls",
    icon: <Phone className="w-8 h-8" />,
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-green-500/30 to-teal-500/30 rounded-full mx-auto mb-4 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Phone className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        
        <GlowingButton 
          href="https://my.exotel.com/egurukulapp1/callindex"
          variant="success"
          size="lg"
        >
          Open Exotel Dialer
        </GlowingButton>
        
        <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-400/30">
          <h4 className="text-white mb-4">Instructions:</h4>
          <div className="space-y-2">
            <p className="text-white/90 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Call unattended tickets
            </p>
            <p className="text-white/90 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Add detailed notes after each call
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    day: 14,
    title: "Inbound Calls",
    icon: <PhoneCall className="w-8 h-8" />,
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full mx-auto mb-4 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <PhoneCall className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30">
          <h4 className="text-white mb-4 flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-pink-400" />
            Final Step
          </h4>
          <div className="space-y-3">
            <p className="text-white/90 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-pink-400" />
              Start attending incoming calls
            </p>
            <p className="text-white/90 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-pink-400" />
              Update Freshdesk with call notes
            </p>
            <p className="text-white/90 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-pink-400" />
              You're now ready for full support operations!
            </p>
          </div>
        </div>
      </div>
    )
  }
];

export function TimelineSection() {
  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            📆 Your 14-Day Journey
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Follow this comprehensive onboarding timeline to become a DBMCI One support expert
          </p>
        </motion.div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-1/2 top-32 w-1 h-24 bg-gradient-to-b from-white/30 to-transparent transform -translate-x-1/2 z-0" />
              )}
              
              <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Day indicator */}
                <div className="flex-shrink-0 w-32">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-teal-500 text-white p-6 rounded-2xl text-center shadow-2xl border-2 border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Calendar className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl mb-1">Day {item.day}</div>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <GlassmorphismCard delay={index * 0.1}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border border-white/20"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="text-2xl text-white mb-2">{item.title}</h3>
                      </div>
                    </div>
                    {item.content}
                  </GlassmorphismCard>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}