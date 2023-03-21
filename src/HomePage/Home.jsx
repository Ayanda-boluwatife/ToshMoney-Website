import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import Hero from './Hero';
import styled from 'styled-components';
import Interact from './Interact';
import Feature from './Feature';
import Courses from './Courses';
import BackToTop from '../BackToTop';
import Testimony from '../Second-Landing-Page/Testimony';

const Home = () => {
  return (
    <Wrapper>
      <section>
        <Nav />
        <div className='top-gradient'></div>
        <Hero />
        <Interact/>
        <Feature/>
<<<<<<< HEAD
        <Courses/>
        <Testimony />
=======
        <Courses/> 
>>>>>>> 4ce367551f23c4e69656fcb2abb72efe9eac5c1d
        <Footer />
        <BackToTop/>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
  .top-gradient{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(193, 45, 193, 0.31) 0%, rgba(193, 45, 193, 0) 100%);
    filter: blur(100px);
  }

`

export default Home;