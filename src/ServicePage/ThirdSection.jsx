import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ThirdSection = () => {
  return (
    <Wrapper>
        <div className="container">
        <div>
            <h1>Our Services</h1>
        </div>

        <div className='services'>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 69.png" alt="" />
                </div>
                <h1>MOBILE APP DEVELOPMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <Link to={'/contact'}><button>Hire us now</button></Link>
                </div>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Rectangle 70.png" alt="" />
                </div>
                <h1>WEBSITE DEVELOPMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <Link to={'/contact'}><button>Hire us now</button></Link>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 71.png" alt="" />
                </div>
                <h1>UI/UX DESIGN</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <Link to={'/contact'}><button>Hire us now</button></Link>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 73.png" alt="" />
                </div>
                <h1>SOFTWARE DEVELOPMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <Link to={'/contact'}><button>Hire us now</button></Link>
                </div>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Rectangle 74.png" alt="" />
                </div>
                <h1>DIGITAL MARKETING</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <Link to={'/contact'}><button>Hire us now</button></Link>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 75.png" alt="" />
                </div>
                <h1>Consulting</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <Link to={'/contact'}><button>Hire us now</button></Link>
                </div>
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
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 70px;
        gap: 40px;
        text-transform: capitalize;
    }

   h3{
    color: #FB9B02;
    font-size: 700;
  }
  .services{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
  }
  h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
    }
  .one, .two, .three{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .one img, .two img, .three img{
    width: 100%;
  }
  .one button{
    padding: 15px 25px;
    border: none;
    background: #C12DC1;
    border-radius: 14px;
    color: white;
  }
  .two button, .three button{
    padding: 15px 25px;
    border: none;
    background: #FB9B02;
    border-radius: 14px;
    color: white;
  }
  h1{
    font-size: 20px;
  }
  @media screen and (max-width:950px) {
    .container{
        padding: 40px;
    }
    .services{
        grid-template-columns: 1fr;
    }
    .one img, .two img{
        width: 100%;
    }
  }
`
export default ThirdSection;