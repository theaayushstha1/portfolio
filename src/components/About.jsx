import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Award, Mic, Bot, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const highlights = [
  {
    icon: Bot,
    title: 'AI Agent Builder',
    description: 'Building multi-agent systems with Vertex AI & Google ADK',
  },
  {
    icon: Award,
    title: 'Featured Speaker',
    description: 'Amazon AI/ML Symposium & EdgeCon Conference',
  },
  {
    icon: Mic,
    title: 'NSF Research',
    description: 'Presented NAO6 Robot AI research at NSF Conference',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32" id="about" style={{ backgroundColor: '#0f0f10' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">
              <Zap size={14} />
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FAFAF8' }}>
              Building the{' '}
              <span style={{ color: '#F59E0B' }}>future</span> of AI
            </h2>

            <div className="space-y-4 leading-relaxed mb-8" style={{ color: '#8A8780' }}>
              <p>
                I'm a Computer Science student at Morgan State University, deeply fascinated
                by the potential of <span style={{ color: '#FAFAF8' }}>AI agents</span> and{' '}
                <span style={{ color: '#FAFAF8' }}>robotics</span> to transform how we interact with technology.
              </p>
              <p>
                Currently exploring multi-agent orchestration with <span style={{ color: '#FAFAF8' }}>Google's ADK</span> and{' '}
                <span style={{ color: '#FAFAF8' }}>Vertex AI</span>, while conducting research on generative AI
                for humanoid robots. My work has been featured at Amazon's AI/ML Symposium and NSF Conference.
              </p>
              <p>
                I believe in building AI that's not just intelligent, but truly useful—systems that
                can reason, plan, and take action to solve real problems.
              </p>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap gap-3 text-sm">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', color: '#8A8780' }}
              >
                <MapPin size={16} style={{ color: '#6b6b6b' }} />
                {personalInfo.location}
              </span>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', color: '#8A8780' }}
              >
                <GraduationCap size={16} style={{ color: '#6b6b6b' }} />
                {personalInfo.education.school}
              </span>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono"
                style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', color: '#F59E0B', border: '1px solid rgba(245, 158, 11, 0.15)' }}
              >
                Class of {personalInfo.education.graduation.split(' ')[1]}
              </span>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card p-6 flex items-start gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: '#6b6b6b' }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#FAFAF8' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: '#8A8780' }}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pl-6"
              style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)' }}
            >
              <p className="font-display text-xl italic" style={{ color: '#FAFAF8' }}>
                "The best way to predict the future is to build it."
              </p>
              <cite className="text-sm mt-2 block not-italic font-mono" style={{ color: '#6b6b6b' }}>
                — My approach to AI
              </cite>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
