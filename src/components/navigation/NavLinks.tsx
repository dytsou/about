import { Link, useLocation } from "react-router-dom";

export interface NavLink {
  path: string;
  label: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { path: '/about', label: 'About' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
  { path: 'https://dy.tsou.me/resume', label: 'Resume', external: true }
];

interface NavLinkComponentProps {
  link: NavLink;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

export function NavLinkComponent({ link, variant = 'desktop', onNavigate }: NavLinkComponentProps) {
  const location = useLocation();
  const isActive = location.pathname === link.path;
  const className = variant === 'desktop'
    ? `nav-link ${isActive ? 'nav-link-active' : ''}`
    : `nav-mobile-link ${isActive ? 'nav-link-active' : ''}`;

  if (link.external) {
    return (
      <a
        href={link.path}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      to={link.path}
      className={className}
      onClick={onNavigate}
    >
      {link.label}
    </Link>
  );
}