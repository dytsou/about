import { ThemeToggleButton } from './ThemeToggleButton';
import { NavLinkComponent } from './NavLinks';
import { navLinks } from './NavLinks';
import './Navigation.css';

export function DesktopMenu() {
  return (
    <div className="nav-desktop-menu">
      {navLinks.map(link => (
        <NavLinkComponent key={link.path} link={link} variant="desktop" />
      ))}
      <ThemeToggleButton variant="desktop" />
    </div>
  );
}


