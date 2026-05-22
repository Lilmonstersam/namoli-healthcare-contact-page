import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* Clinical standards checklist */}
      <div className="sidebar-card">
        <h4>Clinical Standards</h4>
        <div className="clinical-checks" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF5E84" strokeWidth="3" style={{ flexShrink: 0, marginTop: '3px' }}><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>RACGP Standards:</strong> Tailored cleaning protocols aligned with clinical guidelines.</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF5E84" strokeWidth="3" style={{ flexShrink: 0, marginTop: '3px' }}><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Aged Care Standards:</strong> Compliant with Quality Standards 4 and 5.</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', fontSize: '14px', alignItems: 'flex-start' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF5E84" strokeWidth="3" style={{ flexShrink: 0, marginTop: '3px' }}><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Zero Cross-Contamination:</strong> Strict colour-coded microfibre system.</span>
          </div>
        </div>
      </div>

      {/* Healthcare Testimonial */}
      <div className="testimonial-card">
        <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
        <p className="testimonial-text">"Namoli's healthcare-certified team transformed our clinic's sanitation. Their attention to detail around high-touch clinical surfaces gives our staff and patients complete peace of mind. Excellent communication."</p>
        <div className="testimonial-author">Dr Amanda Sterling</div>
        <div className="testimonial-role">Practice Principal, Bayside Medical Centre</div>
      </div>

      {/* What Happens Next */}
      <div className="sidebar-card">
        <h4>What Happens Next?</h4>
        <div className="process-steps">
          <div className="process-step">
            <span className="process-step-num">1</span>
            <span>We review your facility requirements and call to discuss your clinical needs.</span>
          </div>
          <div className="process-step">
            <span className="process-step-num">2</span>
            <span>We arrange a free on-site clinical risk assessment and cleaning audit.</span>
          </div>
          <div className="process-step">
            <span className="process-step-num">3</span>
            <span>You receive a detailed Clinical Assurance Proposal and quotation.</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
