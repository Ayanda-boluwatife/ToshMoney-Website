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
            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nobis obcaecati commodi quos expedita reprehenderit quia rem doloribus qui facilis in vel ad, impedit mollitia ratione ducimus atque accusantium reiciendis! Sunt exercitationem consectetur similique in. Totam temporibus, sunt, id blanditiis, nulla nostrum non ipsam quos soluta consequuntur quaerat. Iure, similique!"
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