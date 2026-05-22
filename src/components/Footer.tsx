import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Namoli Healthcare</div>
            <p className="footer-tagline">Clinical, compliance-driven cleaning and infection control solutions for medical practices, hospitals, and aged care facilities across Australia.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <a href="https://www.namoli.com.au/medical-cleaning-services/">GP &amp; Medical Centres</a>
            <a href="https://www.namoli.com.au/medical-cleaning-services/">Hospitals &amp; Day Surgeries</a>
            <a href="https://www.namoli.com.au/medical-cleaning-services/">Aged Care Facilities</a>
            <a href="https://www.namoli.com.au/medical-cleaning-services/">Dental &amp; Specialist Clinics</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="https://www.namoli.com.au/about-us/">Our Approach</a>
            <a href="https://www.namoli.com.au/our-standards/">Clinical Standards</a>
            <a href="https://www.namoli.com.au/franchise-opportunities/">Franchise Opportunities</a>
            <a href="https://www.namoli.com.au/blog/">Healthcare Blog</a>
          </div>
          <div className="footer-col">
            <h5>Get In Touch</h5>
            <a href="tel:1300626654">1300 626 654</a>
            <a href="mailto:info@namoli.com.au">info@namoli.com.au</a>
            <a href="https://www.namoli.com.au/commercial-cleaning-brisbane/">Brisbane HQ</a>
            <a href="https://www.namoli.com.au/commercial-cleaning-melbourne/">Melbourne Office</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {currentYear} Namoli Healthcare. All rights reserved. | <a href="https://www.namoli.com.au/privacy-policy/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
