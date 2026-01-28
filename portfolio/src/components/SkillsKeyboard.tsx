import { motion } from 'motion/react';
import { useState } from 'react';
import { Brain, Code, Database, Cloud, Cpu, GitBranch, BarChart, FlaskConical } from 'lucide-react';

interface Skill {
  key: string;
  name: string;
  description: string;
  tools: string[];
  icon: typeof Brain;
  color: string;
  expertise: {
    frameworks: string[];
    libraries: string[];
    concepts: string[];
    experience: string;
  };
}

const skills: Skill[] = [
  {
    key: 'ML',
    name: 'Machine Learning',
    description: 'Designing, training, and evaluating ML models',
    tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost'],
    icon: Brain,
    color: '#3b82f6',
    expertise: {
      frameworks: ['Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost'],
      libraries: ['Pandas', 'NumPy', 'SciPy'],
      concepts: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Feature Engineering',
        'Model Evaluation',
        'Hyperparameter Tuning',
      ],
      experience: 'Hands-on experience building and evaluating ML models',
    },
  },

  {
    key: 'DL',
    name: 'Deep Learning',
    description: 'Neural networks and modern deep learning architectures',
    tools: ['PyTorch', 'TensorFlow', 'Keras'],
    icon: Cpu,
    color: '#8b5cf6',
    expertise: {
      frameworks: ['TensorFlow', 'Keras', 'PyTorch'],
      libraries: ['Hugging Face', 'Transformers', 'OpenCV'],
      concepts: [
        'CNN',
        'RNN',
        'LSTM',
        'Transformers',
        'Model Explainability',
      ],
      experience: 'Practical experience implementing deep learning models',
    },
  },

  {
    key: 'NLP',
    name: 'NLP & GenAI',
    description: 'Natural language processing and generative AI systems',
    tools: ['spaCy', 'NLTK', 'BERT', 'OpenAI'],
    icon: Code,
    color: '#06b6d4',
    expertise: {
      frameworks: ['spaCy', 'NLTK', 'BioBERT'],
      libraries: ['Hugging Face', 'FAISS', 'OpenAI APIs'],
      concepts: [
        'Text Processing',
        'Named Entity Recognition',
        'Sentiment Analysis',
        'RAG Pipelines',
        'Prompt Engineering',
      ],
      experience: 'Built NLP and GenAI pipelines for real-world applications',
    },
  },

  {
    key: 'MLOps',
    name: 'MLOps & Deployment',
    description: 'Deploying and managing ML systems in production',
    tools: ['MLflow', 'Docker', 'FastAPI', 'Streamlit'],
    icon: GitBranch,
    color: '#10b981',
    expertise: {
      frameworks: ['MLflow', 'DVC', 'Prometheus', 'Grafana'],
      libraries: ['Docker', 'Kubernetes'],
      concepts: [
        'ML Pipelines',
        'CI/CD for ML',
        'Model Versioning',
        'API-based Deployment',
      ],
      experience: 'Experience deploying ML models using modern MLOps tools',
    },
  },

  {
    key: 'Cloud',
    name: 'Big Data & Cloud',
    description: 'Scalable data processing and cloud-based ML',
    tools: ['AWS', 'Spark', 'Hadoop'],
    icon: Cloud,
    color: '#f59e0b',
    expertise: {
      frameworks: ['Apache Spark', 'Hadoop'],
      libraries: ['PySpark'],
      concepts: [
        'Distributed Computing',
        'Large-scale Data Processing',
        'Cloud-based ML Workflows',
      ],
      experience: 'Worked with big data frameworks and AWS cloud services',
    },
  },

  {
    key: 'Stats',
    name: 'Data Science & Statistics',
    description: 'Statistical analysis and data exploration',
    tools: ['Pandas', 'NumPy', 'SciPy', 'Tableau'],
    icon: BarChart,
    color: '#ec4899',
    expertise: {
      frameworks: ['R'],
      libraries: ['Pandas', 'NumPy', 'SciPy', 'Statsmodels'],
      concepts: [
        'EDA',
        'Hypothesis Testing',
        'A/B Testing',
        'Biostatistics',
      ],
      experience: 'Strong foundation in statistical analysis and experimentation',
    },
  },

  {
    key: 'Bio',
    name: 'Bioinformatics',
    description: 'Computational genomics and biological data analysis',
    tools: ['BLAST', 'NGS', 'WGAS'],
    icon: FlaskConical,
    color: '#14b8a6',
    expertise: {
      frameworks: ['BLAST'],
      libraries: ['BioBERT'],
      concepts: [
        'Genomic Analysis',
        'Sequence Alignment',
        'NGS Data Processing',
        'Systems Biology',
        'Drug Design',
      ],
      experience: 'Applied bioinformatics techniques in academic and AI-driven projects',
    },
  },

  {
    key: 'Web',
    name: 'Web & Engineering Tools',
    description: 'Supporting tools for data-driven web applications',
    tools: ['Git', 'Linux', 'Bootstrap'],
    icon: Database,
    color: '#ef4444',
    expertise: {
      frameworks: ['FastAPI', 'Flask'],
      libraries: ['BeautifulSoup', 'Selenium'],
      concepts: [
        'Web Scraping',
        'API Development',
        'Version Control',
        'Environment Management',
      ],
      experience: 'Built and maintained data-driven web applications',
    },
  },
];


