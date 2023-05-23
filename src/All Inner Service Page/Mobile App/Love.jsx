import React from 'react';
import bgimg from "../images/Group 75.png";
import styled from 'styled-components';

const Love = () => {
  return (
    <Wrapper>
        <div className="container">
            <h1>love to build something amazing with us?</h1>
            <a href={'/contact'}>contact us</a>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`

    width: 100%;
    height: 70vh;
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #F9F9F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
    h1{
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
        font-size: 35px;
    }
    a{
        padding: 10px 25px;
        color: white;
        border: none;
        background-color:#FB9B02;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 800;
        transition: ease-in-out .5s;
    }
    a:hover{
        transition: ease-in-out .5s;
        border: 1px solid #FB9B02;
        background-color: white;
        color: #FB9B02;
    }
`
export default Love;