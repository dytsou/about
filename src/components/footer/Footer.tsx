import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const FOOTER_SECTIONS = {
  quickLinks: {
    title: 'Quick Links',
    links: [
      { href: '#about', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' }
    ]
  },
  connect: {
    title: 'Connect',
    socialLinks: [
      {
        href: 'https://github.com/dytsou/',
        icon: Github,
        label: 'GitHub'
      },
      {
        href: 'https://www.linkedin.com/in/dytsou',
        icon: Linkedin,
        label: 'LinkedIn'
      },
      {
        href: 'mailto:contact@dy.tsou.me',
        icon: Mail,
        label: 'Email'
      }
    ]
  }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">Dong-You Tsou</h3>
            <p className="footer-description">
              Backend & Full-Stack Developer passionate about building scalable systems and
              leading developer communities.
            </p>
          </div>

          <div>
            <h4 className="footer-section-title">{FOOTER_SECTIONS.quickLinks.title}</h4>
            <ul className="footer-links">
              {FOOTER_SECTIONS.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-section-title">{FOOTER_SECTIONS.connect.title}</h4>
            <div className="footer-social-container">
              {FOOTER_SECTIONS.connect.socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <Icon className="footer-social-icon" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-divider">
          <p className="footer-copyright">
            {currentYear} Dong-You Tsou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
