import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gradient?: 'blue' | 'teal' | 'purple' | 'pink' | 'gradient';
}

export function GlassmorphismCard({ 
  children, 
  className = '', 
  delay = 0,
  gradient = 'gradient'
}: GlassmorphismCardProps) {
  const gradientClasses = {
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-400/30',
    teal: 'from-teal-500/20 to-teal-600/10 border-teal-400/30',
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-400/30',
    pink: 'from-pink-500/20 to-pink-600/10 border-pink-400/30',
    gradient: 'from-blue-500/20 via-teal-500/15 to-purple-500/20 border-white/20'
  };

  return (
    <motion.div
      className={`
        relative bg-gradient-to-br ${gradientClasses[gradient]}
        backdrop-blur-md border-2 rounded-3xl p-8 shadow-2xl
        hover:shadow-blue-500/10 transition-all duration-500
        hover:border-white/30 hover:bg-opacity-80
        ${className}
      `}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-teal-400/10 to-purple-400/10 rounded-3xl blur-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    </motion.div>
  );
}