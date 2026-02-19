import { motion } from 'framer-motion';
import { Code2, Briefcase, Users, Rocket } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { icon: Briefcase, value: 3, suffix: '+', label: 'Years Experience' },
  { icon: Code2, value: 15, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 4, suffix: '', label: 'Companies Worked' },
  { icon: Rocket, value: 100, suffix: '%', label: 'Commitment' },
];

export function AboutSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

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
    hidden: { opacity: 0, y: 20 },
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
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-dark-primary relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Text */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-accent-blue text-sm uppercase tracking-widest font-medium">
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-6 leading-tight"
            >
              Product-focused{' '}
              <span className="gradient-text">React Developer</span> with a passion for excellence
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                With over <span className="text-text-primary font-medium">3 years of experience</span>, I specialize 
                in building responsive, high-performance web applications using modern React patterns and 
                component-driven architecture.
              </p>
              <p>
                My track record includes delivering user-centric SaaS solutions that drive engagement and 
                conversion. I have strong expertise in building reusable component libraries, optimizing UX flows, 
                and integrating REST APIs.
              </p>
              <p>
                Experienced in startup environments, I excel at shipping fast, iterating quickly, and taking 
                ownership of product development from concept to deployment. I'm passionate about creating 
                beautiful, frictionless user experiences that solve real business problems.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 md:p-8 rounded-2xl bg-dark-secondary border border-dark-tertiary hover:border-accent-blue/50 transition-colors"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/5 to-accent-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-dark-tertiary flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  
                  <p className="text-text-tertiary text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
