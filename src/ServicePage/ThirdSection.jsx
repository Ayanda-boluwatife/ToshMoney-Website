import React from 'react'
import styled from 'styled-components';

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
                <p>We build mobile application that will helps strengthen your business by building relevance, familiarity, trust and credibility through your business-customer relationship.</p>
                <div>
                    <a href={'/service/mobile-app'}><button>Learn More</button></a>
                </div>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Rectangle 70.png" alt="" />
                </div>
                <h1>WEBSITE DEVELOPMENT</h1>
                <p>Our team of experts design and develop custom website can will help you generate long-term customer relationships, connect with your customers, generate leads, and boost sales.</p>
                <div>
                    <a href={'/service/website-development'}><button>Learn More</button></a>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 71.png" alt="" />
                </div>
                <h1>UI/UX DESIGN</h1>
                <p>Our experienced UI/UX designers will help you create a perfect user interface and user experience to keep your website clean, modern, and up-to-date.</p>
                <div>
                    <a href={'/service/uiux'}><button>Learn More</button></a>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 73.png" alt="" />
                </div>
                <h1>SOFTWARE DEVELOPMENT</h1>
                <p>Having software developed that meets the unique requirements of your business helps your employees work more efficiently and perform their job duties with greater confidence. Our software developers are here to help you.</p>
                <div>
                    <a href={'/service/softwaare-development'}><button>Learn More</button></a>
                </div>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Rectangle 74.png" alt="" />
                </div>
                <h1>DIGITAL MARKETING</h1>
                <p>With our professional digital marketing services, your business can establish brand credibility across a larger market.</p>
                <div>
                    <a href={'/service/digital-marketing'}><button>Learn More</button></a>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 75.png" alt="" />
                </div>
                <h1>Consulting</h1>
                <p>We will defines the strategies you need to position your business on the market to grow and then execute them via the necessary channels to communicate them to reach your target audience successfully.</p>
                <div>
                    <a href={'/contact'}><button>Learn More</button></a>
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
    column-gap: 20px;
    row-gap: 40px;
  }
  h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
    }
    a{
        cursor: pointer;
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
    cursor: pointer;

  }
  .two button, .three button{
    padding: 15px 25px;
    border: none;
    background: #FB9B02;
    border-radius: 14px;
    color: white;
    cursor: pointer;

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