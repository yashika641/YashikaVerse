import { motion } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github?: string;
  demo?: string;
  color: string;
  darkColor: string;
  coverImage: string;
}

const projects: Project[] = [
{
  id: 'project-1',
  title: 'DemandCast – AI-Driven Demand Forecasting & Decision Intelligence',
  description: 'Intelligent demand forecasting with explainable AI and BI dashboards',
  longDescription:
    'Built an AI-powered demand forecasting system to predict business demand trends and enable data-driven decision-making. Implemented time-series forecasting using Prophet, combined with machine learning pipelines for feature engineering. Applied SHAP for model interpretability, allowing stakeholders to understand key demand drivers. Integrated analytical outputs with interactive Power BI dashboards for strategic planning and operational insights.',
  techStack: [
    'Python',
    'Machine Learning',
    'Time-Series Forecasting',
    'Prophet',
    'SHAP',
    'Pandas',
    'Power BI',
  ],
  github: 'https://github.com/yashika641/Demand-Cast.git',
  demo: 'https://yashika641-demand-cast-frontendapp2-zi86ug.streamlit.app/',
  color: '#1e40af',
  darkColor: '#1e3a8a',
  coverImage:
    'https://images.unsplash.com/photo-1744473119469-905016183836?fit=crop&w=1080&q=80',
},

{
  id: 'project-2',
  title: 'IntelliStreamAI – Cross-Domain Business Intelligence Platform',
  description: 'Unified AI platform for OTT analytics, recommendations, and market forecasting',
  longDescription:
    'Developed a cross-domain AI-powered business intelligence platform integrating OTT user behavior analysis, content recommendation systems, and stock market trend prediction. Implemented explainable AI using SHAP and LIME to interpret model predictions. Applied Prophet-based time-series forecasting to predict user engagement and financial trends. Designed BI dashboards to support executive-level strategic decision-making.',
  techStack: [
    'Machine Learning',
    'NLP',
    'SHAP',
    'LIME',
    'Prophet',
    'Streamlit',
    'Power BI',
    'Python',
  ],
  github: 'https://github.com/yashika641/intellistream-ai.git',
  demo: 'Coming Soon',
  color: '#0e7490',
  darkColor: '#155e75',
  coverImage:
    'https://images.unsplash.com/photo-1762279388979-6a430989284c?fit=crop&w=1080&q=80',
},

{
  id: 'project-3',
  title: 'PharmaLens – GenAI Bioinformatics & Drug Discovery Assistant',
  description: 'GenAI-powered bioinformatics assistant for drug discovery and biomedical QA',
  longDescription:
    'Built a GenAI-powered bioinformatics assistant for drug discovery and biomedical question answering using Retrieval-Augmented Generation (RAG). Fine-tuned BioBERT for domain-specific QA, implemented vector search with FAISS, and integrated toxicity prediction and gene–drug interaction mapping. Designed a scalable architecture using FastAPI and Streamlit, with Docker, DVC, and AWS for deployment and experimentation.',
  techStack: [
    'LLaMA 3',
    'Gemma',
    'BioBERT',
    'LangChain',
    'FAISS',
    'RDKit',
    'BLAST',
    'FastAPI',
    'Streamlit',
    'Docker',
    'DVC',
    'AWS',
  ],
  github: 'https://github.com/yashika641/Pharmalens.git',
  demo: 'https://pharmalenss.netlify.app/',
  color: '#047857',
  darkColor: '#065f46',
  coverImage:
    'https://images.unsplash.com/photo-1750969185331-e03829f72c7d?fit=crop&w=1080&q=80',
},

{
  id: 'project-4',
  title: 'AI Lip-Sync Generator – Wav2Lip Microservice Architecture',
  description: 'AI-powered talking-face video generation using GPU offloading',
  longDescription:
    'Implemented a full end-to-end AI lip-sync generation system using Wav2Lip. The system converts text or audio into a realistic talking-face video. Designed a modular microservice architecture where GPU-heavy inference runs on Google Colab via ngrok, while the local system handles FastAPI backend and Flask frontend. Demonstrates ML model orchestration, GPU offloading, API-driven inference, and clean software engineering practices.',
  techStack: [
    'Python',
    'FastAPI',
    'Flask',
    'Wav2Lip',
    'Google Colab GPU',
    'ngrok',
    'gTTS',
    'pydub',
  ],
  github: 'https://github.com/<your-username>/wav2lip-project.git',
  demo: 'Local / Colab-based Demo',
  color: '#6b21a8',
  darkColor: '#581c87',
  coverImage:
    'https://images.unsplash.com/photo-1658140009985-f42b0c9434c8?fit=crop&w=1080&q=80',
},

{
  id: 'project-5',
  title: 'MLOps 360 – Fully Automated ML & MLOps Pipeline Platform',
  description: 'Self-operating ML training, deployment, and monitoring system',
  longDescription:
    'Designed an end-to-end automated MLOps platform capable of handling data ingestion, model training, evaluation, deployment, monitoring, and retraining with minimal human intervention. Integrated experiment tracking, CI/CD pipelines, model versioning, and automated retraining workflows. The platform orchestrates multiple ML projects and enables scalable, production-ready ML lifecycle management.',
  techStack: [
    'Python',
    'MLflow',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Automated ML Pipelines',
    'Monitoring & Logging',
  ],
  github: 'https://github.com',
  color: '#b45309',
  darkColor: '#92400e',
  coverImage:
    'https://images.unsplash.com/photo-1759683745502-e3149b844ddd?fit=crop&w=1080&q=80',
},
];

