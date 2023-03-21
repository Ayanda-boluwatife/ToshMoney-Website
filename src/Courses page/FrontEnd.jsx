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
            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nobis obcaecati commodi quos expedita reprehenderit quia rem doloribus qui facilis in vel ad, impedit mollitia ratione ducimus atque accusantium reiciendis! Sunt exercitationem consectetur similique in. Totam temporibus, sunt, id blanditiis, nulla nostrum non ipsam quos soluta consequuntur quaerat. Iure, similique!"
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