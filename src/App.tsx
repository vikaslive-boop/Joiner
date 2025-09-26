import { motion } from "motion/react";
import { HeroSection } from "./components/hero-section";
import { TimelineSection } from "./components/timeline-section";
import { SimpleClosing } from "./components/simple-closing";
import { FloatingIcons } from "./components/floating-icons";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Gradient and Waves */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600" />

        {/* Soft white gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20" />

        {/* Animated glowing waves */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary wave layer */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 70% 40%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 90% 10%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 40%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Tertiary wave layer with purple/pink */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            background: [
              "radial-gradient(circle at 50% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* Simple Closing */}
        <SimpleClosing />
      </div>

      {/* Glassmorphism overlay for depth */}
      <div className="fixed inset-0 pointer-events-none z-5 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
    </div>
  );
}