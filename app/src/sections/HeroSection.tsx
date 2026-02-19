import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useMousePosition } from '@/hooks/useMousePosition';

export function HeroSection() {
  const { displayText, showCursor } = useTypewriter({
    text: 'React Developer',
    speed: 80,
    delay: 500,
  });

  const { normalizedX, normalizedY } = useMousePosition();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-dark-primary"
        style={{
          background: `
            radial-gradient(
              ellipse at ${50 + normalizedX * 10}% ${50 + normalizedY * 10}%,
              rgba(45, 98, 255, 0.15) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at ${30 - normalizedX * 5}% ${70 - normalizedY * 5}%,
              rgba(221, 35, 187, 0.1) 0%,
              transparent 40%
            ),
            #090909
          `,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-text-tertiary text-sm md:text-base uppercase tracking-widest mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4"
        >
          <span className="bg-gradient-to-r from-accent-blue via-accent-magenta to-accent-amber bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            Timsheldon Ayiecho Oure
          </span>
        </motion.h1>

        {/* Title with Typewriter */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-6 h-10"
        >
          <span className="font-medium">{displayText}</span>
          <span
            className={`inline-block w-0.5 h-8 bg-accent-blue ml-1 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-text-tertiary text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building responsive, high-performance web applications that drive 
          <span className="text-text-secondary"> engagement</span> and 
          <span className="text-text-secondary"> conversion</span>
        </motion.p>

        {/* Contact Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: Phone, text: '+254 791 058 879' },
            { icon: Mail, text: 'timsheldonoure1@gmail.com' },
            { icon: MapPin, text: 'Nairobi, Kenya' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-secondary border border-dark-tertiary text-text-secondary text-sm"
            >
              <item.icon className="w-4 h-4 text-accent-blue" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-accent-blue to-accent-magenta text-white px-8 py-6 text-base font-medium hover:shadow-glow-lg transition-shadow"
            >
              Get In Touch
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-dark-tertiary text-text-primary hover:bg-dark-secondary px-8 py-6 text-base font-medium"
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-tertiary hover:text-text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
