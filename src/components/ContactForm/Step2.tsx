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
    if (data.enquiry_type === 'quote') {
      if (!data.facility_type) newErrors.facility_type = 'Please select a facility type'
      if (!data.suburb_or_postcode.trim()) newErrors.suburb_or_postcode = 'Please enter the suburb or postcode'
    } else if (data.enquiry_type === 'franchise') {
      if (!data.franchise_region) newErrors.franchise_region = 'Please select a preferred region'
    } else if (data.enquiry_type === 'jobs') {
      if (!data.job_role) newErrors.job_role = 'Please select a position of interest'
      if (!data.job_location) newErrors.job_location = 'Please select a preferred location'
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
      {/* QUOTE FIELDS */}
      {data.enquiry_type === 'quote' && (
        <div className="conditional-fields visible">
          <h3 className="step-title">Facility Details</h3>
          <p className="step-subtitle">Tell us about your facility and cleaning requirements.</p>

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

      {/* FRANCHISE FIELDS */}
      {data.enquiry_type === 'franchise' && (
        <div className="conditional-fields visible">
          <h3 className="step-title">Franchise Interest</h3>
          <p className="step-subtitle">Tell us about your interest in a Namoli franchise.</p>

          <div className="field-group">
            <label className="field-label">Preferred Region <span className="required">*</span></label>
            <select 
              className={`field-select ${errors.franchise_region ? 'error' : ''}`}
              value={data.franchise_region}
              onChange={e => updateData({ franchise_region: e.target.value })}
            >
              <option value="" disabled>Select a region…</option>
              <option value="Brisbane">Brisbane &amp; QLD</option>
              <option value="Melbourne">Melbourne &amp; VIC</option>
              <option value="Sydney">Sydney &amp; NSW</option>
              <option value="Other">Other / Flexible</option>
            </select>
            {errors.franchise_region && <div className="field-error visible">{errors.franchise_region}</div>}
          </div>

          <div className="field-group">
            <label className="field-label">Investment Budget <span className="optional">(optional)</span></label>
            <select 
              className="field-select"
              value={data.franchise_investment}
              onChange={e => updateData({ franchise_investment: e.target.value })}
            >
              <option value="" disabled>Select a range…</option>
              <option value="under-30k">Under $30,000</option>
              <option value="30k-60k">$30,000 - $60,000</option>
              <option value="60k-100k">$60,000 - $100,000</option>
              <option value="100k-plus">$100,000+</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
          </div>

          <div className="field-group">
            <label className="field-label">Relevant Experience <span className="optional">(optional)</span></label>
            <textarea 
              className="field-textarea" 
              placeholder="Tell us about your background and what interests you about a cleaning franchise…" 
              rows={3}
              value={data.franchise_experience}
              onChange={e => updateData({ franchise_experience: e.target.value })}
            />
          </div>
        </div>
      )}

      {/* JOBS FIELDS */}
      {data.enquiry_type === 'jobs' && (
        <div className="conditional-fields visible">
          <h3 className="step-title">Job Application</h3>
          <p className="step-subtitle">We're always looking for dedicated cleaning professionals.</p>

          <div className="field-group">
            <label className="field-label">Position of Interest <span className="required">*</span></label>
            <select 
              className={`field-select ${errors.job_role ? 'error' : ''}`}
              value={data.job_role}
              onChange={e => updateData({ job_role: e.target.value })}
            >
              <option value="" disabled>Select a role…</option>
              <option value="cleaner">Cleaner / Team Member</option>
              <option value="team-leader">Team Leader / Supervisor</option>
              <option value="area-manager">Area Manager</option>
              <option value="admin">Administration / Support</option>
              <option value="other">Other</option>
            </select>
            {errors.job_role && <div className="field-error visible">{errors.job_role}</div>}
          </div>

          <div className="field-group">
            <label className="field-label">Preferred Location <span className="required">*</span></label>
            <select 
              className={`field-select ${errors.job_location ? 'error' : ''}`}
              value={data.job_location}
              onChange={e => updateData({ job_location: e.target.value })}
            >
              <option value="" disabled>Select a location…</option>
              <option value="Brisbane">Brisbane &amp; QLD</option>
              <option value="Melbourne">Melbourne &amp; VIC</option>
              <option value="Sydney">Sydney &amp; NSW</option>
              <option value="Flexible">Flexible / Willing to Relocate</option>
            </select>
            {errors.job_location && <div className="field-error visible">{errors.job_location}</div>}
          </div>

          <div className="field-group">
            <label className="field-label">Upload CV / Resume <span className="optional">(optional)</span></label>
            <div className="upload-zone" tabIndex={0} role="button">
              <input 
                type="file" 
                accept=".pdf,.doc,.docx"
                onChange={e => updateData({ cv_upload: e.target.files ? e.target.files[0] : null })}
              />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <div className="upload-zone-text">
                {data.cv_upload ? <strong>{data.cv_upload.name}</strong> : <><strong>Click to upload</strong> or drag and drop</>}
              </div>
              <div className="upload-zone-hint">PDF, DOC, DOCX: Max 10&nbsp;MB</div>
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Availability <span className="optional">(optional)</span></label>
            <select 
              className="field-select"
              value={data.job_availability}
              onChange={e => updateData({ job_availability: e.target.value })}
            >
              <option value="" disabled>When can you start?</option>
              <option value="immediately">Immediately</option>
              <option value="1-week">Within 1 Week</option>
              <option value="2-weeks">Within 2 Weeks</option>
              <option value="1-month">Within 1 Month</option>
              <option value="negotiable">Negotiable</option>
            </select>
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
