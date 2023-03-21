import React from 'react'
import styled from 'styled-components';

const ThirdSection = () => {
  return (
    <Wrapper>
        <div>
            <span>All Services</span>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan <br /> bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>

        <div className='services'>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 69.png" alt="" />
                </div>
                <h1>MOBILE APP DEVELOPMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <button>Hire us now</button>
                </div>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Rectangle 70.png" alt="" />
                </div>
                <h1>WEBSITE DEVELOPMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <button>Hire us now</button>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 71.png" alt="" />
                </div>
                <h1>UI/UX DESIGN</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <button>Hire us now</button>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 72.png" alt="" />
                </div>
                <h1 className='font'>SOCIAL MEDIA MANAGEMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <button>Hire us now</button>
                </div>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Rectangle 73.png" alt="" />
                </div>
                <h1>SOFTWARE DEVELOPMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <button>Hire us now</button>
                </div>
            </div>
            <div className='one'>
                <div>
                    <img src="/images/Rectangle 74.png" alt="" />
                </div>
                <h1>DIGITAL MARKETING</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div>
                    <button>Hire us now</button>
                </div>
            </div>
            <div className='three'>
                <div>
                    <div>
                        <img src="/images/Rectangle 75.png" alt="" />
                    </div>
                    <h1>SEO MANAGEMENT</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <div>
                        <button>Hire us now</button>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   padding: 40px;

   span{
    color: #FB9B02;
    font-size: 700;
  }
  .services{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
  }
  .one, .two, .three{
    width: 80%;
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
  .three{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width:950px) {
    .services{
        grid-template-columns: 1fr;
    }
    .one img, .two img{
        width: 100%;
    }
  }
`
export default ThirdSection;