import React from 'react'
import styled from 'styled-components';


const CareerHeader = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className='boss'>
                <h1>Search For Job</h1>
                <div>
                    <p>Get to Know Our Team and Our Mission to Provide</p>
                    <p> Exceptional Service and Quality Products</p>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(254, 243, 199, 0.5);
        padding: 40px;
        height: 70vh;
        width: 100%;
    }

    h1{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
        font-size: 35px;
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
    }
    .boss{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
    @media screen and (max-width: 950px) {

        .container{
            height: 40vh;
        }
     
    }

`
export default CareerHeader;