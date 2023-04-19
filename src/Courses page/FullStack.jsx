import React from 'react'
import GeneralProps from './GeneralProps';
import fullstackimg from '../images/fullstack.png';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';

const FullStack = () => {
  return (
    <>
        <Nav/>
        <TopProps
            header="JAVASCRIPT-FULL-STACK DEVELOPMENT"
        />
        <GeneralProps
            picture={fullstackimg}
            para="In addition to mastering HTML and CSS, you will also learn how to: Program a browser and Program a server. After the training, you will become an expert in both the front and backend and full-stack technology that makes up a website and mobile app."
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

    </>
  )
}

export default FullStack;