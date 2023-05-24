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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .container{
        width: 70%;
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .tab{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    button{
        padding: 12px 28px;
        border: none;
        color: black;
        background-color: #F9F9F9;
    }
    button:hover, .active{
        background-color:#FB9B02;
    }

`
export default Header;