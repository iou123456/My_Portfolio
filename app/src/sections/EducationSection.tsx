import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code, Database, Layout, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const coursework = [
  { name: 'Web Development', icon: Code },
  { name: 'Software Engineering', icon: BookOpen },
  { name: 'Database Systems', icon: Database },
  { name: 'UI/UX Design', icon: Layout },
  { name: 'Agile Methodologies', icon: Users },
];

export function EducationSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="education"
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
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-dark-secondary border border-dark-tertiary overflow-hidden group hover:border-accent-blue/30 transition-colors">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Icon & Degree */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-accent-blue" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-accent-blue font-medium text-lg">
                    Multimedia University of Kenya
                  </p>
                  <p className="text-text-tertiary mt-1">
                    Graduated 2023
                  </p>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <p className="text-text-secondary mb-4 font-medium">Relevant Coursework</p>
                <div className="flex flex-wrap gap-3">
                  {coursework.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-primary border border-dark-tertiary text-text-secondary hover:border-accent-blue/30 hover:text-text-primary transition-colors"
                    >
                      <course.icon className="w-4 h-4 text-accent-blue" />
                      <span className="text-sm">{course.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
