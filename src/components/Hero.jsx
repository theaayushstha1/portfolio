import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Sparkles, Bot } from 'lucide-react';
import { personalInfo, highlights } from '../data/portfolio';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Very subtle warm gradient orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#4ade80' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#4ade80' }}></span>
            </span>
            <span className="text-sm font-mono" style={{ color: '#8A8780' }}>Building AI Agents</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-text mb-6"
            style={{ color: '#FAFAF8' }}
          >
            I'm <span style={{ color: '#F59E0B' }}>Aayush</span>
            <br />
            <span style={{ color: '#6b6b6b' }}>AI Agent Developer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <Bot style={{ color: '#6b6b6b' }} size={20} />
            <p className="text-lg md:text-xl font-mono" style={{ color: '#8A8780' }}>
              {personalInfo.tagline}
              <span className="animate-blink" style={{ color: '#F59E0B' }}>_</span>
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
            style={{ color: '#6b6b6b' }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Tech pills - neutral colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {['Vertex AI', 'Google ADK', 'LangChain', 'RAG Systems'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono rounded-full"
                style={{
                  color: '#8A8780',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button onClick={scrollToWork} className="btn-primary">
              <Sparkles size={16} />
              View My Agents
            </button>
            <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>

          {/* Stats row - subtle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-8 mb-12"
          >
            {highlights.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold" style={{ color: '#FAFAF8' }}>
                  {stat.value}
                </p>
                <p className="text-sm font-mono" style={{ color: '#6b6b6b' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm" style={{ color: '#6b6b6b' }}>Connect</span>
            <div className="flex items-center gap-1">
              {[
                { href: personalInfo.links.github, icon: Github, label: 'GitHub' },
                { href: personalInfo.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: personalInfo.links.twitter, icon: Twitter, label: 'Twitter' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg transition-all duration-200"
                  style={{ color: '#6b6b6b' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FAFAF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6b6b6b'}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Small profile indicator */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src="/profile.jpeg"
                alt={personalInfo.name}
                className="w-20 h-20 rounded-full object-cover"
                style={{ border: '2px solid rgba(255, 255, 255, 0.1)' }}
              />
              <div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F59E0B' }}
              >
                <Bot size={12} style={{ color: '#0a0a0b' }} />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-mono" style={{ color: '#6b6b6b' }}>@0xYush</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#6b6b6b' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
