import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { techStack } from '../data/portfolio';
import { Code2, Bot, Cloud, Database, Wrench, Layers } from 'lucide-react';

const categories = [
  { key: 'aiAgents', label: 'AI Agents & LLMs', icon: Bot },
  { key: 'languages', label: 'Languages', icon: Code2 },
  { key: 'frameworks', label: 'Frameworks', icon: Layers },
  { key: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
  { key: 'databases', label: 'Databases', icon: Database },
  { key: 'tools', label: 'Tools', icon: Wrench },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32" id="skills" style={{ backgroundColor: '#0a0a0b' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">
            <Code2 size={14} />
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: '#FAFAF8' }}>
            Tech <span style={{ color: '#F59E0B' }}>Stack</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon;
            // Only highlight AI Agents category with amber
            const isAI = cat.key === 'aiAgents';

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={20} style={{ color: isAI ? '#F59E0B' : '#8A8780' }} />
                  <h3
                    className="text-sm font-mono uppercase tracking-wider"
                    style={{ color: isAI ? '#F59E0B' : '#B8B5AD' }}
                  >
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack[cat.key]?.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + catIndex * 0.1 + index * 0.05 }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#B8B5AD',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
