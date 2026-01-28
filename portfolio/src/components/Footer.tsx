import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center">
              <span className="text-white text-sm">DS</span>
            </div>
            <span className="text-[#e4e4e7]">Data Scientist Portfolio</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="flex items-center gap-2 text-[#a1a1aa] text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span>© {currentYear} All rights reserved</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-[#ef4444] fill-current" /> and AI
            </span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#home"
              className="text-[#a1a1aa] hover:text-[#3b82f6] transition-colors"
            >
              Back to Top
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
