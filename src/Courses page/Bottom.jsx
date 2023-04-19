import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Bottom = () => {
  return (
    <Wrapper>
      <a href={'/register-now'}><button>Apply Now</button></a>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 10vh;
   width: 100%;
   button{
    padding: 10px 25px;
    color: white;
    border: none;
    background-color:#C12DC1;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 800;
    transition: ease-in-out .5s;
   }
   button:hover{
    transition: ease-in-out .5s;
    border: 1px solid #C12DC1;
    background-color: white;
    color: #C12DC1;
   }
   a{
    color: #C12DC1;
   }

`
export default Bottom;