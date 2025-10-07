import { LucideIcon, Calendar, MapPin, ExternalLink } from 'lucide-react';
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
  icon: LucideIcon;
  color: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const Icon = experience.icon;

  return (
    <div className="experience-card">
      <div className={`experience-card-dot experience-card-dot-${experience.color}`}></div>

      <div className={`experience-card-content experience-card-bg-${experience.color}`}>
        <div className="experience-card-header">
          <div className="experience-card-icon-container">
            <Icon className={`experience-card-icon experience-card-icon-${experience.color}`} />
          </div>
          <div className="experience-card-info">
            <div className="experience-card-organization">
              <h3 className={`experience-card-organization-title experience-card-organization-title-${experience.color}`}>
                {experience.organization}
              </h3>
              {experience.orgUrl && (
                <a
                  href={experience.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-card-org-link"
                  title="Visit organization website"
                >
                  <ExternalLink className="experience-card-org-link-icon" />
                </a>
              )}
            </div>
            <div className="experience-card-title">
              {experience.title}
            </div>
            <div className="experience-card-meta">
              <div className="experience-card-meta-item">
                <Calendar className="experience-card-meta-icon" />
                {experience.period}
              </div>
              <div className="experience-card-meta-item">
                <MapPin className="experience-card-meta-icon" />
                {experience.location}
              </div>
            </div>
            <ul className="experience-card-description">
              {experience.description.map((item, idx) => (
                <li key={idx} className="experience-card-description-item">
                  <span className={`experience-card-description-bullet-${experience.color}`}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            {experience.posts && experience.posts.length > 0 && (
              <div className="experience-posts">
                <div className="experience-posts-list">
                  {experience.posts.map((post, idx) => (
                    <a
                      key={idx}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-post-link"
                    >
                      <div className="experience-post-content">
                        <div className="experience-post-title">
                          {post.title}
                        </div>
                        {post.subtitle && (
                          <div className="experience-post-subtitle">
                            {post.subtitle}
                          </div>
                        )}
                        <div className="experience-post-meta">
                          <div className="experience-post-date">
                            {post.date}
                          </div>
                          {post.orgUrl && (
                            <>
                              <span className="experience-post-separator">•</span>
                              <span className="experience-post-org-label">
                                Organization
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="experience-post-icon" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
