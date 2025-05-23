
import { useEffect } from "react";
import ThreeCanvas from "@/components/ThreeCanvas";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import EducationSection from "@/sections/EducationSection";
import AchievementsSection from "@/sections/AchievementsSection";
import ContactSection from "@/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    // Set page title based on profile data
    document.title = "High-Energy Dark Portfolio + Résumé";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <ThreeCanvas />
      
      {/* Ambient scanlines effect */}
      <div className="scan-line" aria-hidden="true" />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Scrollable container */}
      <main className="scroll-container">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
