import React from 'react'
import BackToTop from '../BackToTop'
import Footer from '../HomePage/Footer'
import Nav from '../HomePage/Nav'
import ContactHomePage from './ContactHomePage'
import ContactMain from './ContactMain'

const Contact = () => {
  return (
    <div>
        <Nav />
        <ContactHomePage />
        <ContactMain />
        <div style={{marginTop: '70px'}}>
          <Footer />
        </div>
        <BackToTop />
    </div>
  )
}

export default Contact