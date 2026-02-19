import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    title: 'Web Developer',
    company: 'The Bush Collection',
    location: '',
    period: 'June 2025 – Present',
    color: 'blue',
    achievements: [
      'Designed and developed responsive, mobile-first e-commerce platform from scratch, implementing modern React patterns and component-driven architecture that increased customer engagement by 25%',
      'Built reusable UI component library with consistent design system principles, reducing development time for new features by 40%',
      'Integrated secure payment gateways (REST APIs) and third-party services, creating frictionless checkout flows that improved conversion rates',
      'Optimized frontend performance through code splitting, lazy loading, and efficient state management, reducing page load times by 30%',
      'Shipped features rapidly in startup environment, iterating based on user feedback and business metrics',
    ],
  },
  {
    title: 'Full Stack Developer (Frontend-Focused)',
    company: 'Plus W Inc. (+W)',
    location: 'Japan',
    period: 'November 2024 – December 2024',
    color: 'magenta',
    achievements: [
      'Developed full-stack web applications with React/JavaScript frontend and Django backend, achieving 30% reduction in page load times through performance optimization',
      'Built dynamic, interactive user interfaces focused on exceptional UX, resulting in 25% increase in user engagement metrics',
      'Designed and consumed RESTful APIs for seamless frontend-backend integration, reducing data retrieval times by 20%',
      'Collaborated with international cross-functional teams using Agile methodologies, shipping features iteratively and improving project delivery by 15%',
      'Conducted code reviews and maintained high code quality standards, ensuring maintainable and scalable frontend codebase',
      'Optimized database queries and API responses to enhance overall application performance and user experience',
    ],
  },
  {
    title: 'IT Specialist / Frontend Developer',
    company: 'National Council for Persons with Disabilities (NCPWD)',
    location: '',
    period: 'October 2020 – December 2023',
    color: 'amber',
    achievements: [
      'Maintained web-based knowledge management platform, improving information accessibility and user experience by 30%',
      'Created responsive, accessible user interfaces following WCAG guidelines to ensure inclusive design for persons with disabilities',
      'Built frontend features for digital resource management system, implementing intuitive navigation and search functionality',
      'Collaborated across departments to gather requirements and deliver user-centric solutions that improved workflow efficiency',
      'Integrated third-party services and APIs to enhance platform functionality and automate manual processes',
      'Provided technical training and support, demonstrating ability to communicate complex technical concepts to non-technical stakeholders',
    ],
  },
  {
    title: 'IT Attaché',
    company: 'The Judiciary, Karatina Law Courts',
    location: '',
    period: 'May 2023 – August 2023',
    color: 'coral',
    achievements: [
      'Led digitization initiative transforming paper-based workflows into digital web applications, improving accessibility by 30%',
      'Built responsive web interfaces for court personnel with varying technical abilities, focusing on intuitive UX design',
      'Collaborated with stakeholders to gather requirements and deliver solutions that improved operational efficiency by 25%',
      'Implemented user authentication and role-based access control for secure web applications',
    ],
  },
];

const colorVariants = {
  blue: {
    dot: 'bg-accent-blue',
    glow: 'shadow-glow',
    border: 'border-accent-blue/30',
    badge: 'bg-accent-blue/10 text-accent-blue',
  },
  magenta: {
    dot: 'bg-accent-magenta',
    glow: 'shadow-glow-magenta',
    border: 'border-accent-magenta/30',
    badge: 'bg-accent-magenta/10 text-accent-magenta',
  },
  amber: {
    dot: 'bg-accent-amber',
    glow: 'shadow-glow-amber',
    border: 'border-accent-amber/30',
    badge: 'bg-accent-amber/10 text-accent-amber',
  },
  coral: {
    dot: 'bg-accent-coral',
    glow: 'shadow-[0_0_20px_rgba(233,64,64,0.3)]',
    border: 'border-accent-coral/30',
    badge: 'bg-accent-coral/10 text-accent-coral',
  },
};

export function ExperienceSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 1.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-dark-primary relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm uppercase tracking-widest font-medium mb-4 block">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A track record of delivering impactful solutions across diverse industries and environments
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="absolute left-4 md:left-8 top-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-magenta to-accent-amber"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = colorVariants[exp.color as keyof typeof colorVariants];
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                    className={`absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full ${colors.dot} ${colors.glow}`}
                  />

                  {/* Content Card */}
                  <div className={`p-6 md:p-8 rounded-2xl bg-dark-secondary border ${colors.border} hover:border-opacity-60 transition-colors`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-accent-blue font-medium">
                          {exp.company}
                          {exp.location && (
                            <span className="text-text-tertiary"> • {exp.location}</span>
                          )}
                        </p>
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${colors.badge}`}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                          className="flex items-start gap-3 text-text-secondary"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 flex-shrink-0`} />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
