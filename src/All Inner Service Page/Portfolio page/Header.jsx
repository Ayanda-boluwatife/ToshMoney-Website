import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
        <div className="container">
            <h1>standard portfolio</h1>
            <div className="tab">
                <button>All Portfolio</button>
                <button>fintech</button>
                <button>education</button>
                <button>SaaS & CRM </button>
                <button>E-commerce</button>
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
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 40px 70px;
    }
    h1{
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
        font-size: 35px;
    }
    .tab{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    button:nth-of-type(1){
        background-color:#FB9B02 !important;
        color: white;
    }
    button{
        padding: 12px 28px;
        border: none;
        color: black;
        background-color: #F9F9F9;
        border-radius: 15px;
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
    }
    button:hover, .active{
        background-color:#FB9B02;
        color: white;
    }

    @media screen and (max-width: 950px) {
        .container{
            padding: 40px;
        }
    }

`
export default Header;