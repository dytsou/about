import { useState, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldShowToggle = isMobile;
  const isContentVisible = !isMobile || isExpanded;

  return (
    <div className="education-card">
      <div className="education-card-content">
        <div className="education-icon-container">
          <GraduationCap className="education-icon" />
        </div>
        <div className="education-info">
          <h3 className="education-institution">
            {education.institution}
          </h3>
          <div className="education-degree">
            {education.degree}
          </div>
          <div className="education-meta">
            <div className="education-meta-item">
              <Calendar className="education-meta-icon" />
              {education.period}
            </div>
            <div className="education-meta-item">
              <MapPin className="education-meta-icon" />
              {education.location}
            </div>
          </div>
          {isContentVisible && (
            <ul className="education-highlights">
              {education.highlights.map((highlight, index) => (
                <li key={index} className="education-highlight-item">
                  <span className="education-highlight-bullet">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          {shouldShowToggle && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="education-highlights-toggle"
              aria-label={isExpanded ? 'Collapse highlights' : 'Expand highlights'}
            >
              {isExpanded ? 'See less' : 'See more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
