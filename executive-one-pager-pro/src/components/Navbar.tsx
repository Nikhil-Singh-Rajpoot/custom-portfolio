
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';
import PrintButton from './PrintButton';
import profile from '@/data/profile';

// Define available sections based on the profile data
const generateNavLinks = (profileData: typeof profile) => {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' }
  ];
  
  // Only add sections that have content
  if (profileData.skills.length > 0) links.push({ id: 'skills', label: 'Skills' });
  if (profileData.experience.length > 0) links.push({ id: 'experience', label: 'Experience' });
  if (profileData.projects.length > 0) links.push({ id: 'projects', label: 'Projects' });
  if (profileData.education.length > 0) links.push({ id: 'education', label: 'Education' });
  if (profileData.achievements.length > 0) links.push({ id: 'achievements', label: 'Achievements' });
  if (profileData.extracurricular.length > 0) links.push({ id: 'extracurricular', label: 'Activities' });
  
  links.push({ id: 'contact', label: 'Contact' });
  
  return links;
};

const navLinks = generateNavLinks(profile);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print 
        ${isScrolled 
          ? 'py-3 bg-background/90 backdrop-blur-sm shadow-sm' 
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="container max-w-content mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">{profile.basics.name}</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks links={navLinks} />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <PrintButton />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-b border-border">
          <div className="container max-w-content mx-auto px-4 py-4">
            <NavLinks 
              links={navLinks} 
              className="flex-col items-start gap-4"
            />
            <div className="mt-4 pt-4 border-t border-border">
              <PrintButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
