import { motion } from 'motion/react';
import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';

export function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#e4e4e7] to-[#10b981] bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            Download my full resume or view my professional profiles
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-3xl">
              📄
            </div>
            <div className="flex-1">
              <h3 className="text-3xl text-[#e4e4e7] mb-2">
                Professional Resume
              </h3>
              <p className="text-[#a1a1aa]">
                Comprehensive overview of my experience, skills, education, and projects
              </p>
            </div>
          </div>

          {/* Resume Sections Preview */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass rounded-xl p-6">
              <h4 className="text-[#e4e4e7] mb-3">Technical Skills</h4>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li>• Machine Learning & Deep Learning</li>
                <li>• NLP & Generative AI</li>
                <li>• MLOps & Cloud Infrastructure</li>
                <li>• Python, PyTorch, TensorFlow</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="text-[#e4e4e7] mb-3">Experience</h4>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li>• AI/ML Engineer</li>
                <li>• Data Scientist</li>
                <li>• Research Assistant</li>
                <li>• ML Intern</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="text-[#e4e4e7] mb-3">Education</h4>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li>• M.S. Data Science</li>
                <li>• B.S. Computer Science</li>
                <li>• ML Certifications</li>
                <li>• Publications & Research</li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="text-[#e4e4e7] mb-3">Achievements</h4>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                <li>• Kaggle Competition Winner</li>
                <li>• Research Publications</li>
                <li>• Open Source Contributor</li>
                <li>• Conference Speaker</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://drive.google.com/file/d/1mQr3DqDN6xGIo3oU_L4AdruswmZY3B1J/view?usp=sharing"
              download
              className="flex-1 md:flex-none px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-xl 
                       text-white hover:shadow-lg hover:shadow-[#3b82f6]/50 transition-all duration-300
                       flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/-yashika-pal1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-8 py-4 glass rounded-xl text-[#e4e4e7] 
                       hover:bg-[#1f1f28] transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/yashika641"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-8 py-4 glass rounded-xl text-[#e4e4e7] 
                       hover:bg-[#1f1f28] transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.a
            href="https://leetcode.com/u/_Yashika_pal_/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-6 hover:bg-[#1f1f28] transition-all group"
            whileHover={{ y: -5 }}
          >
            <ExternalLink className="w-6 h-6 text-[#3b82f6] mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-[#e4e4e7] mb-2">LeetCode</h4>
            <p className="text-sm text-[#a1a1aa]">Algorithmic challenges</p>
          </motion.a>
          <motion.a
            href="https://www.hackerrank.com/profile/palyashika641"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-6 hover:bg-[#1f1f28] transition-all group"
            whileHover={{ y: -5 }}
          >
            <ExternalLink className="w-6 h-6 text-[#06b6d4] mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-[#e4e4e7] mb-2">HackerRank</h4>
            <p className="text-sm text-[#a1a1aa]">Coding competitions</p>
          </motion.a>
          <motion.a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-6 hover:bg-[#1f1f28] transition-all group"
            whileHover={{ y: -5 }}
          >
            <ExternalLink className="w-6 h-6 text-[#8b5cf6] mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-[#e4e4e7] mb-2">Medium</h4>
            <p className="text-sm text-[#a1a1aa]">Technical articles</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}