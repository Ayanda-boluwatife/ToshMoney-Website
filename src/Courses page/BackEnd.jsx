import React from 'react'
import GeneralProps from './GeneralProps';
import Recback from '../images/backend.png';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';

const BackEnd = () => {
  return (
    <>
        <Nav/>
        <TopProps
            header="Back-End-Development"
        />
        <GeneralProps
            picture={Recback}
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

    </>
  )
}

export default BackEnd;