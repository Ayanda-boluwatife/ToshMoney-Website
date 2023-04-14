import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import Hero from './Hero';
import styled from 'styled-components';
import About from './About';
import Courses from './Courses';
import BackToTop from '../BackToTop';
import Testimony from '../Second-Landing-Page/Testimony';
import Services from './Services';

const Home = () => {
  return (
    <Wrapper>
      <section>
        <Nav />
        <div className='top-gradient'></div>
        <Hero />
        <About/>
        <Services/>
        <Courses/>
        <Testimony />
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