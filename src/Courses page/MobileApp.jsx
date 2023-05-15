import React from 'react'
import GeneralProps from './GeneralProps';
import mobileimg from '../images/7-popular-business-applications-mobile-phones-2.png.webp';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const MobileApp = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta name="description" content="As a mobile app developer, you will learn how to use programming languages and development skills to create, test, and develop applications on mobile devices. You will learn how to work in popular operating systems environments like iOS and Android and often take into account UI and UX principles when creating applications.!"/>
        <title>Fullstack mobile app development course | Become a Mobile App Developer</title>
      </Helmet>
      <section>
      <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="MOBILE-APP-DEVELOPMENT"
        />
        <GeneralProps
            picture={mobileimg}
            price="150,000"
            duration="24 Weeks"
            para="As a mobile app developer, you will learn how to use programming languages and development skills to create, test, and develop applications on mobile devices. You will learn how to work in popular operating systems environments like iOS and Android and often take into account UI and UX principles when creating applications.!"
            one="✔ Javascript"
            two="✔ React JS"
            three="✔ React Native"
            four="✔ Expo"
            five="✔ Node JS"
            six="✔ Express JS"
            seven="✔ Express JS"
            eight="✔ Passport JS"
            nine="✔ socket IO"
            ten="✔ MongoDB"
            eleven="✔ GIT & GITHUB"
            twleve="✔ Monroose"
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
export default MobileApp;