import React from 'react'
import Nav from '../HomePage/Nav';
import Footer from '../HomePage/Footer';
import CoursesTwo from '../Courses page/CoursesTwo';
import FeatureTwo from '../Courses page/FeatureTwo';
import BackToTop from '../BackToTop';
import CoursesThree from './CoursesThree';
import styled from 'styled-components';
const HomeTwo = () => {
  return (
    <Wrapper>
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