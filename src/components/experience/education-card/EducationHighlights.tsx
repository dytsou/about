interface EducationHighlightsProps {
  highlights: string[];
}

export function EducationHighlights({ highlights }: EducationHighlightsProps) {
  if (highlights.length === 0) return null;

  return (
    <ul className="education-highlights">
      {highlights.map((highlight, index) => (
        <li key={index} className="education-highlight-item">
          <span className="education-highlight-bullet">•</span>
          {highlight}
        </li>
      ))}
    </ul>
  );
}

