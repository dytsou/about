import './Contact.css';

export function OpportunityList() {
  const opportunities = [
    { label: 'Backend Development Roles', color: 'blue' },
    { label: 'Full-Stack Engineering Positions', color: 'cyan' },
    { label: 'Research Collaborations', color: 'green' },
    { label: 'Quality Assurance Engineering Positions', color: 'purple' }
  ];

  return (
    <div className="opportunity-container">
      <h4 className="opportunity-title">
        Looking for opportunities in:
      </h4>
      <div className="opportunity-grid">
        {opportunities.map((opp, index) => (
          <div key={index} className="opportunity-item">
            <span className={`opportunity-dot opportunity-dot-${opp.color}`}></span>
            <span className="opportunity-label">{opp.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
