import { Mail, Github, Linkedin } from 'lucide-react';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { ContactCard } from './ContactCard';
import { OpportunityList } from './OpportunityList';
import './Contact.css';

const CONTACT_CARDS = [
  {
    platform: 'linkedin' as const,
    title: 'LinkedIn',
    subtitle: 'https://www.linkedin.com/in/dytsou/',
    url: 'https://www.linkedin.com/in/dytsou/',
    icon: Linkedin
  },
  {
    platform: 'github' as const,
    title: 'GitHub',
    subtitle: '@dytsou',
    url: 'https://github.com/dytsou',
    icon: Github
  },
  {
    platform: 'email' as const,
    title: 'Email Me',
    subtitle: 'contact@dy.tsou.me',
    url: 'mailto:contact@dy.tsou.me',
    icon: Mail
  }
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        title="Get In Touch"
        subtitle="I'm always open to discussing new projects, opportunities, or just having a chat about technology"
      />

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-section">
            <h3 className="contact-title">
              Let's Connect
            </h3>
            <div className="contact-grid">
              {CONTACT_CARDS.map((card, index) => (
                <ContactCard
                  key={index}
                  platform={card.platform}
                  title={card.title}
                  subtitle={card.subtitle}
                  url={card.url}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
          <OpportunityList />
        </div>
      </div>
    </Section>
  );
}