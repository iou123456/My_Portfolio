import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/iou123456', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/timsheldon-oure/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:timsheldonoure1@gmail.com', label: 'Email' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-dark-primary border-t border-dark-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="text-2xl font-semibold text-text-primary inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">T</span>imsheldon Oure
            </motion.a>
            <p className="text-text-tertiary text-sm">React Developer</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-dark-secondary border border-dark-tertiary flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-dark-tertiary" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-text-tertiary text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Timsheldon Oure. Made with
            <Heart className="w-4 h-4 text-accent-coral fill-accent-coral" />
            in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
