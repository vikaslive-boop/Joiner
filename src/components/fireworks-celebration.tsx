import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { GlowingButton } from './glowing-button';

const Firework = ({ delay = 0, x = 50, y = 50 }: { delay?: number; x?: number; y?: number }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 3
      }}
    >
      {/* Central burst */}
      <motion.div
        className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
        animate={{
          scale: [0, 2, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 1,
          delay: delay,
          repeat: Infinity,
          repeatDelay: 4
        }}
      />
      
      {/* Sparks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const distance = 50;
        const sparkX = Math.cos(angle) * distance;
        const sparkY = Math.sin(angle) * distance;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `hsl(${i * 30}, 70%, 60%)`,
              left: '50%',
              top: '50%'
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: sparkX,
              y: sparkY,
              opacity: [1, 0],
              scale: [1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: delay + 0.2,
              repeat: Infinity,
              repeatDelay: 3.3,
              ease: "easeOut"
            }}
          />
        );
      })}
    </motion.div>
  );
};

const Confetti = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute top-0 left-1/2 pointer-events-none"
      initial={{ y: -100, rotate: 0 }}
      animate={{ 
        y: window.innerHeight + 100,
        rotate: 720,
        x: [-20, 20, -20, 20]
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut"
      }}
    >
      <div className="w-3 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
    </motion.div>
  );
};

export function FireworksCelebration() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Fireworks */}
      <Firework delay={0} x={20} y={30} />
      <Firework delay={0.5} x={80} y={25} />
      <Firework delay={1} x={15} y={60} />
      <Firework delay={1.5} x={85} y={70} />
      <Firework delay={2} x={50} y={20} />
      <Firework delay={2.5} x={30} y={80} />
      <Firework delay={3} x={70} y={40} />
      
      {/* Confetti */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Confetti key={i} delay={i * 0.1} />
      ))}
      
      {/* Main celebration content */}
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Celebration emoji animation */}
        <motion.div
          className="text-8xl mb-8"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎇
        </motion.div>
        
        {/* Congratulations text */}
        <motion.h2
          className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          🎉 Congratulations!
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          You are now officially part of the <span className="text-teal-400">DBMCI One Support Team</span>!
          Your journey to becoming a medical education support expert is complete.
        </motion.p>
        
        {/* Success badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {[
            { icon: "🎓", text: "Certified Support Agent" },
            { icon: "🚀", text: "Ready for Action" },
            { icon: "⭐", text: "DBMCI One Expert" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="text-white">{badge.text}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Final call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <GlowingButton 
            href="https://dbmci.one"
            variant="primary"
            size="lg"
          >
            Let's Go! Start Supporting 🚀
          </GlowingButton>
        </motion.div>
        
        {/* Floating celebration elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {['🎉', '🎊', '✨', '🌟', '💫', '🎈', '🏆', '👏'][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Background celebration glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-orange-500/5 to-transparent pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}