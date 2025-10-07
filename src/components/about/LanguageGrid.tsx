import './About.css';

export function LanguageGrid() {
  const languages = [
    { name: 'Python', color: 'blue' },
    { name: 'C++', color: 'blue-dark' },
    { name: 'C', color: 'gray' },
    { name: 'Shell', color: 'green' },
    { name: 'JavaScript', color: 'yellow' },
    { name: 'Verilog', color: 'purple' },
    { name: 'Go', color: 'cyan' },
    { name: 'Cuda', color: 'green-dark' },
  ];

  return (
    <div className="language-grid-container">
      <div className="language-grid-card">
        <h5 className="language-grid-title">
          Most Used Languages
        </h5>
        <div className="language-grid-list">
          {languages.map((lang) => (
            <div key={lang.name} className="language-item">
              <div className={`language-dot language-dot-${lang.color}`}></div>
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
