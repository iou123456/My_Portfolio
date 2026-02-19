import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Layers, 
  Plug, 
  Wrench, 
  Server 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Frameworks',
    color: 'blue',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    icon: Palette,
    title: 'UI / Styling',
    color: 'magenta',
    skills: ['Tailwind CSS', 'Bootstrap', 'CSS-in-JS', 'Responsive Design', 'Mobile-First Development'],
  },
  {
    icon: Layers,
    title: 'Component Libraries',
    color: 'amber',
    skills: ['Design System Development', 'Reusable UI Components', 'Component-Driven Architecture'],
  },
  {
    icon: Plug,
    title: 'API Integration',
    color: 'coral',
    skills: ['REST APIs', 'Backend Integration', 'Third-Party Service Integration'],
  },
  {
    icon: Wrench,
    title: 'Development Tools',
    color: 'blue',
    skills: ['Git/GitHub', 'NPM', 'Visual Studio Code', 'Docker', 'Agile/Scrum'],
  },
  {
    icon: Server,
    title: 'Backend Knowledge',
    color: 'magenta',
    skills: ['Django', 'Python', 'PHP', 'PostgreSQL', 'MySQL', 'NoSQL'],
  },
];

const colorVariants = {
  blue: {
    icon: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'group-hover:border-accent-blue/50',
    glow: 'group-hover:shadow-glow',
  },
  magenta: {
    icon: 'text-accent-magenta',
    bg: 'bg-accent-magenta/10',
    border: 'group-hover:border-accent-magenta/50',
    glow: 'group-hover:shadow-glow-magenta',
  },
  amber: {
    icon: 'text-accent-amber',
    bg: 'bg-accent-amber/10',
    border: 'group-hover:border-accent-amber/50',
    glow: 'group-hover:shadow-glow-amber',
  },
  coral: {
    icon: 'text-accent-coral',
    bg: 'bg-accent-coral/10',
    border: 'group-hover:border-accent-coral/50',
    glow: 'group-hover:shadow-[0_0_20px_rgba(233,64,64,0.3)]',
  },
};

export function SkillsSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="skills"
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
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience developing 
            modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const colors = colorVariants[category.color as keyof typeof colorVariants];
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group p-6 rounded-2xl bg-dark-primary border border-dark-tertiary ${colors.border} ${colors.glow} transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <category.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 rounded-lg text-sm ${colors.bg} ${colors.icon} font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
