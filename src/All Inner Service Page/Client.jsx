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
                        <h1>1</h1>
                        <img src={line} alt={line} />
                    </div>
                    <h3>choose our services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="card">
                    <div className="img-sect">
                        <h1>2</h1>
                        <img src={line} alt={line} />
                    </div>
                    <h3>request for meeting</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="card">
                    <div className="img-sect">
                        <h1>3</h1>
                        <img src={line} alt={line} />
                    </div>
                    <h3>get custom plan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="card">
                    <div className="img-sect">
                        <h1>4</h1>
                        <img src={line} alt={line} />
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
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .top{
        width: 50%;
        text-align: center;
    }
`
export default Client;