import React, { useState } from 'react'
import { FormData } from './ContactForm'

interface Step3Props {
  data: FormData
  updateData: (fields: Partial<FormData>) => void
  onSubmit: () => void
  onBack: () => void
  isSubmitting: boolean
}

const Step3: React.FC<Step3Props> = ({ data, updateData, onSubmit, onBack, isSubmitting }) => {
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!agreed) {
      setError('Please agree to the privacy policy to continue.')
      return
    }
    onSubmit()
  }

  return (
    <div className="form-step active">
      <h3 className="step-title">Final Review</h3>
      <p className="step-subtitle">Almost there! Add any final details and submit your request.</p>

      <div className="review-summary">
        <div className="review-item">
          <span className="review-label">Enquiry Type</span>
          <span className="review-value">
            {data.enquiry_type === 'quote' ? 'Clinical Quote' : 'Swab Test'}
          </span>
        </div>
        <div className="review-item">
          <span className="review-label">Contact</span>
          <span className="review-value">{data.first_name} {data.last_name} ({data.email})</span>
        </div>
        {(data.enquiry_type === 'quote' || data.enquiry_type === 'swab') && (
          <div className="review-item">
            <span className="review-label">Facility</span>
            <span className="review-value">{data.facility_type} in {data.suburb_or_postcode}</span>
          </div>
        )}
        {data.enquiry_type === 'swab' && (
          <>
            <div className="review-item">
              <span className="review-label">Swab Purpose</span>
              <span className="review-value">{data.swab_purpose}</span>
            </div>
            {data.swab_points && (
              <div className="review-item">
                <span className="review-label">Swab Points</span>
                <span className="review-value">
                  {data.swab_points === '50-plus' ? '50+ points' : data.swab_points === 'not-sure' ? 'Not sure' : `${data.swab_points} points`}
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {(data.enquiry_type === 'quote' || data.enquiry_type === 'swab') && (
        <div className="field-group" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <label className="field-label">Required Compliance Standards <span className="optional">(select all that apply)</span></label>
          <div className="compliance-checklist" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            {[
              { id: 'racgp', label: 'RACGP Standards (GP Clinics)' },
              { id: 'aged_care', label: 'Aged Care Quality Standards (Standards 4 & 5)' },
              { id: 'nsqhs', label: 'National Safety and Quality Health Service (NSQHS) Standards' },
              { id: 'infection_control', label: 'Standard Infection Control Protocols (CAP/ATP)' }
            ].map(item => {
              const isChecked = data.compliance_needs.includes(item.label)
              return (
                <label key={item.id} className="checkbox-field" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    style={{ marginTop: '3px' }}
                    checked={isChecked}
                    onChange={e => {
                      if (e.target.checked) {
                        updateData({ compliance_needs: [...data.compliance_needs, item.label] })
                      } else {
                        updateData({ compliance_needs: data.compliance_needs.filter(x => x !== item.label) })
                      }
                    }}
                  />
                  <span className="checkbox-text" style={{ fontSize: '14px', lineHeight: '1.4' }}>{item.label}</span>
                </label>
              )
            })}
          </div>
        </div>
      )}

      <div className="field-group">
        <label className="field-label">Additional Comments <span className="optional">(optional)</span></label>
        <textarea 
          className="field-textarea" 
          placeholder="Is there anything else we should know? Special access requirements, specific timing, etc…" 
          rows={4}
          value={data.comments}
          onChange={e => updateData({ comments: e.target.value })}
        />
      </div>

      <div className="field-group">
        <label className="checkbox-field">
          <input 
            type="checkbox" 
            checked={agreed}
            onChange={e => {
              setAgreed(e.target.checked)
              if (e.target.checked) setError('')
            }}
          />
          <span className="checkbox-text">
            I agree to the <a href="#" onClick={e => e.preventDefault()}>Privacy Policy</a> and consent to being contacted regarding this enquiry.
          </span>
        </label>
        {error && <div className="field-error visible" style={{ marginTop: '0.5rem' }}>{error}</div>}
      </div>

      <div className="form-nav">
        <button type="button" className="btn-back" onClick={onBack} disabled={isSubmitting}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <button 
          type="button" 
          className={`btn-submit ${isSubmitting ? 'loading' : ''}`} 
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
          {!isSubmitting && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>}
        </button>
      </div>

      <p className="privacy-note" style={{ textAlign: 'center', marginTop: '16px', lineHeight: '1.5' }}>
        <strong>Clinical Assurance:</strong> All staff are infection-control certified, police checked, and comply with clinical sanitisation standards. Your clinical data is protected.
      </p>
    </div>
  )
}

export default Step3