export function ProjectsBookStack() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selected = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f14] to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#e4e4e7] to-[#8b5cf6] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            A collection of AI/ML solutions • Hover to preview • Click to explore
          </p>
        </motion.div>

        {/* Book Stack */}
        <div className="max-w-4xl mx-auto flex justify-center items-end gap-1 md:gap-2 h-[500px] md:h-[600px] perspective-1000">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            const baseRotation = -2 + index * 1;

            return (
              <motion.div
                key={project.id}
                className="relative h-full cursor-pointer"
                style={{
                  width: isHovered ? '320px' : '80px',
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project.id)}
              >
                <motion.div
                  className="relative h-full rounded-l-xl overflow-hidden shadow-2xl"
                  style={{
                    background: `linear-gradient(to right, ${project.darkColor}, ${project.color})`,
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    rotateY: isHovered ? 0 : baseRotation,
                    x: isHovered ? 20 : 0,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{
                    boxShadow: `0 30px 60px ${project.color}80`,
                  }}
                >
                  {/* Book Spine */}
                  {!isHovered && (
                    <div className="h-full flex items-center justify-center p-4 bg-gradient-to-b from-black/20 to-black/40">
                      <motion.p
                        className="text-white text-sm md:text-base text-center writing-vertical transform -rotate-180"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                        }}
                      >
                        {project.title}
                      </motion.p>
                    </div>
                  )}

                  {/* Book Cover - Expanded View */}
                  {isHovered && (
                    <motion.div
                      className="h-full relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {/* Cover Image */}
                      <div className="absolute inset-0">
                        <ImageWithFallback
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div 
                          className="absolute inset-0" 
                          style={{
                            background: `linear-gradient(to bottom, ${project.darkColor}E6, ${project.color}F2)`,
                          }}
                        />
                      </div>

                      {/* Content Overlay */}
                      <div className="relative h-full p-6 flex flex-col justify-between z-10">
                        {/* Top Badge */}
                        <div className="flex justify-between items-start">
                          <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs text-white border border-white/20">
                            AI/ML Project
                          </span>
                          <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-xs border border-white/20">
                            {index + 1}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl text-white mb-3 drop-shadow-lg">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base mb-4 drop-shadow">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-xs text-white border border-white/20"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-xs text-white border border-white/20">
                                +{project.techStack.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg text-white text-sm
                                         hover:bg-black/70 transition-all flex items-center justify-center gap-2 border border-white/20"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github className="w-4 h-4" />
                                Code
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white text-sm
                                         hover:bg-white/30 transition-all flex items-center justify-center gap-2 border border-white/30"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-4 h-4" />
                                Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Book pages effect */}
                      <div
                        className="absolute top-0 right-0 w-3 h-full opacity-70"
                        style={{
                          background: `repeating-linear-gradient(
                            to bottom,
                            rgba(0,0,0,0.3) 0px,
                            rgba(0,0,0,0.3) 8px,
                            transparent 8px,
                            transparent 10px
                          )`,
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Book Texture Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="none"/%3E%3Cpath d="M0 0h1v1H0zm2 2h1v1H2zm2 2h1v1H4zm2 2h1v1H6z" fill="%23fff"/%3E%3C/svg%3E")',
                    }} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Project Modal */}
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="max-w-4xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              style={{
                background: `linear-gradient(135deg, ${selected.darkColor}20, ${selected.color}10)`,
              }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Cover Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={selected.coverImage}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: `linear-gradient(to bottom, ${selected.darkColor}99, ${selected.color}CC)`,
                  }}
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <span className="px-4 py-1 bg-black/40 backdrop-blur-md rounded-full text-sm text-white border border-white/20 mb-4 inline-block">
                      Featured Project
                    </span>
                    <h3 className="text-4xl md:text-5xl text-white drop-shadow-lg">
                      {selected.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition-all border border-white/20"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 bg-[#0a0a0f]/95 backdrop-blur-xl">
                <p className="text-[#e4e4e7] text-lg md:text-xl leading-relaxed mb-8">
                  {selected.longDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-[#a1a1aa] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selected.color }} />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selected.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-5 py-2.5 rounded-lg text-sm text-[#e4e4e7] bg-[#14141b] border"
                        style={{ borderColor: selected.color + '40' }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 rounded-xl text-white transition-all flex items-center justify-center gap-2 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${selected.darkColor}, ${selected.color})`,
                      }}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-[#14141b] border rounded-xl text-[#e4e4e7]
                               hover:bg-[#1f1f28] transition-all flex items-center justify-center gap-2 hover:scale-105"
                      style={{ borderColor: selected.color + '40' }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
