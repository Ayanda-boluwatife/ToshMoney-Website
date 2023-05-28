import React from 'react';
import styled from 'styled-components';
import Nav from '../../HomePage/Nav';
import Footer from '../../HomePage/Footer';
import PropsOne from './PropsOne';
import Human from './Human';
import Love from './Love';
import Business from './Business';
import Portfolio from '../Portfolio page/Portfolio';
const DigitalMarketingService = () => {
  return (
    <Wrapper>
      <Nav/>
      <PropsOne
        header="Digital Marketing"
        first="Home"
        second="Service"
        third="Digital Marketing"
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
export default DigitalMarketingService;