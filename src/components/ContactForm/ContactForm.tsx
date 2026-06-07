import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import SuccessState from './SuccessState'
import ProgressBar from './ProgressBar'

export type EnquiryType = 'quote'

export interface FormData {
  enquiry_type: EnquiryType
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  // Step 2 - Shared / Quote
  facility_type: string
  frequency: string
  suburb_or_postcode: string
  approx_sqm: string

  // Step 3
  compliance_needs: string[]
  comments: string
}

const initialData: FormData = {
  enquiry_type: 'quote',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  company: '',
  facility_type: '',
  frequency: '',
  suburb_or_postcode: '',
  approx_sqm: '',

  compliance_needs: [],
  comments: ''
}

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const handleEnquiryTypeChange = (type: EnquiryType) => {
    updateFormData({ enquiry_type: type })
    if (step !== 1) setStep(1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Submitting form data:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="form-main">
        <div className="form-card">
          <SuccessState enquiryType={formData.enquiry_type} />
        </div>
      </div>
    )
  }

  return (
    <div className="form-main">
      <div className="form-card">
        <ProgressBar currentStep={step} />
        <div className="form-body">
          {step === 1 && (
            <Step1 
              data={formData} 
              updateData={updateFormData} 
              onNext={nextStep} 
              onTypeChange={handleEnquiryTypeChange}
            />
          )}
          {step === 2 && (
            <Step2 
              data={formData} 
              updateData={updateFormData} 
              onNext={nextStep} 
              onBack={prevStep} 
            />
          )}
          {step === 3 && (
            <Step3 
              data={formData} 
              updateData={updateFormData} 
              onBack={prevStep} 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactForm
