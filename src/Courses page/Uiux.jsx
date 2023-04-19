import React from 'react'
import GeneralProps from './GeneralProps';
import uiuximg from '../images/uiux.jpg';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';

const Uiux = () => {
  return (
    <>
        <Nav/>
        <TopProps
            header="UI/UX DESIGN"
        />
        <GeneralProps
            picture={uiuximg}
            para="Learn how to work and collaborate with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. You will learn also how to process flows or sitemaps."
            one="✔ UI Design"
            two="✔ Figma"
            three="✔ UX Design"
            four="✔ User Research"
            five="✔ User Journey"
            six="✔ User Flow"
            seven="✔ Wireframe"
        />
        <Footer/>
        <BackToTop/>

    </>
  )
}

export default Uiux;