import React from 'react'
import Nav from '../HomePage/Nav'
import FaqQuestionTwo from './FaqQuestionTwo'
import FaqTwo from './FaqTwo'
import LastPage from './LastPage'
import Footer from '../HomePage/Footer'
import BackToTop from '../BackToTop'

const FaqRedo = () => {
  return (
    <div>
        <Nav/>
        <FaqQuestionTwo/>
        <FaqTwo/>
        <LastPage
          head="Become A Pro Learner"
          link={'/courses'}
          button="Enroll In Our Courses"
        />
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default FaqRedo;