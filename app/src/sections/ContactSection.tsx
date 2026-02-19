import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_r4gyrx8';
const EMAILJS_TEMPLATE_CONTACT = 'template_85lj8pm';      // Template: Contact Us → you
const EMAILJS_TEMPLATE_AUTOREPLY = 'template_bxwu6kg';    // Template: Auto-Reply → visitor
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string || '';

// Initialise EmailJS once at module load
emailjs.init(EMAILJS_PUBLIC_KEY);

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+254 791 058 879', href: 'tel:+254791058879' },
  { icon: Mail, label: 'Email', value: 'timsheldonoure1@gmail.com', href: 'mailto:timsheldonoure1@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: '#' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/iou123456' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/timsheldon-oure/' },
];

export function ContactSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

    try {
      // 1) Send the contact message to you
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONTACT, {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      });

      // 2) Send auto-reply confirmation to the visitor
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_AUTOREPLY, {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        subject: formData.get('subject') as string,
      });

      setIsSubmitting(false);
      alert('Thank you for your message! I will get back to you soon.');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setIsSubmitting(false);
      alert('Something went wrong while sending your message. Please try again later.');
    }
  };

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
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Column - Contact Info */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-text-primary mb-6"
            >
              Contact Information
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary mb-8 leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </motion.p>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-primary border border-dark-tertiary hover:border-accent-blue/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                    <item.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-text-tertiary text-sm">{item.label}</p>
                    <p className="text-text-primary font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-text-tertiary text-sm mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-dark-primary border border-dark-tertiary flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 rounded-2xl bg-dark-primary border border-dark-tertiary">
              {/* Hidden field so EmailJS knows the recipient */}
              <input type="hidden" name="to_email" value="timsheldonoure1@gmail.com" />
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Name</label>
                    <Input
                      name="user_name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-dark-secondary border-dark-tertiary text-text-primary placeholder:text-text-tertiary focus:border-accent-blue focus:ring-accent-blue/20"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Email</label>
                    <Input
                      name="user_email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-dark-secondary border-dark-tertiary text-text-primary placeholder:text-text-tertiary focus:border-accent-blue focus:ring-accent-blue/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Subject</label>
                  <Input
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    required
                    className="bg-dark-secondary border-dark-tertiary text-text-primary placeholder:text-text-tertiary focus:border-accent-blue focus:ring-accent-blue/20"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-sm mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-dark-secondary border-dark-tertiary text-text-primary placeholder:text-text-tertiary focus:border-accent-blue focus:ring-accent-blue/20 resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent-blue to-accent-magenta text-white py-6 font-medium hover:shadow-glow-lg transition-shadow disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
