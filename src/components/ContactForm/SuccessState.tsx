import React from 'react'

interface SuccessStateProps {
  enquiryType?: 'quote'
}

const SuccessState: React.FC<SuccessStateProps> = () => {
  return (
    <div className="success-state visible">
      <div className="success-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2 className="success-title">Enquiry Received</h2>
      <p className="success-message">
        Thank you for contacting Namoli Healthcare. Our clinical solutions advisor will call you to discuss your facility's requirements and arrange a clinical cleaning audit.
      </p>
      <div className="success-actions">
        <button 
          className="btn-primary" 
          onClick={() => window.location.href = 'https://namoli.com.au'}
        >
          Return to Homepage
        </button>
        <button 
          className="btn-secondary" 
          onClick={() => window.location.reload()}
        >
          Send Another Enquiry
        </button>
      </div>
      
      <div className="success-footer">
        <p>Need urgent assistance? Call us on <a href="tel:1300626654">1300 626 654</a></p>
      </div>
    </div>
  )
}

export default SuccessState
