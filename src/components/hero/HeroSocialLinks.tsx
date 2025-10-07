import { Github, Linkedin, Mail } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import '../Hero.css';

export function HeroSocialLinks() {
  return (
    <div className="hero-social-links">
      <IconButton
        icon={Github}
        variant="ghost"
        size="lg"
        onClick={() => window.open('https://github.com/dytsou', '_blank')}
        aria-label="GitHub"
      />
      <IconButton
        icon={Linkedin}
        variant="primary"
        size="lg"
        onClick={() => window.open('https://www.linkedin.com/in/dytsou/', '_blank')}
        aria-label="LinkedIn"
      />
      <IconButton
        icon={Mail}
        variant="secondary"
        size="lg"
        onClick={() => window.open('mailto:contact@dy.tsou.me', '_blank')}
        aria-label="Email"
      />
    </div>
  );
}
