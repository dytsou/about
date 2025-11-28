import { FOOTER_SECTIONS } from './FooterLinks';
import './Footer.css';

export function SocialLinksComponent() {
  return (
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
  );
}


