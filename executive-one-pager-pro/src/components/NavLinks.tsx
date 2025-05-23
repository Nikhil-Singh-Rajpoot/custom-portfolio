
import { useActiveSection } from '@/hooks/useActiveSection';

interface NavLink {
  id: string;
  label: string;
}

interface NavLinksProps {
  links: NavLink[];
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className = '' }) => {
  const activeSection = useActiveSection(links.map(link => link.id));
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className={`flex gap-6 ${className}`}>
      {links.map((link) => (
        <button
          key={link.id}
          className={`text-sm transition-colors px-1 py-1 relative ${
            activeSection === link.id
              ? 'text-primary font-medium'
              : 'hover:text-primary'
          }`}
          onClick={() => scrollToSection(link.id)}
          aria-current={activeSection === link.id ? 'page' : undefined}
        >
          {link.label}
          {activeSection === link.id && (
            <span 
              className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" 
              aria-hidden="true"
            />
          )}
        </button>
      ))}
    </nav>
  );
};

export default NavLinks;
