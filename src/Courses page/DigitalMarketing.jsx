import React from 'react'
import GeneralProps from './GeneralProps';
import digitalimg from '../images/1241416.jpg';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';

const DigitalMarketing = () => {
  return (
    <Wrapper>
      <section>
      <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="Digital Markting"
        />
        <GeneralProps
            picture={digitalimg}
            para="Learn the required skills you would need to secure a high-paying job, scale your business or start your own agency."
            one="✔ Digital Marketing Fundamentals "
            two="✔ Social Media Marketing "
            three="✔ Social Media Advertising "
            four="✔ Mobile Graphics Design "
            five="✔ Content Creation & Monetization"
            six="✔ Google Advertising "
            seven="✔ Email Marketing "
        />
        <Footer/>
        <BackToTop/>
      </section>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  .courseLink{
    color: #FB9B02 !important;
  }
`
export default DigitalMarketing;