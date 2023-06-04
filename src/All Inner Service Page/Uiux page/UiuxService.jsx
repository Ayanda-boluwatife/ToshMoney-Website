import React from 'react';
import styled from 'styled-components';
import Nav from '../../HomePage/Nav';
import Footer from '../../HomePage/Footer';
import PropsOne from './PropsOne';
import HumanUx from './HumanUx';
import LoveUx from './LoveUx';
import BusinessUx from './BusinessUx';
import Portfolio from '../Portfolio page/Portfolio';
import Client from '../Client';

const UiuxService = () => {
  return (
    <Wrapper>
      <Nav/>
      <PropsOne
        header="UIUX/ Design"
        first="Home"
        second="Service"
        third="UIUX"
      />
      <HumanUx/>
      <BusinessUx/>
      <Client
        headOne="Choose Our Services"
        paraOne="Explore our range of UI/UX design services and select the ones that align with your specific requirements and goals. We offer tailored solutions to cater to businesses of all sizes and industries."
        headTwo="Request a Meeting"
        paraTwo="We value open communication and collaboration. Reach out to us to schedule a meeting where we can discuss your project in detail. This meeting allows us to understand your vision, goals, target audience, and project requirements better."
        headThree=" Get a Custom Plan"
        paraThree="Based on the insights gathered during our meeting, our team of experts will devise a custom plan tailored to your specific needs. This plan will outline the scope, timeline, deliverables, and cost of your UI/UX design project."
        headFour="Delivery"
        paraFour="Sit back and relax as our skilled designers bring your vision to life. We follow a meticulous design process, incorporating feedback and revisions to ensure the final deliverables meet your expectations. Once completed, we'll provide you with the finalized design assets for seamless integration into your digital products or platforms."
      />
      <Portfolio/>
      <LoveUx/>
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`
export default UiuxService;