import './About.css';

const LANGUAGES: { name: string; color: string }[] = [
  { name: 'Python', color: '#3572A5' },
  { name: 'C++', color: '#f34b7d' },
  { name: 'C', color: '#555555' },
  { name: 'Shell', color: '#89e051' },
  { name: 'JavaScript', color: '#f1e05a' },
  { name: 'Verilog', color: '#b2b7f8' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'Cuda', color: '#3A4E3A' },
];

export function LanguageGrid() {
  return (
    <div className="language-grid-container">
      <div className="language-grid-card">
        <h5 className="language-grid-title">
          Most Used Languages
        </h5>
        <div className="language-grid-list">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="language-item">
              <div
                className={`language-dot`}
                style={{ backgroundColor: lang.color || '#9ca3af' }}
              ></div>
              <div className={`language-name ${lang.name.length > 10 ? 'language-name-xs' : 'language-name-sm'
                }`}>
                {lang.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
