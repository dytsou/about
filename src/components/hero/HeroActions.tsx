import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import './Hero.css';

interface HeroActionsProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export function HeroActions({ onViewWork, onGetInTouch }: HeroActionsProps) {
  return (
    <div className="hero-actions">
      <Button onClick={onViewWork} variant="primary" size="lg">
        View My Work
      </Button>
      <Button onClick={onGetInTouch} variant="outline" size="lg">
        Get In Touch
      </Button>
      <Button
        onClick={() => window.open('https://resume.tsou.me', '_blank')}
        variant="secondary"
        size="lg"
        icon={ExternalLink}
        iconPosition="right"
      >
        Resume
      </Button>
    </div>
  );
}
