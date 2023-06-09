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
          <p>We are committed to delivering exceptional service and quality products in website design, web development, app development, and all aspects of software development, while also providing accessible and comprehensive training to help people transition to tech careers</p>
          <Link to={'/service'}><button>learn more</button></Link>
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
      padding: 40px;
      margin-top: 110px;
      gap: 30px;
    }  
    
    .first img{
      width: 100%;
      height: 100%;
    }
  }

`

export default About;