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
          <h1>Empowering Businesses Through Digital Excellence</h1>
          <p>Drive your online presence and maximize your reach with our comprehensive digital marketing services. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content strategy, we develop tailored digital marketing campaigns that attract, engage, and convert your target audience.</p>
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
  img{
    height: 85vh;
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