interface ExperienceDescriptionProps {
  description: string[];
  color: string;
}

export function ExperienceDescription({ description, color }: ExperienceDescriptionProps) {
  if (description.length === 0) return null;

  return (
    <ul className="experience-card-description">
      {description.map((item, idx) => (
        <li key={idx} className="experience-card-description-item">
          <span className={`experience-card-description-bullet-${color}`}>•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

