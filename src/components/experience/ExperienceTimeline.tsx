import { ExperienceCard } from './ExperienceCard';
import './Experience.css';

interface Post {
  title: string;
  subtitle?: string;
  url: string;
  orgUrl?: string;
  date: string;
}

interface Experience {
  type: string;
  title: string;
  organization: string;
  orgUrl?: string;
  period: string;
  location: string;
  description: string[];
  posts?: Post[];
  icon: any;
  color: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="experience-timeline">
      <div className="experience-timeline-line"></div>
      <div className="experience-timeline-items">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}
