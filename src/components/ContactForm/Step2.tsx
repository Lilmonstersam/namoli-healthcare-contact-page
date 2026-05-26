import React, { useState } from 'react'
import { FormData } from './ContactForm'

interface Step2Props {
  data: FormData
  updateData: (fields: Partial<FormData>) => void
  onNext: () => void
  onBack: () => void
}

const Step2: React.FC<Step2Props> = ({ data, updateData, onNext, onBack }) => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (data.enquiry_type === 'quote' || data.enquiry_type === 'swab') {
      if (!data.facility_type) newErrors.facility_type = 'Please select a facility type'
      if (!data.suburb_or_postcode.trim()) newErrors.suburb_or_postcode = 'Please enter the suburb or postcode'
    }
    if (data.enquiry_type === 'swab') {
      if (!data.swab_purpose) newErrors.swab_purpose = 'Please select a swab test purpose'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) {
      onNext()
    }
  }

  return (
    <div className="form-step active">
      {/* SHARED FIELDS FOR QUOTE & SWAB */}
      {(data.enquiry_type === 'quote' || data.enquiry_type === 'swab') && (
        <div className="conditional-fields visible">
          <h3 className="step-title">
            {data.enquiry_type === 'swab' ? 'Swab Test Details' : 'Facility Details'}
          </h3>
          <p className="step-subtitle">
            {data.enquiry_type === 'swab' 
              ? 'Tell us about your facility and swab testing requirements.' 
              : 'Tell us about your facility and cleaning requirements.'}
          </p>

          <div className="field-group">
            <label className="field-label">Facility Type <span className="required">*</span></label>
            <div className={`service-type-grid ${errors.facility_type ? 'error-ring' : ''}`} role="radiogroup">
              {[
                { 
                  value: 'Medical Centre / GP Clinic', 
                  label: 'GP Clinic', 
                  icon: (
                    <>
                      <path d="M4.5 3v5a7.5 7.5 0 0 0 15 0V3" />
                      <path d="M12 10.5v5.5" />
                      <path d="M8 22h8" />
                      <circle cx="12" cy="19" r="3" />
                    </>
                  ) 
                },
                { 
                  value: 'Aged Care Facility', 
                  label: 'Aged Care', 
                  icon: (
                    <>
                      <path d="M12 5.5c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l5.5 5.5 5.5-5.5c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0z" />
                      <path d="M4 14c2 0 4 2 5 4M20 14c-2 0-4 2-5 4" strokeLinecap="round" />
                    </>
                  ) 
                },
                { 
                  value: 'Hospital / Day Surgery', 
                  label: 'Hospital', 
                  icon: (
                    <>
                      <path d="M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M12 9v4M10 11h4" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  ) 
                },
                { 
                  value: 'Dental Practice', 
                  label: 'Dental', 
                  icon: (
                    <>
                      <path d="M12 2C8.5 2 6 3 6 6.5S7.5 13 8.5 15C9.5 17 9 20 10.5 21.5c1.5 1.5 2.5.5 2.5-1 0-1.5-.5-2.5 1-4 1.5 1.5 1 2.5 1 4 0 1.5 1 2.5 2.5 1C19 20 18.5 17 19.5 15c1-2 2.5-5 2.5-8.5S15.5 2 12 2z" strokeLinejoin="round" />
                    </>
                  ) 
                },
                { 
                  value: 'Specialist / Allied Health', 
                  label: 'Specialist', 
                  icon: (
                    <>
                      <path d="M6 22h12M14 22a6 6 0 0 0-6-6M9 14h6M12 3a3 3 0 0 1 3 3v8a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM15 14l3 3" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  ) 
                },
                { 
                  value: 'Other Healthcare Facility', 
                  label: 'Other Clinic', 
                  icon: (
                    <>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
                      <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                    </>
                  ) 
                }
              ].map(opt => (
                <label key={opt.value} className="service-type-option">
                  <input 
                    type="radio" 
                    name="facility_type" 
                    value={opt.value} 
                    checked={data.facility_type === opt.value}
                    onChange={e => updateData({ facility_type: e.target.value })}
                  />
                  <div className="service-type-card">
                    <div className="service-type-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{opt.icon}</svg>
                    </div>
                    <span className="service-type-name">{opt.label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.facility_type && <div className="field-error visible">{errors.facility_type}</div>}
          </div>

          {/* Cleaning Frequency (Clinical Quote flow only) */}
          {data.enquiry_type === 'quote' && (
            <div className="field-group">
              <label className="field-label">Cleaning Frequency</label>
              <div className="radio-pills">
                {[
                  { value: 'multiple-daily', label: 'Multiple Daily' },
                  { value: 'daily', label: 'Daily' },
                  { value: '3-5x-week', label: '3-5x Weekly' },
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'one-off', label: 'One-off Deep Clean' },
                  { value: 'not-sure', label: 'Not Sure' }
                ].map(freq => (
                  <label key={freq.value} className="radio-pill">
                    <input 
                      type="radio" 
                      name="frequency" 
                      value={freq.value} 
                      checked={data.frequency === freq.value}
                      onChange={e => updateData({ frequency: e.target.value })}
                    />
                    <span className="radio-pill-label">{freq.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Swab Test specific fields */}
          {data.enquiry_type === 'swab' && (
            <>
              <div className="field-group">
                <label className="field-label">Swab Test Purpose <span className="required">*</span></label>
                <select 
                  className={`field-select ${errors.swab_purpose ? 'error' : ''}`}
                  value={data.swab_purpose}
                  onChange={e => updateData({ swab_purpose: e.target.value })}
                >
                  <option value="" disabled>Select purpose…</option>
                  <option value="Routine Hygiene Audit">Routine Hygiene Audit</option>
                  <option value="Post-Outbreak Verification">Post-Outbreak Verification</option>
                  <option value="Infection Control Compliance">Infection Control Compliance</option>
                  <option value="Other / Special Request">Other / Special Request</option>
                </select>
                {errors.swab_purpose && <div className="field-error visible">{errors.swab_purpose}</div>}
              </div>

              <div className="field-group">
                <label className="field-label">Estimated Swab Points</label>
                <div className="radio-pills">
                  {[
                    { value: '10-25', label: '10 - 25 points' },
                    { value: '25-50', label: '25 - 50 points' },
                    { value: '50-plus', label: '50+ points' },
                    { value: 'not-sure', label: 'Not Sure' }
                  ].map(pts => (
                    <label key={pts.value} className="radio-pill">
                      <input 
                        type="radio" 
                        name="swab_points" 
                        value={pts.value} 
                        checked={data.swab_points === pts.value}
                        onChange={e => updateData({ swab_points: e.target.value })}
                      />
                      <span className="radio-pill-label">{pts.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="field-row">
            <div className="field-group">
              <label className="field-label">Postcode or Suburb <span className="required">*</span></label>
              <input 
                type="text" 
                className={`field-input ${errors.suburb_or_postcode ? 'error' : ''}`}
                placeholder="e.g. 4000 or Brisbane…" 
                value={data.suburb_or_postcode}
                onChange={e => updateData({ suburb_or_postcode: e.target.value })}
              />
              <div className="field-hint">Enter your facility's postcode or suburb</div>
              {errors.suburb_or_postcode && <div className="field-error visible">{errors.suburb_or_postcode}</div>}
            </div>
            <div className="field-group">
              <label className="field-label">Approx. Floor Area <span className="optional">(optional)</span></label>
              <input 
                type="text" 
                className="field-input" 
                placeholder="e.g. 500 sqm…" 
                value={data.approx_sqm}
                onChange={e => updateData({ approx_sqm: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      <div className="form-nav">
        <button type="button" className="btn-back" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <button type="button" className="btn-next" onClick={handleNext}>
          Next: Review &amp; Submit
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Step2
