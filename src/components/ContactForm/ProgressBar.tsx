import React from 'react'

interface ProgressBarProps {
  currentStep: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={3} aria-label="Form progress">
      <div className={`progress-step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
        <div className="step-circle">{currentStep > 1 ? '✓' : '1'}</div>
        <span className="step-label">Quick Enquiry</span>
      </div>
      <div className={`progress-step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
        <div className="step-circle">{currentStep > 2 ? '✓' : '2'}</div>
        <span className="step-label">Details</span>
      </div>
      <div className={`progress-step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
        <div className="step-circle">{currentStep > 3 ? '✓' : '3'}</div>
        <span className="step-label">Submit</span>
      </div>
    </div>
  )
}

export default ProgressBar
