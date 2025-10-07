import { HeroIntro } from './HeroIntro';
import { HeroActions } from './HeroActions';
import { HeroSocialLinks } from './HeroSocialLinks';
import './Hero.css';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <HeroIntro />
          <HeroActions
            onViewWork={() => scrollToSection('projects')}
            onGetInTouch={() => scrollToSection('contact')}
          />
          <HeroSocialLinks />
        </div>
      </div>
    </section>
  );
}
