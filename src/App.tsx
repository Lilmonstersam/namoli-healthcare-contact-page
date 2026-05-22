import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm/ContactForm'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <Hero />
        <section className="form-section" id="main-form">
          <div className="container">
            <div className="form-section-inner">
              <ContactForm />
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
