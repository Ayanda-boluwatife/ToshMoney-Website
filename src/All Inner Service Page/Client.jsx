import React from 'react'
import styled from 'styled-components';
import line from './images/Line 8.png'

const Client = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="top">
                <h1>we follow a simples process for our clients</h1>
            </div>
            <div className="grid-section">
                <div className="card">
                    <div className="img-sect">
                        <h1 className='active'>1</h1>
                        <span>----------------------</span>
                    </div>
                    <h3>choose our services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="card">
                    <div className="img-sect">
                        <h1>2</h1>
                        <span>----------------------</span>
                    </div>
                    <h3>request for meeting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="card">
                    <div className="img-sect">
                        <h1>3</h1>
                        <span>----------------------</span>
                    </div>
                    <h3>get custom plan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="card">
                    <div className="img-sect">
                        <h1>4</h1>
                        <span>----------------------</span>
                    </div>
                    <h3>delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, </p>
                </div>

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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 70px;
        background-color: #FEF3C7;
        text-transform: capitalize;
    }
    .top{
        width: 50%;
        text-align: center;
    }
    .grid-section{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
    }
    .card{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .img-sect{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
    .img-sect h1{
        padding: 13px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: white;
        color: black;
    }
    .active{
        background-color:#FB9B02 !important;
        color: white !important;
    }
    .img-sect h1:hover{
        background-color: #FB9B02;
        color: white;
    }
    h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
    }
    @media screen and (max-width: 950px) {
        .container{
            padding: 20px 40px;
        }
        .top{
            width: 100%;
        }
    }
`
export default Client;