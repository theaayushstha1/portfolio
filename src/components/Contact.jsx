import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight, MessageCircle, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="contact" style={{ backgroundColor: '#0f0f10' }}>
      {/* Very subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mb-6"
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.08)',
              color: '#4ade80',
              border: '1px solid rgba(34, 197, 94, 0.15)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#4ade80' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#4ade80' }}></span>
            </span>
            Available for opportunities
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAFAF8' }}>
            Let's build{' '}
            <span style={{ color: '#F59E0B' }}>AI agents</span> together
          </h2>

          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#8A8780' }}>
            I'm always excited to discuss new projects involving AI agents, LLMs,
            or robotics. Let's chat about what we can build.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary text-base px-8 py-4">
              <Send size={18} />
              Send me an email
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4 group"
            >
              <MessageCircle size={18} />
              Connect on LinkedIn
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Email display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl inline-block"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <p className="text-sm mb-2" style={{ color: '#6b6b6b' }}>Or reach me directly at</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-lg transition-colors"
              style={{ color: '#FAFAF8' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#F59E0B'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FAFAF8'}
            >
              {personalInfo.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
