import React from 'react'
import BackToTop from '../BackToTop'
import Footer from '../HomePage/Footer'
import Nav from '../HomePage/Nav'
import ContactHomePage from './ContactHomePage'
import ContactMain from './ContactMain'
import ReadOurFaq from './ReadOurFaq'

const Contact = () => {
  return (
    <div>
        <Nav />
        <ContactHomePage />
        <ContactMain />
        <ReadOurFaq />
        <Footer />
        <BackToTop />
    </div>
  )
}

export default Contact