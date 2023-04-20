import React from 'react'
import styled from 'styled-components'


const ServiceAbout = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className='advantages'>
                <h1 className='header'>our services</h1>
                <p>Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team</p>
            </div>

            <div className='one'>
                <div className='inner-one'>
                        <div className='image'><img src="/images/Group 23.png" alt="" /></div>
                        <div>
                            <h1>MOBILE APP DEVELOPMENT</h1>
                            <p>Expert Mobile App Development to Enhance User Experience and Drive Business Growth</p>
                        </div>
                </div>
                <div className='inner-inner-1'>
                        <div className='image'><img src="/images/Group 25.png" alt="" /></div>
                        <div>
                            <h1>WEBSITE DEVELOPMENT</h1>
                            <p>Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team</p>
                        </div>
                </div>
            </div>
            <div className='two'>
                <div className='inner-two'>
                    <div className='image'><img src="/images/Group 27.png" alt="" /></div>
                    <div>
                        <h1>DIGITAL MARKETING</h1>
                        <p>Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team</p>
                    </div>
                </div>
                <div className='inner-inner-2'>
                    <div className='image'><img src="/images/Group 29.png" alt="" /></div>
                    <div>
                        <h1>UI/UX DESIGN</h1>
                        <p>Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team</p>
                    </div>
                </div>
            </div>
        <div className='btn'><a href={'/service'}><button>View All Services</button></a></div>
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container{
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 70px;
        gap: 30px;
        text-transform: capitalize;
    }
    .header{
        color: #FB9B02;
        font-weight: 600;
        font-family: "Raleway", sans-serif;
    }
    .advantages{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .advantages h1{
        font-size: 35px;
    } 
    .one, .two{
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* gap: 20px; */
        column-gap: 20px;
        row-gap: 20px;
    }
    .inner-one, .inner-two{
        display: flex;
        gap: 10px;
        background: #FFFFFF;
        border: 1px solid #F8E7F8;
        border-radius: 14px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-top: 40px;
    }
    h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
    }
    .inner-inner-1, .inner-inner-2{
        display: flex;
        gap: 10px;
        background: #FFFFFF;
        border: 1px solid #FEF3C7;
        border-radius: 14px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-top: 40px;
    }
    .btn button{
    padding: 15px 30px;
    background: linear-gradient(102.73deg, #C12DC1 40.79%, #D913D9 71.33%);
    border-radius: 14px;
    border: none;
    float: right;
    color: white;
   }
   .btn button:hover{
    background: linear-gradient(102.73deg, #D913D9 71.33%,#C12DC1 40.79% );
    cursor: pointer;
   }
    @media screen and (max-width:950px) {
        .container{
            padding: 40px;
        }
        .advantages{
            width: 100%;
        }
        .one, .two{
            grid-template-columns: 1fr;
        }
        .inner-one, .inner-two, .inner-inner-1, .inner-inner-2{
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
            margin-top: 10px;
        }
        .image img{
            
            height: 70px;
        }
    }
`
export default ServiceAbout;