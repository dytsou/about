import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { TechTag } from '../ui/TechTag';
import './ProjectCard.css';

interface Project {
  id: string;
  title: string;
  description: string;
  short_description: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  projectIndex: number;
  cardStyle: string;
  isMobile: boolean;
  getProjectIconAndColors: (project: Project) => { Icon: any; iconClass: string };
}

export function ProjectCard({
  project,
  projectIndex,
  cardStyle,
  isMobile,
  getProjectIconAndColors
}: ProjectCardProps) {
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());
  const [expandedTags, setExpandedTags] = useState<Set<number>>(new Set());

  const toggleDescription = (projectIndex: number) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex);
      } else {
        newSet.add(projectIndex);
      }
      return newSet;
    });
  };

  const toggleTags = (projectIndex: number) => {
    setExpandedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex);
      } else {
        newSet.add(projectIndex);
      }
      return newSet;
    });
  };

  const { Icon, iconClass } = getProjectIconAndColors(project);

  return (
    <div className={`project-card ${isMobile ? 'project-card-mobile' : ''} ${cardStyle}`}>
      <div className="project-card-content">
        <div className="project-card-main">
          <div>
            <h3 className="project-title">
              <span className="project-title-content">
                <Icon className={`project-icon ${iconClass}`} />
                <span>{project.title}</span>
              </span>
            </h3>
            <div className="project-description-container">
              <p className={`project-description ${expandedDescriptions.has(projectIndex) ? '' : 'project-description-collapsed'}`}>
                {project.description}
              </p>
              <button
                onClick={() => toggleDescription(projectIndex)}
                className="project-description-toggle"
              >
                {expandedDescriptions.has(projectIndex) ? 'See less' : 'See more'}
              </button>
            </div>
          </div>

          <div className="project-technologies">
            {project.technologies.slice(0, expandedTags.has(projectIndex) ? project.technologies.length : 5).map((tech: string, index: number) => (
              <TechTag key={index} technology={tech} />
            ))}
            {project.technologies.length > 5 && !expandedTags.has(projectIndex) && (
              <button
                onClick={() => toggleTags(projectIndex)}
                className="project-tech-more-button"
              >
                +{project.technologies.length - 5} more
              </button>
            )}
            {expandedTags.has(projectIndex) && project.technologies.length > 5 && (
              <button
                onClick={() => toggleTags(projectIndex)}
                className="project-tech-less-button"
              >
                Show less
              </button>
            )}
          </div>
        </div>

        <div className="project-actions">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-button project-action-github"
            >
              <Github className="project-action-icon" />
              Code
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-button project-action-demo"
            >
              <ExternalLink className="project-action-icon" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
