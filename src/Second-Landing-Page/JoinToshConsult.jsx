import React from 'react'
import styled from 'styled-components';

const JoinToshConsult = () => {
  return (
    <Wrapper>
        <div className="main">
            <h1>Like To Work With Us</h1>
            <p>You're sure to get exceptional service, quality products, and comprehensive training.</p>
            <div className="btn-group">
              <a href={'/courses'}><button>Explore Our Courses</button></a>
              <a href={'/service'}><button>View Our Services</button></a>
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
    width: 90%;
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
    .btn-group{
      flex-direction: column;
      gap: 10px;
    }
   }
`
export default JoinToshConsult;