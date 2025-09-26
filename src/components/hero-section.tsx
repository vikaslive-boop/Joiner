import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Smartphone, User } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Animated Title */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            🚀 Welcome to DBMCI One
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Your journey in Medical EdTech support begins here.
          </motion.p>
        </motion.div>

        {/* 3D Doctor Avatar and Holographic Phone */}
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <div className="flex items-center justify-center gap-12 mb-8">
            {/* 3D Doctor Avatar */}
            <motion.div
              className="relative"
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 10, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <User size={60} className="text-white drop-shadow-lg" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-32 h-32 bg-blue-400/30 rounded-full blur-xl animate-pulse" />
            </motion.div>

            {/* Holographic Mobile Phone */}
            <motion.div
              className="relative"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 5, -5, 0],
                rotateZ: [0, 5, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <div className="w-20 h-32 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-2xl border-2 border-white/30 backdrop-blur-md shadow-2xl">
                  <div className="w-full h-full p-2">
                    <div className="w-full h-4 bg-white/20 rounded-full mb-2" />
                    <div className="w-full h-4 bg-white/15 rounded-full mb-2" />
                    <div className="w-3/4 h-4 bg-white/10 rounded-full mb-2" />
                    <div className="w-full h-6 bg-gradient-to-r from-blue-400/40 to-teal-400/40 rounded-lg" />
                  </div>
                </div>
                {/* Holographic glow */}
                <div className="absolute inset-0 w-20 h-32 bg-purple-400/20 rounded-2xl blur-lg animate-pulse" />
                
                {/* Floating app icons */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/60 rounded-lg backdrop-blur-sm border border-white/20"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -top-2 -right-6 w-6 h-6 bg-teal-400/60 rounded-full backdrop-blur-sm border border-white/20"
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute -bottom-3 -right-3 w-7 h-7 bg-pink-400/60 rounded-lg backdrop-blur-sm border border-white/20"
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, -180, -360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Start Training Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
            onClick={() => window.open('https://dbmci.one', '_blank')}
          >
            <motion.span
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              Start Training
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}