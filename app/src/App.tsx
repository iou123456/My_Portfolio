import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { EducationSection } from '@/sections/EducationSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
