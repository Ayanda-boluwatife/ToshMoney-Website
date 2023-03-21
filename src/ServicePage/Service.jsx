import React from 'react'
import BackToTop from '../BackToTop';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import BenefitService from './BenefitService';
import ServiceHomePage from './ServiceHomePage';
import ThirdSection from './ThirdSection';
import WorkWithUS from './WorkWithUs';

const Service = () => {
  return (
    <div>
        <Nav />
        <ServiceHomePage />
        <BenefitService />
        <ThirdSection />
        <WorkWithUS />
        <Footer />
        <BackToTop />
    </div>
  )
}

export default Service;