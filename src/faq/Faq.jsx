import React from 'react'
import Footer from '../HomePage/Footer'
import Nav from '../HomePage/Nav'
import FaqQuestion from './FaqQuestion'
import LastPage from './LastPage'
import MainFaqPage from './MainFaqPage'

const Faq = () => {
  return (
    <div>
        <Nav />
        <FaqQuestion />
        <MainFaqPage />
        <LastPage />
        <Footer />
    </div>
  )
}

export default Faq