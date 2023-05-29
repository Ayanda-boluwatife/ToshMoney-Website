import React from 'react';
import styled from 'styled-components';
import Nav from '../../HomePage/Nav';
import Footer from '../../HomePage/Footer';
import PropsOne from './PropsOne';
import Human from './Human';
import Love from './Love';
import Business from './Business';
import Portfolio from '../Portfolio page/Portfolio';
import Client from '../Client';
const WebsiteService = () => {
  return (
    <Wrapper>
      <Nav/>
      <PropsOne
        header="Website Development"
        first="Home"
        second="Service"
        third="Website Development"
      />
      <Human/>
      <Business/>
      <Client/>
      <Portfolio/>
      <Love/>
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`
export default WebsiteService;