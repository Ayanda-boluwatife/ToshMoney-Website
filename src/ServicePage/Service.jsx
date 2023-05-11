import React from 'react'
import BackToTop from '../BackToTop';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import BenefitService from './BenefitService';
import ServiceHomePage from './ServiceHomePage';
import ThirdSection from './ThirdSection';
import WorkWithUS from './WorkWithUs';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Service = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta name="description" content="Our Mission Is To Provide Exceptional Service And Quality Products"/>
        <title>Toshconsult inc || Service Page</title>
      </Helmet>
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