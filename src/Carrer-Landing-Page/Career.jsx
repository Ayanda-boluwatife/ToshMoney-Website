import React from 'react'
import BackToTop from '../BackToTop'
import Footer from '../HomePage/Footer'
import Nav from '../HomePage/Nav'
import CareerHeader from './CareerHeader'
import styled from 'styled-components'

const Career = () => {
  return (
    <Wrapper>
      <section>
        <Nav
          careerLink='careerLink'
        />
        <CareerHeader/>
        <Footer/>
        <BackToTop />
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .careerLink{
    color: #FB9B02 !important;
  }

`
export default Career;