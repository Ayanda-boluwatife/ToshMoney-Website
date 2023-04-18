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
            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nobis obcaecati commodi quos expedita reprehenderit quia rem doloribus qui facilis in vel ad, impedit mollitia ratione ducimus atque accusantium reiciendis! Sunt exercitationem consectetur similique in. Totam temporibus, sunt, id blanditiis, nulla nostrum non ipsam quos soluta consequuntur quaerat. Iure, similique!"
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