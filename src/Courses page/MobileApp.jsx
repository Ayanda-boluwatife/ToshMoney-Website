import React from 'react'
import GeneralProps from './GeneralProps';
import Rec83 from '../images/Rectangle 83.png';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';

const MobileApp = () => {
  return (
    <>
        <Nav/>
        <TopProps
            header="MOBILE-APP-DEVELOPMENT"
        />
        <GeneralProps
            picture={Rec83}
            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nobis obcaecati commodi quos expedita reprehenderit quia rem doloribus qui facilis in vel ad, impedit mollitia ratione ducimus atque accusantium reiciendis! Sunt exercitationem consectetur similique in. Totam temporibus, sunt, id blanditiis, nulla nostrum non ipsam quos soluta consequuntur quaerat. Iure, similique!"
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

    </>
  )
}

export default MobileApp;