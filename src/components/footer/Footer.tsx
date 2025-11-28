import { useState, useEffect } from 'react';
import { FooterBrand } from '../contents/FooterBrand';
import { QuickLinksComponent as QuickLinks } from './QuickLinks';
import { SocialLinksComponent as SocialLinks } from './SocialLinks';
import { FooterCopyrightComponent as FooterCopyright } from './FooterCopyright';
import './Footer.css';

export function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <FooterBrand />
          <QuickLinks isMobile={isMobile} />
          <SocialLinks isMobile={isMobile} />
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
}
