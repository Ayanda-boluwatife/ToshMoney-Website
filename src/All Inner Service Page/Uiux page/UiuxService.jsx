import React from 'react';
import styled from 'styled-components';
import Nav from '../../HomePage/Nav';
import Footer from '../../HomePage/Footer';
import PropsOne from './PropsOne';
import HumanUx from './HumanUx';
import LoveUx from './LoveUx';
import BusinessUx from './BusinessUx';
const UiuxService = () => {
  return (
    <Wrapper>
      <Nav/>
      <PropsOne
        header="UIUX/ Design"
        first="Home"
        second="Service"
        third="UIUX"
      />
      <HumanUx/>
      <BusinessUx/>
      <LoveUx/>
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`
export default UiuxService;