export function SkillsKeyboard() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selectedSkill = skills.find(s => s.key === selectedKey);

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#14141b] to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#e4e4e7] to-[#3b82f6] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            Hover over a key to preview • Click to explore in detail
          </p>
        </motion.div>

        {/* 3D Keyboard */}
        <div className="max-w-5xl mx-auto perspective-1000">
          <motion.div
            className="relative"
            style={{
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, rotateX: 20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Keyboard Base */}
            <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative">
              {/* Keyboard Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredKey === skill.key;
                  const isSelected = selectedKey === skill.key;

                  return (
                    <motion.div
                      key={skill.key}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Key Button */}
                      <motion.button
                        className="w-full aspect-square glass rounded-2xl relative overflow-hidden group"
                        style={{
                          transformStyle: 'preserve-3d',
                          backgroundColor: isSelected ? skill.color + '20' : undefined,
                          borderColor: isSelected ? skill.color : undefined,
                        }}
                        whileHover={{
                          y: -8,
                          scale: 1.05,
                          boxShadow: `0 20px 40px ${skill.color}40`,
                        }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredKey(skill.key)}
                        onHoverEnd={() => setHoveredKey(null)}
                        onClick={() => setSelectedKey(selectedKey === skill.key ? null : skill.key)}
                      >
                        {/* Gradient overlay on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: `radial-gradient(circle at center, ${skill.color}30, transparent)`,
                          }}
                        />

                        {/* Key Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                          <motion.div
                            animate={{
                              scale: isHovered ? 1.2 : 1,
                              rotate: isHovered ? 5 : 0,
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <Icon
                              className="w-8 h-8 md:w-10 md:h-10 mb-2"
                              style={{ color: skill.color }}
                            />
                          </motion.div>
                          <span className="text-sm md:text-base text-[#e4e4e7] text-center">
                            {skill.key}
                          </span>
                        </div>

                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            boxShadow: `inset 0 0 20px ${skill.color}40`,
                          }}
                        />
                      </motion.button>

                      {/* Hover Tooltip */}
                      {isHovered && !selectedKey && (
                        <motion.div
                          className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 w-48"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          <div className="glass rounded-xl p-3 shadow-xl">
                            <p className="text-sm text-[#e4e4e7] mb-1">
                              {skill.name}
                            </p>
                            <p className="text-xs text-[#a1a1aa]">
                              {skill.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Skill View */}
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedKey(null)}
          >
            <motion.div
              className="max-w-4xl w-full glass rounded-3xl p-8 md:p-12 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-start gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: selectedSkill.color + '20' }}
                  >
                    <selectedSkill.icon
                      className="w-8 h-8"
                      style={{ color: selectedSkill.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl mb-2 text-[#e4e4e7]">
                      {selectedSkill.name}
                    </h3>
                    <p className="text-[#a1a1aa] text-lg">
                      {selectedSkill.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedKey(null)}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#1f1f28] transition-all flex-shrink-0"
                >
                  <span className="text-[#a1a1aa] text-xl">×</span>
                </button>
              </div>

              {/* Experience */}
              <div className="mb-8 glass rounded-2xl p-6">
                <p className="text-[#e4e4e7] text-lg">
                  {selectedSkill.expertise.experience}
                </p>
              </div>
              {/* Tools */}
              {selectedSkill.tools?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-[#a1a1aa] mb-4 flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: selectedSkill.color }}
                    />
                    Tools
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {selectedSkill.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        className="px-4 py-2 glass rounded-lg text-sm text-[#e4e4e7]"
                        whileHover={{ scale: 1.05, y: -2 }}
                        style={{
                          borderColor: selectedSkill.color + '40',
                        }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}


              {/* Frameworks */}
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#a1a1aa] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                  Frameworks
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedSkill.expertise.frameworks.map((framework) => (
                    <motion.span
                      key={framework}
                      className="px-4 py-2 glass rounded-lg text-sm text-[#e4e4e7]"
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        borderColor: selectedSkill.color + '40',
                      }}
                    >
                      {framework}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Libraries */}
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#a1a1aa] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                  Libraries & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedSkill.expertise.libraries.map((library) => (
                    <motion.span
                      key={library}
                      className="px-4 py-2 glass rounded-lg text-sm text-[#e4e4e7]"
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        borderColor: selectedSkill.color + '40',
                      }}
                    >
                      {library}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Concepts */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-[#a1a1aa] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                  Key Concepts & Expertise
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedSkill.expertise.concepts.map((concept) => (
                    <motion.div
                      key={concept}
                      className="glass rounded-lg p-3 text-center"
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        borderColor: selectedSkill.color + '20',
                      }}
                    >
                      <p className="text-sm text-[#e4e4e7]">{concept}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedKey(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-xl text-white hover:shadow-lg hover:shadow-[#3b82f6]/50 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}