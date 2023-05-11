import React from 'react'
import BackToTop from '../BackToTop'
import Footer from '../HomePage/Footer'
import Nav from '../HomePage/Nav'
import ContactHomePage from './ContactHomePage'
import ContactMain from './ContactMain'
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Contact = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta name="description" content="Get in Touch with us by filling the below form"/>
        <title>Toshconsult inc || Contact Page</title>
      </Helmet>
      <section>
        <Nav
          contactLink='contactLink' 
        />
        <ContactHomePage />
        <ContactMain />
        <div style={{marginTop: '70px'}}>
          <Footer />
        </div>
        <BackToTop />
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .contactLink{
    color: #FB9B02 !important;
  }

`
export default Contact