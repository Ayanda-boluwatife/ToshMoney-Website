import React from 'react'
import styled from 'styled-components';

const JoinToshConsult = () => {
  return (
    <Wrapper>
        <div className="main">
            <h1>Like to join us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.</p>
            <div className="btn-group">
              <a href={'/courses'}><button>Explore More</button></a>
              <a href={'/contact'}><button>Get In Touch</button></a>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 60px;
   .main{
    background: #C12DC1;
    border-radius: 14px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 70%;
    height: 50vh;
   }
   h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
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
   .btn-group{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
   }
   @media screen and (max-width:950px) {
    .main{
        width: 100%;
    }
   }
`
export default JoinToshConsult;