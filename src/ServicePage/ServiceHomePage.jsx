import React from 'react'
import styled from 'styled-components';

const ServiceHomePage = () => {
  return (
    <Wrapper>
        <div className='header'>
            <h1>Inventing solution to business</h1>
            <h1>Enterprises</h1>
            <p>Get to Know Our Team and Our Mission to Provide Exceptional ServiceAnd Quality Products</p>
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
    height: 70vh;
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        text-align: center;
    }
    h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
    }

    @media screen and (max-width: 950px) {
      height: 40vh;
    }


`
export default ServiceHomePage;