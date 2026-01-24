import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, MapPin, Award, Mic, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const certificates = [
  {
    title: 'AWS ML Symposium',
    description: 'Selected presenter for Generative AI robotics research at Amazon AI/ML HBCU Symposium',
    image: '/certificates/aws-certificate.jpg',
  },
  {
    title: 'NSF Research Program',
    description: 'Completed Mini Bachelor Data Science Program sponsored by the National Science Foundation',
    image: '/certificates/nsf-certificate.jpg',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCert, setHoveredCert] = useState(null);

  return (
    <section className="py-16 md:py-20" id="about" style={{ backgroundColor: '#0f0f10' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">
              <Zap size={12} />
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FAFAF8' }}>
              Building software that{' '}
              <span style={{ color: '#F59E0B' }}>matters</span>
            </h2>

            <div className="space-y-3 text-sm leading-relaxed mb-6" style={{ color: '#8A8780' }}>
              <p>
                I am a Computer Science student at Morgan State University and I genuinely love what I do.
                Every single day, I wake up excited to learn something new and push myself further.
                Whether it is building <span style={{ color: '#FAFAF8' }}>full stack web applications</span>,
                crafting <span style={{ color: '#FAFAF8' }}>native mobile apps</span>, or developing
                <span style={{ color: '#FAFAF8' }}> AI powered systems</span>, I pour my heart into every project.
              </p>
              <p>
                My journey started with web development, grew through intensive
                <span style={{ color: '#FAFAF8' }}> Android engineering</span> training at CodePath where I built 10 apps,
                and now I am leading AI agent development at Morgan State's CS Lab alongside Dr. Paul Wang.
                I never stop. I am always building, always learning, always improving.
              </p>
              <p>
                I also co-founded <span style={{ color: '#FAFAF8' }}>Gaudon Store</span>, a live e-commerce business
                where I handle all the technical development. I believe that dedication and hard work
                are the keys to creating software that truly makes a difference in people's lives.
              </p>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', color: '#8A8780' }}
              >
                <MapPin size={12} style={{ color: '#6b6b6b' }} />
                {personalInfo.location}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', color: '#8A8780' }}
              >
                <GraduationCap size={12} style={{ color: '#6b6b6b' }} />
                {personalInfo.education.school}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono"
                style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.15)' }}
              >
                Class of {personalInfo.education.graduation.split(' ')[1]}
              </span>
            </div>
          </motion.div>

          {/* Right: Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-mono mb-3" style={{ color: '#6b6b6b' }}>
              <Award size={14} className="inline mr-2" />
              Certifications & Recognition
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredCert(index)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div
                    className="rounded-lg overflow-hidden transition-all duration-300"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transform: hoveredCert === index ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full object-contain"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-3 transition-opacity duration-300 rounded-lg"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                        opacity: hoveredCert === index ? 1 : 0
                      }}
                    >
                      <h4 className="text-xs font-semibold" style={{ color: '#FAFAF8' }}>{cert.title}</h4>
                      <p className="text-xs mt-1" style={{ color: '#8A8780' }}>{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 pl-4"
              style={{ borderLeft: '2px solid rgba(245, 158, 11, 0.3)' }}
            >
              <p className="font-display text-base italic" style={{ color: '#FAFAF8' }}>
                "Stay hungry, stay foolish, and never stop building."
              </p>
              <cite className="text-xs mt-1 block not-italic font-mono" style={{ color: '#6b6b6b' }}>
                My daily motivation
              </cite>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
