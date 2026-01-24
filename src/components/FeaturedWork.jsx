import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Bot, Brain, BarChart3, Cpu, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';

const projectIcons = {
  'CS Navigator': Brain,
  'NAO6 Robot AI': Bot,
  'Baltimore Crime Dashboard': BarChart3,
  'Turing Machine Simulator': Cpu,
};

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-24 md:py-32" style={{ backgroundColor: '#0a0a0b' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">
            <Sparkles size={14} />
            AI Agents & Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#FAFAF8' }}>
            Featured <span style={{ color: '#F59E0B' }}>Work</span>
          </h2>
        </motion.div>

        <div ref={ref} className="space-y-6">
          {/* Main featured projects */}
          {projects.slice(0, 2).map((project, index) => {
            const Icon = projectIcons[project.title] || Brain;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-interactive p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: '#8A8780' }}
                    >
                      <Icon size={32} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider mb-1 block" style={{ color: '#6b6b6b' }}>
                            {project.subtitle}
                          </span>
                          <h3 className="font-display text-2xl md:text-3xl font-semibold transition-colors duration-300" style={{ color: '#FAFAF8' }}>
                            {project.title}
                          </h3>
                        </div>
                        <ArrowUpRight
                          size={24}
                          className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                          style={{ color: '#6b6b6b' }}
                        />
                      </div>

                      <p className="mb-4 max-w-2xl" style={{ color: '#8A8780' }}>
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {project.highlights.map((highlight) => (
                          <span key={highlight} className="text-xs font-mono opacity-80" style={{ color: '#8A8780' }}>
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md"
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
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}

          {/* Grid for remaining projects */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects.slice(2).map((project, index) => {
              const Icon = projectIcons[project.title] || Cpu;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block card-interactive p-6 h-full"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: '#8A8780' }}
                      >
                        <Icon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-mono block mb-1" style={{ color: '#6b6b6b' }}>
                          {project.subtitle}
                        </span>
                        <h3 className="font-display text-xl font-semibold transition-colors duration-300" style={{ color: '#FAFAF8' }}>
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight size={18} className="flex-shrink-0" style={{ color: '#6b6b6b' }} />
                    </div>
                    <p className="text-sm mb-4" style={{ color: '#8A8780' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
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
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
