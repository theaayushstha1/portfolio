import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { techStack } from '../data/portfolio';
import { Code2, Bot, Cloud, Database, Wrench, Layers } from 'lucide-react';

const categories = [
  { key: 'languages', label: 'Languages', icon: Code2 },
  { key: 'frameworks', label: 'Frameworks & Mobile', icon: Layers },
  { key: 'aiTools', label: 'AI Tools', icon: Bot },
  { key: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
  { key: 'databases', label: 'Databases', icon: Database },
  { key: 'tools', label: 'Tools', icon: Wrench },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-20" id="skills" style={{ backgroundColor: '#0a0a0b' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-label justify-center">
            <Code2 size={12} />
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: '#FAFAF8' }}>
            Tech <span style={{ color: '#F59E0B' }}>Stack</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon;
            const isHighlight = cat.key === 'languages' || cat.key === 'aiTools';

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="card p-4 cursor-default"
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + catIndex * 0.1 }}
                  >
                    <Icon size={16} style={{ color: isHighlight ? '#F59E0B' : '#8A8780' }} />
                  </motion.div>
                  <h3
                    className="text-xs font-mono uppercase tracking-wider"
                    style={{ color: isHighlight ? '#F59E0B' : '#B8B5AD' }}
                  >
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {techStack[cat.key]?.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + catIndex * 0.08 + index * 0.04,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(245, 158, 11, 0.15)',
                        borderColor: 'rgba(245, 158, 11, 0.3)',
                        color: '#F59E0B'
                      }}
                      className="px-2 py-1 rounded text-xs font-medium cursor-default transition-all duration-200"
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
