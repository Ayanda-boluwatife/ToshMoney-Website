import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WorkWithUS = () => {
  return (
    <Wrapper>
        <div className="main">
            <h1>LIKE TO WORK WITH US? </h1>
            <p>You're sure to get exceptional service, quality products, and comprehensive training.</p>
            <Link to={'/contact'}><button>Contact us</button></Link>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 60px;
   h1{
    font-size: 20px;
   }
   h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
    }
   .main{
    background: #C12DC1;
    border-radius: 14px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    width: 85%;
    line-height: 100%;
   }
   button{
    padding: 10px 25px;
    background-color: white;
    border: none;
    color:#C12DC1;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 800;
    transition: ease-in-out .5s;
   }
   button:hover{
    padding: 10px 70px;
    transition: ease-in-out .5s;
   }
   a{
    color: #C12DC1;
   }
   @media screen and (max-width:950px) {
    .main{
        width: 100%;
    }
   }
`
export default WorkWithUS;