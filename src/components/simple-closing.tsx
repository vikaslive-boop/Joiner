import { motion } from 'motion/react';
import { GlowingButton } from './glowing-button';

export function SimpleClosing() {
  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Good to Go! 🚀
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <GlowingButton 
              href="https://dbmci.one"
              variant="primary"
              size="lg"
            >
              Start Your Journey
            </GlowingButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}