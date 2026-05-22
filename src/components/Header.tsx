import React from 'react'
import logo from '../assets/namoli-healthcare-logo.webp'

const Header: React.FC = () => {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Brisbane, Melbourne &amp; Sydney
            </span>
            <a href="tel:1300626654">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              1300 626 654
            </a>
            <a href="mailto:info@namoli.com.au">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@namoli.com.au
            </a>
          </div>
          <div className="top-bar-right">
            <a href="https://www.facebook.com/namolicommercialcleaning/" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://au.linkedin.com/company/namoli-commercial-cleaning" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <div className="top-bar-divider"></div>
            <a href="https://www.namoli.com.au/member-login/" className="top-bar-login">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight:4}}><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              Client Login
            </a>
          </div>
        </div>
      </div>

      <header className="site-header" role="banner">
        <div className="container">
          <a href="https://www.namoli.com.au/healthcare-cleaning/" className="site-logo">
            <img src={logo} alt="Namoli Healthcare" />
          </a>
          <div className="header-cta">
            <a href="tel:1300626654" className="header-phone">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              1300&nbsp;626&nbsp;654
            </a>
            <a href="#main-form" className="btn-cta-header">Book Consultation</a>
          </div>
        </div>
      </header>

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <a href="https://www.namoli.com.au/healthcare-cleaning/">Home</a><span>›</span><strong>Contact Us</strong>
        </div>
      </nav>
    </>
  )
}

export default Header
