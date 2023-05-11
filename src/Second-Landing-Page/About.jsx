import React from 'react';
import AboutHero from './AboutHero';
import JoinToshConsult from './JoinToshConsult';
import OurClients from './OurClients';
import OurMission from './OurMission';
import ServiceAbout from './ServiceAbout';
import TeamsAbout from './TeamsAbout';
import Testimony from './Testimony';
import Trainings from './Trainings';
import styled from 'styled-components';
import Nav from '../HomePage/Nav';
import Footer from '../HomePage/Footer';
import BackToTop from '../BackToTop';
import {Helmet} from 'react-helmet';

const About = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta name="description" content="Get to Know Our Team and Our Mission to Provide Exceptional Service and Quality Products"/>
        <title>Toshconsult inc || About Page</title>
      </Helmet>
      <div>
        <Nav
          aboutLink='aboutLink'
        />
        <AboutHero />
        <OurMission />
        <Trainings />
        <ServiceAbout/>
        <OurClients />
        <TeamsAbout />
        <Testimony />
        <JoinToshConsult />
        <Footer />
        <BackToTop />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  overflow: hidden;
  .aboutLink{
    color: #FB9B02 !important;
  }
`
export default About