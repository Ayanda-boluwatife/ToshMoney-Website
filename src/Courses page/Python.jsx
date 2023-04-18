import React from 'react'
import GeneralProps from './GeneralProps';
import pythonimg from '../images/python.png';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';

const Python = () => {
  return (
    <>
        <Nav/>
        <TopProps
            header="PYTHON FULL-STACK DEVELOPMENT"
        />
        <GeneralProps
            picture={pythonimg}
            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nobis obcaecati commodi quos expedita reprehenderit quia rem doloribus qui facilis in vel ad, impedit mollitia ratione ducimus atque accusantium reiciendis! Sunt exercitationem consectetur similique in. Totam temporibus, sunt, id blanditiis, nulla nostrum non ipsam quos soluta consequuntur quaerat. Iure, similique!"
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

export default Python;