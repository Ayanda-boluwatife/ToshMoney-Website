import React from 'react'
import styled from 'styled-components';

const BenefitService = () => {
  return (
    <Wrapper>
        <div>
            <h1>Why Choosing Us </h1>
        </div>

        <div className='benefits'>
            <div className='one'>
                <div>
                    <img src="/images/Group 9.png" alt="" />
                </div>
                <h1>Experience Team</h1>
                <p>Are you looking for professionals and experienced tech team to build your website, mobile app, software, and manage your marketing and advertising campaigns across all digital platforms? You have come to the right place. With over 10 years of experience touching all major professions, we are an end-to-end solution. Our experts and industry leaders are ready to take on your project.</p>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Group 10.png" alt="" />
                </div>
                <h1>Technical Support </h1>
                <p>We do not only solve our customer issues, but we also help you and/or your company grow by revealing the shortfalls and issues that can be modified and fixed. This not only improves your processes and makes your business better at what you do, but it can also help execute savings as you are reducing the number of customer pain points </p>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Group 11.png" alt="" />
                </div>
                <h1>Long-term Project</h1>
                <p>Whether you have a 6-month project, a year, or more, we are your digital partners before, during, and after your project. With our growing digital services and expertise - we operate as your outsourced team, working with you to grow the business.</p>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 40px ;

  h3{
    color: #FB9B02;
    font-size: 700;
    font-family: 'Raleway', sans-serif; 

  }

  .benefits{
    display: flex;
    gap: 30px;
  }
  .one{
    background: #FFFFFF;
    border: 1px solid #F8E7F8;
    border-radius: 14px;
    padding: 20px;
  }
  h1, h3{
    font-weight: 600;
    font-family: 'Raleway', sans-serif; 
  }
  p{
    font-weight: 300;
    font-family: 'Poppins', sans-serif;  
  }
  .two{
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #FEF3C7;
    border-radius: 14px;
    padding: 20px;
  }
  @media screen and (max-width:950px) {
    .benefits{
        flex-direction: column;
    }
  }
`
export default BenefitService;