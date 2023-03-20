import React from 'react'
import styled from 'styled-components';


const CareerHeader = () => {
  return (
    <Wrapper>
        <div className='boss'>
            <h1>Search For Job</h1>
            <p>Get to Know Our Team and Our Mission to Provide</p>
            <p> Exceptional Service and Quality Products</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(254, 243, 199, 0.5);
    padding: 40px;
    .boss{
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 10%;
    }
    .boss h1{
        font-size: 3vw;
    }
`
export default CareerHeader;