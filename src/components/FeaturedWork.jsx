import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Bot, Brain, BarChart3, Cpu, Sparkles, ExternalLink, Play, Github, ShoppingBag, Smartphone, Film, Dumbbell, ListChecks, Gamepad2, FileText, FileCode2 } from 'lucide-react';
import { projects } from '../data/portfolio';

const projectIcons = {
  'CS Navigator': Brain,
  'NAO6 Robot AI': Bot,
  'Gaudon Store': ShoppingBag,
  'ML Document Extraction': Brain,
  'FileNinja AI': FileText,
  'MSU Chatbot Mobile': Smartphone,
  'FlixsterPlus': Film,
  'BitFit': Dumbbell,
  'WishList App': ListChecks,
  'Baltimore Crime Dashboard': BarChart3,
  'Turing Machine Simulator': Cpu,
};

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-16 md:py-20" style={{ backgroundColor: '#0a0a0b' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-label justify-center">
            <Sparkles size={12} />
            Projects & Applications
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: '#FAFAF8' }}>
            Featured <span style={{ color: '#F59E0B' }}>Work</span>
          </h2>
        </motion.div>

        <div ref={ref} className="space-y-4">
          {/* Main featured projects */}
          {projects.slice(0, 3).map((project, index) => {
            const Icon = projectIcons[project.title] || Brain;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-interactive p-5 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Project Image or Icon */}
                  {project.image ? (
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-transform duration-500"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: '#8A8780' }}
                    >
                      <Icon size={24} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider mb-0.5 block" style={{ color: '#6b6b6b' }}>
                          {project.subtitle}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-semibold transition-colors duration-300" style={{ color: '#FAFAF8' }}>
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-3 max-w-2xl text-sm" style={{ color: '#8A8780' }}>
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.highlights.map((highlight) => (
                        <span key={highlight} className="text-xs font-mono opacity-80" style={{ color: '#8A8780' }}>
                          • {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#8A8780',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#FAFAF8'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                          }}
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200"
                          style={{
                            backgroundColor: '#F59E0B',
                            color: '#0a0a0b'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#d97706';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#F59E0B';
                          }}
                        >
                          <ExternalLink size={14} />
                          Live Site
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200"
                          style={{
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            color: '#ef4444'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                          }}
                        >
                          <Play size={14} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}

          {/* Grid for remaining projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {projects.slice(3).map((project, index) => {
              const Icon = projectIcons[project.title] || Cpu;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card-interactive p-4 h-full flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: '#8A8780' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-mono block mb-0.5" style={{ color: '#6b6b6b' }}>
                        {project.subtitle}
                      </span>
                      <h3 className="font-display text-base font-semibold transition-colors duration-300" style={{ color: '#FAFAF8' }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs mb-3 flex-1" style={{ color: '#8A8780' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: '#8A8780',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#FAFAF8'
                        }}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200"
                        style={{
                          backgroundColor: '#F59E0B',
                          color: '#0a0a0b'
                        }}
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200"
                        style={{
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          color: '#ef4444'
                        }}
                      >
                        <Play size={14} />
                        Demo
                      </a>
                    )}
                    {project.links.colab && (
                      <a
                        href={project.links.colab}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-200"
                        style={{
                          backgroundColor: 'rgba(251, 188, 4, 0.1)',
                          border: '1px solid rgba(251, 188, 4, 0.3)',
                          color: '#FBBC04'
                        }}
                      >
                        <FileCode2 size={14} />
                        Colab
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
