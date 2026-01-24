import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, ArrowUpRight, MessageCircle, Send, User, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_dhh08lx',
        'template_tv1crjr',
        {
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email,
        },
        'RD7GsMC5I_9UudkpE'
      );
      setSubmitStatus('success');
      setFormData({ name: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden" id="contact" style={{ backgroundColor: '#0f0f10' }}>
      <div className="container relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-4"
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

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FAFAF8' }}>
              Let's <span style={{ color: '#F59E0B' }}>connect</span>
            </h2>

            <p className="text-sm mb-6 max-w-md" style={{ color: '#8A8780' }}>
              Whether you have a project idea, job opportunity, or just want to say hi,
              I would love to hear from you. Fill out the form and I will get back to you as soon as possible.
            </p>

            <div className="space-y-3">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors group"
                style={{ color: '#8A8780' }}
              >
                <MessageCircle size={16} style={{ color: '#6b6b6b' }} />
                <span className="group-hover:text-white transition-colors">Connect on LinkedIn</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm transition-colors group"
                style={{ color: '#8A8780' }}
              >
                <Mail size={16} style={{ color: '#6b6b6b' }} />
                <span className="group-hover:text-white transition-colors">{personalInfo.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono mb-1.5" style={{ color: '#6b6b6b' }}>
                  Your Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#6b6b6b' }} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#FAFAF8'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(245, 158, 11, 0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono mb-1.5" style={{ color: '#6b6b6b' }}>
                  Subject
                </label>
                <div className="relative">
                  <FileText size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#6b6b6b' }} />
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#FAFAF8'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(245, 158, 11, 0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono mb-1.5" style={{ color: '#6b6b6b' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#FAFAF8'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(245, 158, 11, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-70"
                style={{ backgroundColor: '#F59E0B', color: '#0a0a0b' }}
                onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#d97706')}
                onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#F59E0B')}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg text-sm"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#4ade80' }}
                >
                  <CheckCircle size={16} />
                  Message sent successfully! I will get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg text-sm"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
