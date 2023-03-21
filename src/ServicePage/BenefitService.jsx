import React from 'react'
import styled from 'styled-components';

const BenefitService = () => {
  return (
    <Wrapper>
        <div>
            <span>Benefits</span>
            <h1>The purpose of hiring us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan <br /> bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>

        <div className='benefits'>
            <div className='one'>
                <div>
                    <img src="/images/Group 9.png" alt="" />
                </div>
                <h1>EXPERIENCE INSTRUCTORS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Group 10.png" alt="" />
                </div>
                <h1>WORKING EXPERIENCE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className='two'>
                <div>
                    <img src="/images/Group 11.png" alt="" />
                </div>
                <h1>COLLABORATIVE PROJECT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 40px ;

  span{
    color: #FB9B02;
    font-size: 700;
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