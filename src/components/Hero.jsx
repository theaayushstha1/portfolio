import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Sparkles, Code2, GraduationCap, Users, Smartphone } from 'lucide-react';
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
        <div className="max-w-xl">
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
            <span className="text-sm font-mono" style={{ color: '#8A8780' }}>Available for Opportunities</span>
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
            <span style={{ color: '#6b6b6b' }}>Software Engineer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <Code2 style={{ color: '#6b6b6b' }} size={16} />
            <p className="text-sm md:text-base font-mono" style={{ color: '#8A8780' }}>
              {personalInfo.tagline}
              <span className="animate-blink" style={{ color: '#F59E0B' }}>_</span>
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base leading-relaxed mb-6"
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
            {['React', 'Python', 'AI Agents', 'RAG', 'MCP', 'Google ADK'].map((tech) => (
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
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <button onClick={scrollToWork} className="btn-primary">
              <Sparkles size={16} />
              View My Work
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
            className="flex flex-wrap gap-6 mb-10"
          >
            {highlights.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold" style={{ color: '#FAFAF8' }}>
                  {stat.value}
                </p>
                <p className="text-xs font-mono" style={{ color: '#6b6b6b' }}>{stat.label}</p>
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
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg transition-all duration-200"
                style={{ color: '#6b6b6b' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FAFAF8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b6b6b'}
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg transition-all duration-200"
                style={{ color: '#6b6b6b' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FAFAF8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b6b6b'}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="p-2.5 rounded-lg transition-all duration-200"
                style={{ color: '#6b6b6b' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FAFAF8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b6b6b'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile and images - clean layout with connections */}
        <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            {/* Profile image */}
            <img
              src="/profile.jpeg"
              alt={personalInfo.name}
              className="w-24 h-24 rounded-full object-cover"
              style={{
                border: '2px solid #F59E0B',
                boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)'
              }}
            />

            {/* @0xYush text - below profile */}
            <p className="mt-2 text-sm font-mono" style={{ color: '#F59E0B' }}>@0xYush</p>

            {/* Connecting line */}
            <div className="w-px h-6 mt-2" style={{ backgroundColor: 'rgba(245, 158, 11, 0.4)' }} />

            {/* YouTube Short with Yosemite images on sides */}
            <div className="mt-2 flex flex-col items-center">
              <div className="flex items-center gap-3">
                {/* Left image */}
                <div className="flex flex-col items-center">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      width: '70px',
                      height: '100px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <img
                      src="/me/yosemite-pose1.jpg"
                      alt="Yosemite pose"
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto', objectPosition: 'center 30%' }}
                    />
                  </div>
                  <span className="mt-1 text-xs font-mono" style={{ color: '#8A8780' }}>outgoing</span>
                </div>

                {/* Left arrow */}
                <div style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '10px' }}>→</div>

                {/* YouTube video */}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    width: '100px',
                    height: '180px',
                    border: '2px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/KwR7njQHREM?autoplay=1&mute=1&loop=1&playlist=KwR7njQHREM&controls=0&showinfo=0&rel=0&modestbranding=1&start=3&end=18"
                    title="YouTube Short"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>

                {/* Right arrow */}
                <div style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '10px' }}>←</div>

                {/* Right image */}
                <div className="flex flex-col items-center">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      width: '70px',
                      height: '100px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <img
                      src="/me/yosemite-pose2.jpg"
                      alt="Yosemite dance pose"
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto', objectPosition: 'center 40%' }}
                    />
                  </div>
                  <span className="mt-1 text-xs font-mono" style={{ color: '#8A8780' }}>adventurous</span>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 text-sm font-mono text-center" style={{ color: '#6b6b6b' }}>
                <span style={{ color: '#F59E0B' }}>13+</span> years of dance · my other side
              </p>
            </div>
          </div>
        </div>
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
