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

const About = () => {
  return (
    <Wrapper>
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