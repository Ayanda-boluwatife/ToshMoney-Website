import React from 'react';
import styled from 'styled-components';
import Nav from '../../HomePage/Nav';
import Footer from '../../HomePage/Footer';
import PropsOne from './PropsOne';
import Human from './Human';
import Love from './Love';
import Business from './Business';
import Portfolio from '../Portfolio page/Portfolio';
import Client from '../Client';
const DigitalMarketingService = () => {
  return (
    <Wrapper>
      <Nav/>
      <PropsOne
        header="Digital Marketing"
        first="Home"
        second="Service"
        third="Digital Marketing"
      />
      <Human/>
      <Business/>
      <Client
        headOne="Customer-Centric Focus"
        paraOne="We prioritize your needs and goals, placing your customers at the heart of our strategies. By understanding their behaviors, preferences, and pain points, we create digital experiences that resonate and drive engagement."
        headTwo="Collaborative Partnership"
        paraTwo="We believe in building strong, long-lasting partnerships with our clients. We see ourselves as an extension of your team, working closely with you to achieve your objectives and offering continuous support and guidance throughout the journey."
        headThree="Innovation and Adaptability"
        paraThree="In the fast-paced digital landscape, innovation and adaptability are key. We stay ahead of industry trends, embrace emerging technologies, and continuously evolve our skills and strategies to deliver cutting-edge solutions that keep you ahead of the competition."
        headFour="Delivery"
        paraFour="We follow a meticulous design process, incorporating feedback and revisions to ensure the final deliverables meet your expectations."
      />
      <Portfolio/>
      <Love/>
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`
export default DigitalMarketingService;