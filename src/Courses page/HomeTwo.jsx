import React from 'react'
import Nav from '../HomePage/Nav';
import Footer from '../HomePage/Footer';
import CoursesTwo from '../Courses page/CoursesTwo';
import FeatureTwo from '../Courses page/FeatureTwo';
import BackToTop from '../BackToTop';
import CoursesThree from './CoursesThree';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
const HomeTwo = () => {
  return (
    <Wrapper>
      <Helmet>
        <link rel="icon" href="./tosh logo.jpg" />
        <meta name="description" content="Become a Globally Certified, Sought-After, and Highly Tech Software Developer and Digital Marketing Expert "/>
        <title>Toshconsult inc || Course Page</title>
      </Helmet>
      <section>
        <Nav
          courseLink='courseLink'
        />
        <CoursesTwo/>
        <FeatureTwo />
        <CoursesThree/> 
        <Footer/>
        <BackToTop/>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .courseLink{
    color: #FB9B02 !important;
  }
`
export default HomeTwo;