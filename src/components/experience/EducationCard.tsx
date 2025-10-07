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
          <ul className="education-highlights">
            {education.highlights.map((highlight, index) => (
              <li key={index} className="education-highlight-item">
                <span className="education-highlight-bullet">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
