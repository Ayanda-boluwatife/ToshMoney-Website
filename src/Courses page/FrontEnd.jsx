import React from 'react'
import GeneralProps from './GeneralProps';
import Rec83 from '../images/Rectangle 83.png'
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';

const FrontEnd = () => {
  return (
    <>
        <Nav/>
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

    </>
  )
}

export default FrontEnd;