import { NavLinkComponent } from './NavLinks';
import { navLinks } from './NavLinks';
import './Navigation.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile-menu">
      <div className="nav-mobile-content">
        {navLinks.map(link => (
          <NavLinkComponent
            key={link.path}
            link={link}
            variant="mobile"
            onNavigate={onClose}
          />
        ))}
      </div>
    </div>
  );
}


