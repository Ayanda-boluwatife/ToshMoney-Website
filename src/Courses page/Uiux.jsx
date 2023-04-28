import React from 'react'
import GeneralProps from './GeneralProps';
import uiuximg from '../images/5f291f86223735.5da3c2a801a91.jpg';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import TopProps from './TopProps';
import BackToTop from '../BackToTop';
import styled from 'styled-components';

const Uiux = () => {
  return (
    <Wrapper>
      <section>
      <Nav
          courseLink='courseLink'
        />
        <TopProps
            header="UI/UX DESIGN"
        />
        <GeneralProps
            picture={uiuximg}
            price="50,000"
            duration="12 Weeks"
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
      </section>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  .courseLink{
    color: #FB9B02 !important;
  }
`
export default Uiux;