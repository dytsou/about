import { useGitHub } from '../../hooks/useGitHub';
import { ProjectCarousel } from './ProjectCarousel';
import { GitHubActivity } from './GitHubActivity';
import { PROJECTS_CONTENTS } from '../contents/Projects';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';

export function Projects() {
  const { repos, loading: reposLoading } = useGitHub();

  // Merge all projects with featured projects first, then others
  const allProjects = [
    ...PROJECTS_CONTENTS.filter(p => p.featured),
    ...PROJECTS_CONTENTS.filter(p => !p.featured)
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

      <GitHubActivity repos={repos} loading={reposLoading} />
    </Section>
  );
}

