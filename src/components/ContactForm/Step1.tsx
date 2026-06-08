import React, { useState } from 'react'
import { FormData, EnquiryType } from './ContactForm'

interface Step1Props {
  data: FormData
  updateData: (fields: Partial<FormData>) => void
  onNext: () => void
  onTypeChange: (type: EnquiryType) => void
}

const Step1: React.FC<Step1Props> = ({ data, updateData, onNext, onTypeChange }) => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!data.first_name.trim()) newErrors.first_name = 'Please enter your first name'
    if (!data.last_name.trim()) newErrors.last_name = 'Please enter your last name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Please enter a valid email address'
    if (data.phone.replace(/\s/g, '').length < 8) newErrors.phone = 'Please enter a valid phone number'
    if (data.enquiry_type === 'quote' && !data.company.trim()) newErrors.company = 'Please enter your company or facility name'

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
      <h3 className="step-title">Request a Clinical Quote</h3>

      <div className="field-row">
        <div className="field-group">
          <label className="field-label">First Name <span className="required">*</span></label>
          <input 
            type="text" 
            className={`field-input ${errors.first_name ? 'error' : ''}`}
            placeholder="e.g. Sarah…" 
            value={data.first_name}
            onChange={e => updateData({ first_name: e.target.value })}
          />
          {errors.first_name && <div className="field-error visible">{errors.first_name}</div>}
        </div>
        <div className="field-group">
          <label className="field-label">Last Name <span className="required">*</span></label>
          <input 
            type="text" 
            className={`field-input ${errors.last_name ? 'error' : ''}`}
            placeholder="e.g. Johnson…" 
            value={data.last_name}
            onChange={e => updateData({ last_name: e.target.value })}
          />
          {errors.last_name && <div className="field-error visible">{errors.last_name}</div>}
        </div>
      </div>

      <div className="field-row">
        <div className="field-group">
          <label className="field-label">Email <span className="required">*</span></label>
          <input 
            type="email" 
            className={`field-input ${errors.email ? 'error' : ''}`}
            placeholder="e.g. sarah@company.com.au…" 
            value={data.email}
            onChange={e => updateData({ email: e.target.value })}
          />
          {errors.email && <div className="field-error visible">{errors.email}</div>}
        </div>
        <div className="field-group">
          <label className="field-label">Phone <span className="required">*</span></label>
          <input 
            type="tel" 
            className={`field-input ${errors.phone ? 'error' : ''}`}
            placeholder="e.g. 0412 345 678…" 
            value={data.phone}
            onChange={e => updateData({ phone: e.target.value })}
          />
          {errors.phone && <div className="field-error visible">{errors.phone}</div>}
        </div>
      </div>

      {data.enquiry_type === 'quote' && (
        <div className="field-group">
          <label className="field-label">Company / Facility Name <span className="required">*</span></label>
          <input 
            type="text" 
            className={`field-input ${errors.company ? 'error' : ''}`}
            placeholder="e.g. St Mary's Medical Centre…" 
            value={data.company}
            onChange={e => updateData({ company: e.target.value })}
          />
          {errors.company && <div className="field-error visible">{errors.company}</div>}
        </div>
      )}

      <div className="form-nav">
        <div></div>
        <button type="button" className="btn-next" onClick={handleNext}>
          Next: Your Details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Step1
