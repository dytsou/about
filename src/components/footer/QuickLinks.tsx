import { FooterLinkComponent } from './FooterLinks';
import { FOOTER_SECTIONS } from './FooterLinks';
import './Footer.css';

export function QuickLinksComponent() {
  return (
    <div>
      <h4 className="footer-section-title">{FOOTER_SECTIONS.quickLinks.title}</h4>
      <ul className="footer-links">
        {FOOTER_SECTIONS.quickLinks.links.map((link, index) => (
          <li key={index}>
            <FooterLinkComponent link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}


