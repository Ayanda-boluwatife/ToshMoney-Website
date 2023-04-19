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
            para="As a Python full-stack developer, you will be responsible for designing, coding, testing, and deploying software solutions. Our experienced instructors will take you through the whole process."
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