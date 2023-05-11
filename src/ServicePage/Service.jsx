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
        <meta name="description" content="Get to Know Our Team and Our Mission to Provide Exceptional Service and Quality Products"/>
        <title>Toshconsult inc || About Page</title>
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