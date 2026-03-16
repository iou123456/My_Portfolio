import { motion } from 'framer-motion';
import { ShoppingCart, BarChart3, Globe, Heart, Github, Activity, Leaf, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollFade } from '@/hooks/useScrollFade';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built from the ground up using component-driven architecture and design system principles. Features responsive design, payment integration, and analytics tracking.',
    icon: ShoppingCart,
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
    description: 'A full-featured travel and hospitality platform for The Bush Collection — an African safari company spanning Kenya and Tanzania.',
    icon: Globe,
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
    description: 'A modern, responsive donor dashboard for charity organizations to track donations, manage donors, and monitor campaigns.',
    icon: Heart,
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
    description: 'A responsive single-page patient dashboard that dynamically renders healthcare data via the Coalition Technologies Patient Data API.',
    icon: Activity,
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
  {
    title: "Meemo's Naturals — Brand Website",
    description: 'A luxury editorial brochure website for Meemo\'s Naturals, a natural wellness food brand. Built as a fully static single-page site with zero dependencies.',
    icon: Leaf,
    link: 'https://meemo-s-naturals.vercel.app/',
    github: 'https://github.com/iou123456/Meemo-s-Naturals',
    metrics: [
      { label: 'Static Pages', value: 'Zero deps' },
      { label: 'Hosting Ready', value: 'Vercel / Netlify' },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Built a fully static, dependency-free single-page brochure site optimized for performance and accessibility',
      'Implemented inquiry-driven UX: pre-filled WhatsApp inquiry links and floating WhatsApp CTA for instant contact',
      'Designed editorial layout with serif typography, architectural grids, animated ticker, scroll reveal and sticky navigation',
    ],
  },
];

export function ProjectsSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: headingRef, opacity: headingOpacity } = useScrollFade<HTMLHeadingElement>({ startOpacity: 0.08 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
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
      className="py-24 md:py-36 bg-dark-secondary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-accent-warm text-xs uppercase tracking-[0.3em] font-medium mb-6">
              Featured Work
            </p>
            <motion.h2 ref={headingRef} style={{ opacity: headingOpacity }} className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
              Key Projects
            </motion.h2>
          </div>
          <p className="text-text-tertiary max-w-sm text-sm leading-relaxed">
            Highlighting impactful projects that demonstrate technical expertise and business value.
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0 divide-y divide-dark-tertiary/50 border-t border-dark-tertiary/50"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group py-10 md:py-14"
            >
              {/* Top row: number, title, links */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-6">
                  <span className="text-dark-tertiary text-xs font-mono mt-2 hidden sm:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-2 group-hover:text-accent-warm transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-tertiary text-sm leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                  {'github' in project && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {'link' in project && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-accent-warm transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Metrics row */}
              <div className="flex flex-wrap items-center gap-6 mb-6 ml-0 sm:ml-12">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-baseline gap-2">
                    <span className="text-xl font-serif text-accent-warm">
                      {metric.value}
                    </span>
                    <span className="text-text-tertiary text-xs uppercase tracking-wider">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <ul className="space-y-1.5 mb-6 ml-0 sm:ml-12">
                {project.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-text-secondary text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-warm mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 ml-0 sm:ml-12">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium text-text-tertiary border border-dark-tertiary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
