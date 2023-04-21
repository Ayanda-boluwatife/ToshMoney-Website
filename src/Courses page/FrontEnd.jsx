import React from 'react'
import GeneralProps from './GeneralProps';
import Rec83 from '../images/Rectangle 83.png'
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';

const FrontEnd = () => {
  return (
    <Wrapper>
      <section>
        <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="front-end development"
        />
        <GeneralProps
            picture={Rec83}
            para=" Learn to build the front-end portion of websites and web applications—the part users see and interact with"
            one="✔ HTML"
            two="✔ CSS"
            three="✔ Javascript"
            four="✔ React JS"
            five="✔ Tailwind CSS"
            six="✔ GIT & GITHUB"
            seven="✔ Bootsrap"
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
export default FrontEnd;