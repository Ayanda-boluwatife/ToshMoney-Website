import React from 'react'
import styled from 'styled-components';
import heroImg from '../images/Rectangle 86.png';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="first">
          <img src={heroImg} alt={heroImg} />
        </div>
        <div className="second">
          <h3>about</h3>
          <h1>we’re building the future of technology</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
          <Link><button>learn more</button></Link>
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
    padding: 70px;
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
  }


  @media screen and (max-width: 950px) {
    .container{
      flex-direction: column;
    }    
  }

`

export default About;