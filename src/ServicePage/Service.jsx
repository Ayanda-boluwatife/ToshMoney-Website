import React from 'react'
import BackToTop from '../BackToTop';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import BenefitService from './BenefitService';
import ServiceHomePage from './ServiceHomePage';
import ThirdSection from './ThirdSection';
import WorkWithUS from './WorkWithUs';
import styled from 'styled-components';

const Service = () => {
  return (
    <Wrapper>
      <section>
        <Nav
          serviceLink='serviceLink'
        />
        <ServiceHomePage />
        <BenefitService />
        <ThirdSection />
        <WorkWithUS />
        <Footer />
        <BackToTop />
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  
  .serviceLink{
    color: #FB9B02 !important;
  }

`
export default Service;