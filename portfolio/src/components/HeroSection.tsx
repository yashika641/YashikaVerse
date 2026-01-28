import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#3b82f6] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Neural network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 100,200 Q 300,100 500,200 T 900,200"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 200,400 Q 400,300 600,400 T 1000,400"
          stroke="#06b6d4"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 150,600 Q 350,500 550,600 T 950,600"
          stroke="#8b5cf6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Role Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse" />
            <span className="text-sm text-[#e4e4e7]">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#e4e4e7] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Yashika Pal
          </motion.h1>

          {/* Role */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-xl md:text-2xl text-[#e4e4e7]">Data Scientist</span>
            <span className="text-xl md:text-2xl text-[#3b82f6]">|</span>
            <span className="text-xl md:text-2xl text-[#e4e4e7]">AI/ML Engineer</span>
            <span className="text-xl md:text-2xl text-[#06b6d4]">|</span>
            <span className="text-xl md:text-2xl text-[#e4e4e7]">MLOps</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Building intelligent systems that transform data into insights and drive innovation
            through cutting-edge AI/ML solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-xl 
                       text-white hover:shadow-lg hover:shadow-[#3b82f6]/50 transition-all duration-300
                       hover:scale-105"
            >
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#resume"
              className="px-8 py-4 glass rounded-xl text-[#e4e4e7] 
                       hover:bg-[#1f1f28] transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/yashika641"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center 
                       hover:bg-[#1f1f28] hover:scale-110 transition-all duration-300
                       group"
            >
              <Github className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#e4e4e7]" />
            </a>
            <a
              href="https://linkedin.com/in/-yashika-pal1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center 
                       hover:bg-[#1f1f28] hover:scale-110 transition-all duration-300
                       group"
            >
              <Linkedin className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#3b82f6]" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 glass rounded-full flex items-center justify-center 
                       hover:bg-[#1f1f28] hover:scale-110 transition-all duration-300
                       group"
            >
              <Mail className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#06b6d4]" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.3, y: { duration: 1.5, repeat: Infinity } }}
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
