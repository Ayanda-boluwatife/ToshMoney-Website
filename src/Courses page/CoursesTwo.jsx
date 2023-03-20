import React from 'react'
import styled from 'styled-components';

const CoursesTwo = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="enclosure">
                <div className="sub">
                <h1>check all the courses available to take</h1>
                <p>Get to Know Our Team and Our Mission to Provide Exceptional Service and Quality Products</p>
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
        height: 70vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
    }
    .enclosure{
        width: 100%;
        height: 40vh;
        background-color: #FEF3C7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .sub{
        width: 40%;
        text-align: center;
    }
    .sub h1{
        font-size: 35px;
        font-family: 'Raleway', sans-serif;
    }
    .sub p{
        font-family: 'Poppins', sans-serif;
    }
    @media screen and (max-width: 950px) {
        .sub{
            width: 100%;
        }
    }

`

export default CoursesTwo;