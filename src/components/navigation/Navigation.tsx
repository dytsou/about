import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './Navigation.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume', external: true, url: 'https://dy.tsou.me/resume' },
    { id: 'cal', label: 'Calendar', external: true, url: 'https://tsou.me/cal' }
  ];

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="nav-container">
        <div className="nav-content">
          <button
            onClick={() => scrollToSection('hero')}
            className="nav-brand"
          >
            dytsou
          </button>

          <div className="nav-desktop-menu">
            {navLinks.map(link => (
              link.external ? (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              )
            ))}
            <button
              onClick={toggleTheme}
              className="nav-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="nav-theme-icon nav-theme-icon-light" />
              ) : (
                <Sun className="nav-theme-icon nav-theme-icon-dark" />
              )}
            </button>
          </div>

          <div className="nav-mobile-controls">
            <button
              onClick={toggleTheme}
              className="nav-mobile-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="nav-theme-icon nav-theme-icon-light" />
              ) : (
                <Sun className="nav-theme-icon nav-theme-icon-dark" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="nav-mobile-menu-icon" />
              ) : (
                <Menu className="nav-mobile-menu-icon" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-content">
            {navLinks.map(link => (
              link.external ? (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-mobile-link"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
