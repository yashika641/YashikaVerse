import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profile_image from '../assets/IMG_20251231_170911.jpg';
export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#14141b] to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#e4e4e7] to-[#06b6d4] bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#06b6d4] rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass rounded-3xl overflow-hidden p-2">
                <ImageWithFallback
                  src={profile_image}
                  alt="Professional Portrait"
                  className="w-full h-full  rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <p className="text-[#e4e4e7] text-lg leading-relaxed mb-4">
                I'm a passionate Data Scientist and AI/ML Engineer specializing in building
                intelligent systems that solve real-world problems. With expertise spanning
                machine learning, deep learning, and MLOps, I bridge the gap between research
                and production.
              </p>
              <p className="text-[#a1a1aa] text-base leading-relaxed">
                My work focuses on developing scalable AI solutions, from NLP and computer vision
                to recommendation systems and predictive analytics. I thrive on transforming
                complex data into actionable insights and deploying models that drive business value.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                className="glass rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Briefcase className="w-6 h-6 text-[#3b82f6] mx-auto mb-2" />
                <p className="text-2xl text-[#e4e4e7] mb-1">1.5</p>
                <p className="text-xs text-[#a1a1aa]">Years Exp</p>
              </motion.div>
              <motion.div
                className="glass rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Award className="w-6 h-6 text-[#8b5cf6] mx-auto mb-2" />
                <p className="text-2xl text-[#e4e4e7] mb-1">7+</p>
                <p className="text-xs text-[#a1a1aa]">Projects</p>
              </motion.div>
              <motion.div
                className="glass rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <GraduationCap className="w-6 h-6 text-[#06b6d4] mx-auto mb-2" />
                <p className="text-2xl text-[#e4e4e7] mb-1">MSc</p>
                <p className="text-xs text-[#a1a1aa]">Degree</p>
              </motion.div>
            </div>

            {/* Timeline Highlights */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-[#e4e4e7] mb-1">Education</h4>
                  <p className="text-sm text-[#a1a1aa]">
                    M.Sc. in Bioinformatics | B.Sc. in zoology
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h4 className="text-[#e4e4e7] mb-1">Experience</h4>
                  <p className="text-sm text-[#a1a1aa]">
                    AI/ML Engineer at startup
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#06b6d4]" />
                </div>
                <div>
                  <h4 className="text-[#e4e4e7] mb-1">Specialization</h4>
                  <p className="text-sm text-[#a1a1aa]">
                    Data Science, Gen AI, NLP, Computer Vision, MLOps, Bioinformatics
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
