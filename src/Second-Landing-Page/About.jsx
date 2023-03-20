import React from 'react'
import AboutHero from './AboutHero'
import JoinToshConsult from './JoinToshConsult'
import OurClients from './OurClients'
import OurMission from './OurMission'
import ServiceAbout from './ServiceAbout'
import TeamsAbout from './TeamsAbout'
import Testimony from './Testimony'
import Trainings from './Trainings'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div>
        <AboutHero />
        <OurClients />
        <OurMission />
        <Trainings />
        <ServiceAbout/>
        <TeamsAbout />
        <Testimony />
        <JoinToshConsult />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  overflow: hidden;
`
export default About