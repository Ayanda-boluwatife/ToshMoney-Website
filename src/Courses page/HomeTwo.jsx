import React from 'react'
import Nav from '../HomePage/Nav';
import Footer from '../HomePage/Footer';
import CoursesTwo from '../Courses page/CoursesTwo';
import FeatureTwo from '../Courses page/FeatureTwo';
import BackToTop from '../BackToTop';
import CoursesThree from './CoursesThree';
const HomeTwo = () => {
  return (
    <>
        <Nav/>
        <CoursesTwo/>
        <FeatureTwo />
        <CoursesThree/> 
        <Footer/>
        <BackToTop/>
    </>
  )
}

export default HomeTwo;