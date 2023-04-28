import React from 'react'
import GeneralProps from './GeneralProps';
import Recback from '../images/freelance-work-7308505_640.png';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';

const BackEnd = () => {
  return (
    <Wrapper>
      <section>
        <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="Back-End-Development"
        />
        <GeneralProps
            picture={Recback}
            price="80,000"
            duration="12 Weeks"
            para="As a Back-end developer, you will learn how to ensure a website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers."
            one="✔ javascript"
            two="✔ Node JS"
            three="✔ Express JS"
            four="✔ Passport JS"
            five="✔ PostMan"
            six="✔ MongoDB"
            seven="✔ Mongoose"
            eigth="✔ GIT & GITHUB"
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
export default BackEnd;