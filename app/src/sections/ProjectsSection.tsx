import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, BarChart3, Globe, Heart, Github, Activity } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built from the ground up using component-driven architecture and design system principles. Features responsive design, payment integration, and analytics tracking.',
    icon: ShoppingCart,
    color: 'blue',
    metrics: [
      { label: 'Engagement Increase', value: '25%' },
      { label: 'Load Time Reduction', value: '30%' },
    ],
    technologies: ['React', 'Tailwind CSS', 'REST APIs', 'Payment Gateways'],
    achievements: [
      'Implemented responsive, mobile-first design ensuring seamless experience across all devices',
      'Integrated payment processing APIs, analytics tracking, and third-party marketing tools',
      'Optimized conversion funnels and checkout flows based on user behavior analytics',
    ],
  },
  {
    title: 'SaaS Web Application',
    description: 'A scalable SaaS application with React frontend consuming Django REST APIs. Features real-time data updates, interactive dashboards, and comprehensive data visualization.',
    icon: BarChart3,
    color: 'magenta',
    metrics: [
      { label: 'Load Time Reduction', value: '30%' },
      { label: 'Development Speed', value: '40%' },
    ],
    technologies: ['React', 'Django', 'REST APIs', 'PostgreSQL'],
    achievements: [
      'Built reusable component library enabling rapid feature development and consistent UX',
      'Implemented real-time data updates and interactive dashboards with data visualization',
      'Achieved significant performance improvements through code splitting and caching strategies',
    ],
  },
  {
    title: 'Travel & Hospitality Booking Platform',
    description: 'A full-featured travel and hospitality platform for The Bush Collection — an African safari company spanning Kenya and Tanzania. Features safari package browsing, property collections, online booking, media center, and a conservation-focused brand experience.',
    icon: Globe,
    color: 'green',
    link: 'https://thebushcollection.africa/',
    metrics: [
      { label: 'Happy Travelers', value: '1,000+' },
      { label: 'Average Rating', value: '4.8★' },
    ],
    technologies: ['React', 'Tailwind CSS', 'Cloudinary', 'REST APIs', 'Booking Engine'],
    achievements: [
      'Developed end-to-end booking flow with safari package selection, property browsing, and reservation management',
      'Integrated Cloudinary-powered media center for high-performance image delivery across destinations',
      'Built responsive, mobile-first UI showcasing 3+ destinations with immersive visuals and interactive maps',
    ],
  },
  {
    title: 'Charity Donor Dashboard',
    description: 'A modern, responsive donor dashboard for charity organizations to track donations, manage donors, and monitor campaigns. Features interactive data visualization, real-time statistics, and an intuitive navigation system.',
    icon: Heart,
    color: 'amber',
    link: 'https://charity-donor-dashborad.netlify.app/',
    github: 'https://github.com/iou123456/charity-donor-dashboard',
    metrics: [
      { label: 'Total Donations Tracked', value: '$24K+' },
      { label: 'Active Donors', value: '1,248' },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'Font Awesome'],
    achievements: [
      'Built interactive dashboard with Chart.js data visualization for donation trends and source analytics',
      'Implemented responsive design with mobile sidebar toggle for seamless cross-device experience',
      'Created campaign management interface with real-time statistics and donation status tracking',
    ],
  },
  {
    title: 'Patient Data Dashboard',
    description: 'A responsive single-page patient dashboard that dynamically renders healthcare data via the Coalition Technologies Patient Data API. Features blood pressure charting over time, patient vitals monitoring, and a clean medical-grade UI.',
    icon: Activity,
    color: 'sky',
    link: 'https://patientdatadashboard.netlify.app/',
    github: 'https://github.com/iou123456/HTML-with-API-Integration',
    metrics: [
      { label: 'API-Driven Views', value: '5+' },
      { label: 'Vital Signs Tracked', value: '3' },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'REST APIs'],
    achievements: [
      'Integrated Coalition Technologies Patient Data API for dynamic patient record rendering',
      'Implemented interactive blood pressure trend charts using Chart.js with historical data visualization',
      'Built responsive medical dashboard UI tracking heart rate, respiratory rate, and temperature vitals',
    ],
  },
];

const colorVariants = {
  blue: {
    icon: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'group-hover:border-accent-blue/50',
    glow: 'group-hover:shadow-glow',
    gradient: 'from-accent-blue to-cyan-400',
  },
  magenta: {
    icon: 'text-accent-magenta',
    bg: 'bg-accent-magenta/10',
    border: 'group-hover:border-accent-magenta/50',
    glow: 'group-hover:shadow-glow-magenta',
    gradient: 'from-accent-magenta to-pink-400',
  },
  green: {
    icon: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'group-hover:border-emerald-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    gradient: 'from-emerald-400 to-teal-400',
  },
  amber: {
    icon: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'group-hover:border-amber-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
    gradient: 'from-amber-400 to-orange-400',
  },
  sky: {
    icon: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'group-hover:border-sky-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
    gradient: 'from-sky-400 to-cyan-400',
  },
};

export function ProjectsSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-dark-secondary relative"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm uppercase tracking-widest font-medium mb-4 block">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Highlighting impactful projects that demonstrate technical expertise and business value
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const colors = colorVariants[project.color as keyof typeof colorVariants];
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative rounded-2xl bg-dark-primary border border-dark-tertiary ${colors.border} ${colors.glow} overflow-hidden transition-all duration-300`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <project.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <div className="flex gap-2">
                      {'github' in project && project.github && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                          className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.icon} opacity-0 group-hover:opacity-100 transition-opacity`}
                        >
                          <Github className="w-5 h-5" />
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.icon} opacity-0 group-hover:opacity-100 transition-opacity`}
                        {...('link' in project && project.link
                          ? {
                              onClick: () => window.open(project.link, '_blank', 'noopener,noreferrer'),
                            }
                          : {})}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-semibold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className={`px-4 py-2 rounded-lg ${colors.bg}`}
                      >
                        <span className={`text-2xl font-bold ${colors.icon}`}>
                          {metric.value}
                        </span>
                        <p className="text-text-tertiary text-xs mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className={`w-1 h-1 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.icon}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
