
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-md flex items-center justify-center transition-colors hover:bg-secondary"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
