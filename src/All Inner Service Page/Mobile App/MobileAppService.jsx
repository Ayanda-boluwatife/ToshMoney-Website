import React from 'react';
import styled from 'styled-components';
import Nav from '../../HomePage/Nav';
import Footer from '../../HomePage/Footer';
import PropsOne from './PropsOne';
import Human from './Human';
import Love from './Love';
import Business from './Business';
import Portfolio from '../Portfolio page/Portfolio';
const MobileAppService = () => {
  return (
    <Wrapper>
      <Nav/>
      <PropsOne
        header="mobile app development"
        first="Home"
        second="Service"
        third="Mobile App"
      />
      <Human/>
      <Business/>
      <Portfolio/>
      <Love/>
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`
export default MobileAppService;