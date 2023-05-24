import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Gallary from './Gallary';

const Portfolio = () => {
  return (
    <Wrapper>
        <Header/>
        <Gallary/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    

`
export default Portfolio;