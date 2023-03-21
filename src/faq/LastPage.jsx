import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LastPage = () => {
  return (
    <Wrapper>
        <div className='main'>
            <h1>GET IN TOUCH</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
            <div>
                <Link to={'/contact'}><button>Contact Us</button></Link>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 40px;

    .main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    .main button{
        padding: 15px 35px;
        background: #FB9B02;
        border-radius: 10px;
        border: none;
        color: white;
        cursor: pointer;
    }
    h1{
        color: #FB9B02;
    }
    @media screen and (max-width:950px) {
        .main{
            width: 100%;
        }
    }
`
export default LastPage;