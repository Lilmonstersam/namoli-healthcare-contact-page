import React from 'react'

const Hero: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <h1>Clinical Clean. <span className="highlight">Certified Assurance.</span></h1>
              <p className="hero-subtitle">Protecting the health of everyone in healthcare. Specialist sanitisation and infection control for clinics, hospitals, and aged care facilities.</p>

              <div className="contact-cards">
                <a href="tel:1300626654" className="contact-card">
                  <div className="icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="contact-card-text">Call Clinic Advisor</div>
                    <div className="contact-card-value">1300&nbsp;626&nbsp;654</div>
                  </div>
                </a>
                <a href="mailto:info@namoli.com.au" className="contact-card">
                  <div className="icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="contact-card-text">Email us</div>
                    <div className="contact-card-value">info@namoli.com.au</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="locations-card">
                <h3>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Clinical Services Australia-wide
                </h3>
                <div className="locations-list">
                  <div className="location-item"><span className="location-dot"></span> Brisbane &amp; QLD Clinical Network</div>
                  <div className="location-item"><span className="location-dot"></span> Melbourne &amp; VIC Health Regions</div>
                  <div className="location-item"><span className="location-dot"></span> Sydney &amp; NSW Medical Precincts</div>
                </div>
              </div>

              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div className="social-strip">
                  <a href="https://www.facebook.com/namolicommercialcleaning/" className="social-link" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
                  <a href="https://au.linkedin.com/company/namoli-commercial-cleaning" className="social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
                <div className="trust-strip-hero">
                  <div className="trust-badge-hero">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                    Infection Control Certified
                  </div>
                  <div className="trust-badge-hero">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    TGA-Approved Products
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cert-strip">
        <div className="container">
          <div className="cert-strip-inner">
            <span className="cert-strip-label">Clinical Trust &amp; Standards</span>
            <div className="cert-strip-logos">
              <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/issa-member-logo-converted.png" alt="ISSA Member" />
              <img src="https://www.namoli.com.au/wp-content/uploads/2021/10/FCA-Member-logo-CMYK-300x169.jpg" alt="Franchise Council of Australia" />
              <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/bscaa-300x152.png" alt="BSCAA Member" />
              <img src="https://www.namoli.com.au/wp-content/uploads/2021/10/DHAPartners2-removebg-preview.png" alt="DHA Partner" />
              <img src="https://www.namoli.com.au/wp-content/uploads/2021/10/Logo_Cm3_Contractor-Management-Prequalification-white.png" alt="Cm3 Prequalified" style={{background:'#003B5D', padding:'4px 8px', borderRadius:'4px'}} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
