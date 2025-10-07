import './Contact.css';

interface ContactCardProps {
  platform: 'linkedin' | 'github' | 'email';
  title: string;
  subtitle: string;
  url: string;
  icon: any;
}

export function ContactCard({ platform, title, subtitle, url, icon: Icon }: ContactCardProps) {
  return (
    <a
      href={url}
      target={platform === 'email' ? undefined : '_blank'}
      rel={platform === 'email' ? undefined : 'noopener noreferrer'}
      className={`contact-card contact-card-${platform} group`}
    >
      <div className={`contact-card-icon contact-card-icon-${platform}`}>
        <Icon className="contact-card-icon-svg" />
      </div>
      <div className="contact-card-content">
        <div className="contact-card-title">
          {title}
        </div>
        <div className={`contact-card-subtitle contact-card-subtitle-${platform}`}>
          {subtitle}
        </div>
      </div>
    </a>
  );
}
