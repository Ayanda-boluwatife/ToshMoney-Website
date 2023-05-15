import React from 'react'
import GeneralProps from './GeneralProps';
import fullstackimg from '../images/hero.png';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const FullStack = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta name="description" content="In addition to mastering HTML and CSS, you will also learn how to: Program a browser and Program a server. After the training, you will become an expert in both the front and backend and full-stack technology that makes up a website and mobile app."/>
        <title>Javascript Fullstack Development Course | Become a Fullstack Developer</title>
      </Helmet>
      <section>
        <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="FULL-STACK DEVELOPMENT"
        />
        <GeneralProps
            picture={fullstackimg}
            price="150,000"
            duration="24 Weeks"
            para="In addition to mastering HTML and CSS, you will also learn how to: Program a browser and Program a server. After the training, you will become an expert in both the front and backend and full-stack technology that makes up a website and mobile app."
            one="✔ HTML"
            two="✔ CSS"
            three="✔ Javascript"
            four="✔ React JS"
            five="✔ Node Js"
            six="✔ Express JS"
            seven="✔ Passport JS" 
            eight="✔ MongoDB"
            nine="✔ GIT & GITHUB"
            ten="✔ Monroose"
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
export default FullStack;