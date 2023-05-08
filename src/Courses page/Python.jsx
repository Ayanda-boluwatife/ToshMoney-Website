import React from 'react'
import GeneralProps from './GeneralProps';
import pythonimg from '../images/How_to_Become_a_Back_End_Developer.jpg';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';

const Python = () => {
  return (
    <Wrapper>
      <section>
      <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="PYTHON FULL-STACK DEVELOPMENT"
        />
        <GeneralProps
            picture={pythonimg}
            price="75,000"
            duration="12 Weeks"
            para="As a Python full-stack developer, you will be responsible for designing, coding, testing, and deploying software solutions. Our experienced instructors will take you through the whole process."
            one="✔ Python"
            two="✔ Django"
            three="✔ PostGrel"
            four="✔ Bootstrap"
            five="✔ GIT & GITHUB"
            six="✔ HTML"
            seven="✔ CSS"
            eight="✔ Javascript"
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
export default Python;