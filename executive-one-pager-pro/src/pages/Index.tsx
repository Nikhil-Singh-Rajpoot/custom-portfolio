
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import AchievementsSection from '@/sections/AchievementsSection';
import ExtracurricularSection from '@/sections/ExtracurricularSection';
import ContactSection from '@/sections/ContactSection';
import JsonLdSchema from '@/components/JsonLdSchema';
import profile from '@/data/profile';

// Detect and honor user's motion preferences
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

// Setup framer-motion settings globally
if (prefersReducedMotion) {
  motion.useViewportScroll = (): any => ({ scrollY: { get: () => 0 } });
  motion.useTransform = (): any => () => 0;
  motion.useSpring = (): any => () => 0;
}

const Index = () => {
  // Set page title and metadata
  useEffect(() => {
    document.title = `${profile.basics.name} | ${profile.basics.title}`;
  }, []);

  return (
    <>
      <JsonLdSchema />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ExtracurricularSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
