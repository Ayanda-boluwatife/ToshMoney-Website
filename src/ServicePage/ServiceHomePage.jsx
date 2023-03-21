import React from 'react'
import styled from 'styled-components';

const ServiceHomePage = () => {
  return (
    <Wrapper>
        <div className='header'>
            <h1>Inventing solution to business</h1>
            <h1>Enterprises</h1>
            <p>Get to Know Our Team and Our Mission to Provide Exceptional Service</p>
            <p> And Quality Products</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section` 
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background: rgba(254, 243, 199, 0.5);

.header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 5%;
}

h1{
    font-size: 3vw;
    line-height: 5%;
}
`
export default ServiceHomePage;