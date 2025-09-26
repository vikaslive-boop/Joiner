import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

interface GlowingButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export function GlowingButton({ 
  children, 
  href, 
  className = '', 
  variant = 'primary',
  size = 'md'
}: GlowingButtonProps) {
  const variants = {
    primary: 'from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 shadow-blue-500/25',
    secondary: 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-purple-500/25',
    success: 'from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 shadow-teal-500/25',
    warning: 'from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-orange-500/25',
    info: 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/25'
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-lg'
  };

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button
        onClick={handleClick}
        className={`
          bg-gradient-to-r ${variants[variant]}
          text-white ${sizes[size]} rounded-2xl
          shadow-2xl border-2 border-white/20 backdrop-blur-md
          transition-all duration-300 hover:shadow-2xl
          relative overflow-hidden group
          ${className}
        `}
      >
        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{ x: [-100, 100] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
        />
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {href && <ExternalLink size={16} />}
        </span>
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20"
          animate={{
            background: [
              'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
              'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Button>
    </motion.div>
  );
}