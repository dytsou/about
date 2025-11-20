import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './Navigation.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experiences' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    { path: 'https://dy.tsou.me/resume', label: 'Resume', external: true }
  ];

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="nav-container">
        <div className="nav-content">
          <Link
            to="/"
            className="nav-brand"
          >
            dytsou
          </Link>

          <div className="nav-desktop-menu">
            {navLinks.map(link => (
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <button
              onClick={toggleTheme}
              className="nav-theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon key="moon" className="nav-theme-icon nav-theme-icon-light" />
              ) : (
                <Sun key="sun" className="nav-theme-icon nav-theme-icon-dark" />
              )}
            </button>
          </div>

          <div className="nav-mobile-controls">
            <button
              onClick={toggleTheme}
              className="nav-mobile-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon key="moon-mobile" className="nav-theme-icon nav-theme-icon-light" />
              ) : (
                <Sun key="sun-mobile" className="nav-theme-icon nav-theme-icon-dark" />
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
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-mobile-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
