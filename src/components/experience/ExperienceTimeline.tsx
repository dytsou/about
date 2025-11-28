import { ExperienceCard } from './ExperienceCard';
import './Experience.css';
import { Experience } from './types';

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
