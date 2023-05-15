import React from 'react'
import GeneralProps from './GeneralProps';
import wordpressimg from '../images/wordpress-website (1).png';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const WordPress = () => {
  return (
    <Wrapper>
      <Helmet>
        <link rel="icon" href="./tosh logo.jpg" />
        <meta name="description" content="You will learn to be responsible for both front-end and back-end development, including the implementation of themes and plugins. Your goal here is to learn to create attractive and user-friendly websites (using WordPress) according to client specifications."/>
        <title>Wordpress Development course | Become a Wordpress Developer</title>
      </Helmet>
        <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="WordPress Development"
        />
        <GeneralProps
            picture={wordpressimg}
            price="12 Weeks"
            duration="70,000"
            para="You will learn to be responsible for both front-end and back-end development, including the implementation of themes and plugins. Your goal here is to learn to create attractive and user-friendly websites (using WordPress) according to client specifications."
            one="✔ WP Installation"
            two="✔  WP Settings"
            three="✔ Plugins Installation"
            four="✔ Themes Installation"
            five="✔ Page Design"
            six="✔ Theme Customization"
            seven="✔ Plugins Customization"
            eight="✔ Working With Pg. Builders"
            nine="✔  Working With Cpanel"
            ten="✔ Using Custom scripts"
        />
        <Footer/>
        <BackToTop/>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  .courseLink{
    color: #FB9B02 !important;
  }
`
export default WordPress;