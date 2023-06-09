import React from 'react'
import styled from 'styled-components';
import rec2 from '../images/Group 60.png';
import rec1 from '../images/Group 59.png';
import rec3 from '../images/Group 61.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="first">
                <h1>
                    access the dream courses of your career.
                </h1>
                <div style={{lineHeight:"30px"}}>
                    <p>Become a Globally Certified, Sought-After, and Highly Paid Digital Software Developer.</p>
                    <p>Position yourself to get a well-paid job and help boost any business sales faster.</p>
                </div>
                <div className="btn-group">
                    <Link to={'/contact'}>get in touch</Link>
                    <Link to={'/courses'}>explore our course</Link>
                </div>
            </div>
            <div className="second">
                <div className="image">
                    <img src={rec2} alt={rec2} />
                </div>
                <div className="image middle">
                    <img  src={rec1} alt={rec1} />
                </div>
                <div className="image">
                    <img src={rec3} alt={rec3} />
                </div>
            </div>
        </div>
        <div className="top-gradient"></div>
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
        height: 90vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        font-weight: 700;
        padding: 70px;
    }
    .first{
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        padding-right: 6%;
    }
    .first h1{
        font-size: 35px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }
    .first p{
        color:  rgba(0, 0, 0, 0.5);
        font-family: 'Raleway', sans-serif;
    }
    .btn-group{
        display: flex;
        gap: 20px;
        font-family: 'Poppins', sans-serif;
    }
    .btn-group a:nth-of-type(1){
        background-color: #FB9B02;
        color: white;
        padding: 10px 25px;
        border: none;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
    }
    .btn-group a:nth-of-type(1):hover{
        color: #FB9B02;
        background-color: white;
        border: 1px solid #FB9B02;
    }
    .btn-group a:nth-of-type(2){
        background-color: white;
        border: 1px solid #C12DC1;
        color: #C12DC1;
        padding: 10px 25px;
        outline: none;
        border-radius: 10px;
        text-decoration: none;
        cursor: pointer;
    }
    .btn-group a:nth-of-type(2):hover{
        background-color: #C12DC1;
        color: white;
    }
    .second{
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }
    .image img{
        width: 100%;
    }
    .middle{
        animation: animate 4s linear infinite;
    }
    @keyframes animate {
        0%{
            transform: translateY(130px);
        }
        50%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(130px);
        }
    }
    .subsiquent{
        margin-top: 90px;
        width: 100%;
        min-height: 50vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: #FEF3C7;
        font-weight: 700;
        text-transform: capitalize;
    }
    .one{
        background-color: white;
        min-height: 20vh;
        padding: 30px;
        display: flex;
        gap: 20px;
        border-radius: 20px;
        width: 40%;
    }
    .one h3{
        font-family: 'Raleway', sans-serif;
    }
    .one p{
        color: rgba(0, 0, 0, 0.6);
        font-family: 'Poppins', sans-serif;
    }
    








    @media screen and (max-width: 950px) {
        .container{
            padding: 0 40px;
            flex-direction: column-reverse;
            gap: 130px;
        }
        .first{
            text-align: center;
        }
        .first p{
            line-height: 30px;
        }
        .first h1{
            font-size: 27px;
        }
        .second{
            gap: 10px;
        }
        .image{
            padding-top: 90px;
        }
        .btn-group{
            flex-direction: column;
        }

        .subsiquent{
            flex-direction: column;
            gap: 20px;
            padding: 20px 30px;
        }
        .one{
            width: 100%;
            flex-direction: column;
        }
    }

`

export default Hero;