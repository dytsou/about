import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldShowToggle = isMobile;
  const isContentVisible = !isMobile || isExpanded;

  return (
    <div className={`language-grid-container ${!isContentVisible ? 'language-grid-collapsed' : ''}`}>
      <div className="language-grid-card">
        <h5 className="language-grid-title">
          Most Used Languages
          {shouldShowToggle && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="language-grid-toggle"
              aria-label={isExpanded ? 'Collapse languages' : 'Expand languages'}
            >
              {isExpanded ? (
                <ChevronUp className="language-grid-toggle-icon" />
              ) : (
                <ChevronDown className="language-grid-toggle-icon" />
              )}
            </button>
          )}
        </h5>
        {isContentVisible && (
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
        )}
      </div>
    </div>
  );
}
