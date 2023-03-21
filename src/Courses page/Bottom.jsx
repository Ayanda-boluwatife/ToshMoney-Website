import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Bottom = () => {
  return (
    <Wrapper>
        <div className="main">
            <h1>REGISTER FOR OUR CLASS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.</p>
            <Link><button>Contact Us</button></Link>
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
   padding: 70px;
   .main{
    background: #C12DC1;
    border-radius: 14px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
    width: 100%;
    height: 50vh;
    line-height: 100%;
    margin-bottom: 50px;
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
    padding: 40px;
    .main{
        width: 100%;
        text-align: center;
    }
   }
`
export default Bottom;