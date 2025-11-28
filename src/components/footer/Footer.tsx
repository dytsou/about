import { FooterBrand } from '../contents/FooterBrand';
import { QuickLinksComponent as QuickLinks } from './QuickLinks';
import { SocialLinksComponent as SocialLinks } from './SocialLinks';
import { FooterCopyrightComponent as FooterCopyright } from './FooterCopyright';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <FooterBrand />
          <QuickLinks />
          <SocialLinks />
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
}
