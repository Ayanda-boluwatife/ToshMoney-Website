import React from 'react'
import BackToTop from '../BackToTop'
import Footer from '../HomePage/Footer'
import Nav from '../HomePage/Nav'
import CareerHeader from './CareerHeader'
import SecondCareerPage from './SecondCareerPage'

const Career = () => {
  return (
    <div>
        <Nav/>
        <CareerHeader/>
        <SecondCareerPage />
        <Footer/>
        <BackToTop />
    </div>
  )
}

export default Career;