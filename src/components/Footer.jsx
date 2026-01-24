import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-12" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo/Name */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display text-2xl font-bold"
            >
              <span style={{ color: '#FAFAF8' }}>A</span>
              <span style={{ color: '#F59E0B' }}>.S</span>
            </a>
            <p className="text-sm mt-1 font-mono" style={{ color: '#6b6b6b' }}>
              Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg transition-all duration-200"
              style={{ color: '#6b6b6b' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FAFAF8';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6b6b6b';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg transition-all duration-200"
              style={{ color: '#6b6b6b' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FAFAF8';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6b6b6b';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="p-3 rounded-lg transition-all duration-200"
              style={{ color: '#6b6b6b' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FAFAF8';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6b6b6b';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-right" style={{ color: '#6b6b6b' }}>
            <p className="italic mb-1" style={{ color: '#888' }}>
              "Dream big, build bigger"
            </p>
            <p className="font-mono">
              © {new Date().getFullYear()} · Built by Aayush
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
