import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WorkWithUS = () => {
  return (
    <Wrapper>
        <div className="main">
            <h1>bECOME A PRO LEARNER.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.</p>
            <Link to={'/contact'}><button>Get Started</button></Link>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 60vh;
   width: 100%;
   margin-top: 40px;
   h1{
    font-size: 25px;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
   }
   p{
    font-family: "Poppins", sans-serif;
   }
   .main{
    background: #f9e2f9;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    text-align: center;
    width: 100%;
    height: 50vh;

    text-transform: capitalize;
   }
   button{
    padding: 10px 25px;
    background-color: #C12DC1;
    border: none;
    color: white;
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
        text-align: center;
    }
   }
`
export default WorkWithUS;