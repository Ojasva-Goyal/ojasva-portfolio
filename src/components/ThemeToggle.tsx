
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    // Always set dark theme as default regardless of device preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    // Explicitly set dark theme if no theme is saved
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full transition-all duration-300 ease-in-out cyber-glow p-0 flex items-center justify-center"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-primary animate-slide-up" />
      ) : (
        <Sun className="h-5 w-5 text-primary animate-slide-down" />
      )}
    </Button>
  );
};

export default ThemeToggle;
