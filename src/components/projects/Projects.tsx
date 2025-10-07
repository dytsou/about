import { Github, Star } from 'lucide-react';
import { useGitHub } from '../../hooks/useGitHub';
import { ProjectCarousel } from './ProjectCarousel';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import './Projects.css';

const STATIC_PROJECTS = [
  {
    id: '1',
    title: 'SDC Core System',
    description: 'Backend infrastructure for NYCU Software Development Club. Built a robust RESTful API system with Go, featuring Docker containerization and PostgreSQL database management.',
    short_description: 'Backend infrastructure for Software Development Club with Go, Docker, and PostgreSQL',
    technologies: ['Go', 'RESTful API', 'Docker', 'PostgreSQL'],
    github_url: 'https://github.com/NYCU-SDC/core-system-backend',
    image_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    order_index: 1
  },
  {
    id: '2',
    title: 'CAIender',
    description: 'AI-powered calendar platform built during MC Hackathon 2025. Leverages React.js and Vite for a responsive frontend, GraphQL for efficient data queries, and integrates with LLM for intelligent scheduling.',
    short_description: 'AI calendar platform with React.js, GraphQL, and LLM integration',
    technologies: ['React.js', 'Vite', 'GraphQL', 'DynamoDB', 'LLM'],
    github_url: 'https://github.com/MCHackathon2025/CAIender-frontend',
    image_url: 'https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    order_index: 2
  },
  {
    id: '3',
    title: 'Recyeco',
    description: 'Sustainable recycling application developed with GDSC-CV. Built using Flutter for cross-platform mobile development, focusing on environmental consciousness and user-friendly recycling guidance.',
    short_description: 'Sustainable recycling mobile app built with Flutter',
    technologies: ['Dart', 'Flutter', 'Mobile Development'],
    github_url: 'https://github.com/GDSC-CV/recyeco',
    image_url: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    order_index: 3
  },
  {
    id: '4',
    title: 'BallQuest720',
    description: 'Immersive 3D ball-catching game developed in C++ with OpenGL. Features advanced graphics rendering, physics simulation, and dynamic difficulty adjustment.',
    short_description: '3D ball-catching game with C++ and OpenGL',
    technologies: ['C++', 'OpenGL', 'Game Development'],
    github_url: 'https://github.com/dytsou/BallQuest720',
    image_url: 'https://images.pexels.com/photos/163432/basketball-dunk-blue-game-163432.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    order_index: 4
  },
  {
    id: '5',
    title: 'Dungeon',
    description: 'Text-based adventure game showcasing object-oriented programming principles in C++. Features procedural dungeon generation, inventory management, and combat system.',
    short_description: 'Text-based adventure game in C++',
    technologies: ['C++', 'Game Development', 'OOP'],
    github_url: 'https://github.com/dytsou/Dungeon',
    image_url: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    order_index: 5
  },
  {
    id: '6',
    title: 'Reversi',
    description: 'Classic Reversi (Othello) board game implementation using LabVIEW. Features AI opponent with minimax algorithm, visual board representation, and move validation.',
    short_description: 'Reversi board game implemented in LabVIEW',
    technologies: ['LabVIEW', 'Game Development', 'AI'],
    github_url: 'https://github.com/dytsou/Reversi',
    image_url: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    order_index: 6
  }
];

export function Projects() {
  const { repos, loading: reposLoading } = useGitHub();

  // Merge all projects with featured projects first, then others
  const allProjects = [
    ...STATIC_PROJECTS.filter(p => p.featured),
    ...STATIC_PROJECTS.filter(p => !p.featured)
  ];

  return (
    <Section id="projects">
      <SectionHeader
        title="Featured Projects"
        subtitle="A collection of projects showcasing my skills in backend development, full-stack applications, and game development"
      />

      {allProjects.length > 0 && (
        <div>
          <ProjectCarousel projects={allProjects} featured />
        </div>
      )}

      {!reposLoading && repos.length > 0 && (
        <div className="github-activity">
          <h3 className="github-activity-title">
            Recent GitHub Activity
          </h3>
          <div className="github-repos-grid">
            {repos.slice(0, 6).map(repo => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
              >
                <div className="repo-card-header">
                  <h4 className="repo-card-title">
                    {repo.name}
                  </h4>
                  <Github className="repo-card-icon" />
                </div>
                <p className="repo-card-description">
                  {repo.description || 'No description available'}
                </p>
                <div className="repo-card-footer">
                  {repo.language && (
                    <span className="language-indicator">
                      <span className="language-dot"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="star-indicator">
                    <Star className="star-icon" />
                    {repo.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="github-button-container">
            <a
              href="https://github.com/dytsou"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <Github className="github-button-icon" />
              View More on GitHub
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}

