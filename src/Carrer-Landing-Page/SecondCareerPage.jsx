import React from 'react'
import styled from 'styled-components'
import Trainings from '../Second-Landing-Page/Trainings';

const SecondCareerPage = () => {
  return (
    <Wrapper>
        <div>
            <div className='main'>
                <span>benefits</span>
                <h1>be among the tech maker working toward innovations</h1>
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
    
    .main{
      padding: 40px;
    }
`
export default SecondCareerPage;