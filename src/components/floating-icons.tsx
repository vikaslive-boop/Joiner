import { motion } from 'motion/react';
import { Stethoscope, GraduationCap, Smartphone, Dna } from 'lucide-react';

const FloatingIcon = ({ 
  children, 
  delay = 0, 
  duration = 3,
  x = [-20, 20],
  y = [-30, 30]
}: { 
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number[];
  y?: number[];
}) => (
  <motion.div
    className="absolute text-white/20"
    animate={{
      x: x,
      y: y,
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Doctor Cap */}
      <FloatingIcon delay={0} x={[-30, 30]} y={[-40, 20]}>
        <div className="absolute top-20 left-[10%]">
          <GraduationCap size={40} className="drop-shadow-2xl" />
        </div>
      </FloatingIcon>
      
      {/* Stethoscope */}
      <FloatingIcon delay={1} duration={4} x={[-25, 25]} y={[-20, 40]}>
        <div className="absolute top-32 right-[15%]">
          <Stethoscope size={35} className="drop-shadow-2xl" />
        </div>
      </FloatingIcon>
      
      {/* Mobile Phone */}
      <FloatingIcon delay={2} duration={3.5} x={[-15, 35]} y={[-30, 25]}>
        <div className="absolute top-[60%] left-[5%]">
          <Smartphone size={30} className="drop-shadow-2xl" />
        </div>
      </FloatingIcon>
      
      {/* DNA Helix */}
      <FloatingIcon delay={1.5} duration={5} x={[-40, 20]} y={[-25, 35]}>
        <div className="absolute top-[40%] right-[8%]">
          <Dna size={45} className="drop-shadow-2xl text-teal-300/30" />
        </div>
      </FloatingIcon>
      
      {/* Additional floating elements */}
      <FloatingIcon delay={3} duration={4.5} x={[-20, 30]} y={[-35, 15]}>
        <div className="absolute top-[75%] right-[25%]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm" />
        </div>
      </FloatingIcon>
      
      <FloatingIcon delay={2.5} duration={3.8} x={[-35, 15]} y={[-20, 30]}>
        <div className="absolute top-[25%] left-[25%]">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-400/20 to-pink-400/20 blur-sm" />
        </div>
      </FloatingIcon>
    </div>
  );
}