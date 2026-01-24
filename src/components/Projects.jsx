import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Folder, ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-clay/10 rounded-lg">
            <Folder size={18} className="text-clay" aria-hidden="true" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-stone font-medium">
            Projects
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid gap-4"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="card p-5 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-stone group-hover:text-olive transition-colors duration-200 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex-shrink-0 p-2 text-stone-muted hover:text-olive
                             hover:bg-olive/10 rounded-lg transition-all duration-200
                             opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-6 text-center"
        >
          <a
            href={projects[0]?.links.github?.replace(/\/[^/]+$/, '') || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-olive hover:text-olive-dark
                     font-medium transition-colors duration-200 group"
          >
            View all projects on GitHub
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
