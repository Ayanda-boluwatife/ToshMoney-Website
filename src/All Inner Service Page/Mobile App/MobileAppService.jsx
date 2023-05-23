import React from 'react'
import Nav from '../../HomePage/Nav';
import Footer from '../../HomePage/Footer';
import PropsOne from './PropsOne';
const MobileAppService = () => {
  return (
    <Wrapper>
        <Nav/>
        <PropsOne
          header="mobile app development"
          first="Home"
          second=""
        />
        <Footer/>
    </Wrapper>
  )
}

export default MobileAppService;