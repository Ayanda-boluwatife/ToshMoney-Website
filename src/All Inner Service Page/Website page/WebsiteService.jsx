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
const WebsiteService = () => {
  return (
    <Wrapper>
      <Nav/>
      <PropsOne
        header="Website Development"
        first="Home"
        second="Service"
        third="Website Development"
      />
      <Human/>
      <Business/>
      <Client
        headOne="Choose Our Services"
        paraOne="Browse through our comprehensive range of web development services and select the ones that align with your specific goals and requirements. Whether you need a complete website overhaul or specific enhancements, we offer tailored solutions to meet your unique needs."
        headTwo="Request a Meeting"
        paraTwo="We value open communication and collaboration. Request a meeting with our team to discuss your project in detail. This meeting allows us to gain a deeper understanding of your business, target audience, branding, and functionality requirements. We'll work together to define the scope and objectives of your web development project."
        headThree="Get a Custom Plan"
        paraThree="Based on our initial meeting, our experienced team will create a custom plan tailored to your specific needs. This plan will outline the project timeline, deliverables, technical requirements, and cost. We prioritize transparency and ensure that you have a clear understanding of the entire process."
        headFour="Delivery"
        paraFour="We follow industry best practices, coding standards, and quality assurance protocols to ensure the delivery of a high-performing and visually stunning website. Throughout the development process, we maintain open communication, providing regular updates and seeking your feedback to ensure the final product meets your expectations."
      />
      <Portfolio/>
      <Love/>
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`
export default WebsiteService;