import React from 'react'
import styled from 'styled-components';

const ContactHomePage = () => {
  return (
    <Wrapper>
        
        <div className="roll">
            <h1>Contact us for more...</h1>
            <p>Get to Know Our Team and Our Mission to Provide <br /> Exceptional Service and Quality Products</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(254, 243, 199, 0.5);
   .roll{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
   h1{
    font-family: "Raleway", sans-serif;
    font-weight: 600;
   }
   p{
    font-family: "Poppins", sans-serif;
   }
`
export default ContactHomePage;