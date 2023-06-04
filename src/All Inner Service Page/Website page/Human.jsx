import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/Group 70 (2).png';

const Human = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="first">
          <img src={heroImg} alt={heroImg} />
        </div>
        <div className="second">
          <h1>human centric design principles</h1>
          <p>We believe that every website should prioritize the needs and experiences of its users. By incorporating human-centric design principles, we create websites that are intuitive, visually appealing, and tailored to meet the expectations of your target audience. Our team focuses on understanding user behaviors, preferences, and goals to deliver engaging </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    padding: 0px 70px;
    align-items: center;
    justify-content: center;
  }
  .first{
    width: 100%;
  }
  .second{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-transform: capitalize;
    overflow: hidden;
  }
  .second h3{
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: #FB9B02;
  }
  .second h1{
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    font-size: 35px;
  }
  .second p{
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    padding: 15px 0;
    line-height: 25px;
  }
  img{
    height: 85vh;
  }


  @media screen and (max-width: 950px) {
    .container{
      flex-direction: column;
      padding: 40px;
      margin-top: 0px;
      gap: 30px;
    }  
    .first img{
      width: 100%;
      height: 100%;
    }
  }

`
export default Human;