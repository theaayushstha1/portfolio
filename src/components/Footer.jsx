import { Github, Linkedin, Twitter, Bot, Zap } from 'lucide-react';
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
              className="flex items-center gap-2 font-display text-2xl transition-colors"
              style={{ color: '#FAFAF8' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#F59E0B'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FAFAF8'}
            >
              <Bot size={24} style={{ color: '#F59E0B' }} />
              Aayush<span style={{ color: '#F59E0B' }}>.</span>
            </a>
            <p className="text-sm mt-1 font-mono" style={{ color: '#6b6b6b' }}>
              AI Agent Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
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
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm" style={{ color: '#6b6b6b' }}>
            <p className="flex items-center gap-1.5 font-mono">
              © {new Date().getFullYear()} · Built with
              <Zap size={12} style={{ color: '#F59E0B' }} />
              Vertex AI & ADK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
