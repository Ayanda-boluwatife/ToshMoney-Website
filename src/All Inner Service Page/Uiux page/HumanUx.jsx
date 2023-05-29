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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
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
    height: 100vh;
    display: flex;
    flex-direction: row;
    padding: 40px 70px;
    align-items: center;
    justify-content: center;
  }
  img{
    height: 85vh;
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
    height: 100%;
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
  .second button{
    padding: 12px 25px;
    border: none;
    background-color: #FB9B02;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
  .second button:hover{
    background-color: white;
    color: #FB9B02;
    border: 1px solid #FB9B02;
  }


  @media screen and (max-width: 950px) {
    .container{
      flex-direction: column;
      padding: 20px 40px;
      gap: 30px;
    }  
    
    .first img{
      width: 100%;
      height: 100%;
    }
  }

`
export default HumanUx;