import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32" id="experience" style={{ backgroundColor: '#0f0f10' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">
            <Briefcase size={14} />
            Career
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: '#FAFAF8' }}>
            Experience
          </h2>
        </motion.div>

        <div ref={ref} className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.period}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div
                  className="absolute left-[11px] top-8 bottom-0 w-0.5"
                  style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), transparent)' }}
                />
              )}

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={index === 0
                  ? { backgroundColor: '#F59E0B', borderColor: '#F59E0B', boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' }
                  : { backgroundColor: '#0a0a0b', borderColor: 'rgba(255, 255, 255, 0.15)' }
                }
              >
                {index === 0 && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
              </motion.div>

              {/* Content card */}
              <div className="card p-6 ml-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold" style={{ color: '#FAFAF8' }}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2" style={{ color: '#8A8780' }}>
                      <Building2 size={14} style={{ color: '#6b6b6b' }} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-mono w-fit"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: '#6b6b6b', border: '1px solid rgba(255, 255, 255, 0.06)' }}
                  >
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                <p className="mb-4" style={{ color: '#8A8780' }}>{exp.description}</p>

                {/* Tech used */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
