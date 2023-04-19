import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Bottom = () => {
  return (
    <Wrapper>
      <Link><button>Apply Now</button></Link>
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

`
export default Bottom;