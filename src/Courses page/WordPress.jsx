import React from 'react'
import GeneralProps from './GeneralProps';
import wordpressimg from '../images/wordpress3.jpg';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';

const WordPress = () => {
  return (
    <>
        <Nav/>
        <TopProps
            header="WordPress Development"
        />
        <GeneralProps
            picture={wordpressimg}
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

    </>
  )
}

export default WordPress;