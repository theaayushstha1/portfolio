import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={isScrolled ? { backgroundColor: 'rgba(10, 10, 11, 0.9)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' } : {}}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 font-display text-xl transition-colors"
            style={{ color: '#FAFAF8' }}
          >
            <Bot size={20} style={{ color: '#F59E0B' }} />
            <span>Aayush</span>
            <span style={{ color: '#F59E0B' }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm rounded-lg transition-all duration-200"
                style={{ color: '#8A8780' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FAFAF8';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8A8780';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="ml-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
              style={{ backgroundColor: '#F59E0B', color: '#0a0a0b' }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: '#FAFAF8' }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{ backgroundColor: '#0f0f10', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg transition-colors"
                  style={{ color: '#8A8780' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="block px-4 py-3 mt-2 text-center font-medium rounded-lg transition-colors"
                style={{ backgroundColor: '#F59E0B', color: '#0a0a0b' }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
