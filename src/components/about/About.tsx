import { useGitHub } from '../../hooks/useGitHub';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { ProfileImage } from './ProfileImage';
import { AboutContent } from './AboutContent';
import { StatsCards } from './StatsCards';
import { LanguageGrid } from './LanguageGrid';

export function About() {
  const { stats } = useGitHub();

  return (
    <Section id="about">
      <SectionHeader title="About Me" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ProfileImage />

        <div className="space-y-6">
          <AboutContent />
          <StatsCards publicRepos={stats?.public_repos} />
          <LanguageGrid />
        </div>
      </div>
    </Section>
  );
}

