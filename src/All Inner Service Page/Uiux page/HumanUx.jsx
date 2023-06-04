import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/Group 70.png';

const HumanUx = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="first">
          <img src={heroImg} alt={heroImg} />
        </div>
        <div className="second">
          <h1>human centric design principles</h1>
          <p>Immerse your users in a delightful and intuitive digital experience with our human-centric design approach. We place users at the center of our design process, prioritizing their needs, behaviors, and preferences to create interfaces that are visually appealing, easy to navigate, and engage seamlessly.</p>
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
export default HumanUx;