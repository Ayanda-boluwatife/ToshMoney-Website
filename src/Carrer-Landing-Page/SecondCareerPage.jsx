import React from 'react'
import styled from 'styled-components'
import Trainings from '../Second-Landing-Page/Trainings';

const SecondCareerPage = () => {
  return (
    <Wrapper>
        <div>
            <div className='main'>
                <span>Benefits</span>
                <h1>Be among the tech maker working toward innovations</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
            </div>
            <div>
                <Trainings />
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    span{
        color: #FB9B02;
        font-weight: 600;
    }
    .main{
      padding: 40px;
    }
`
export default SecondCareerPage;