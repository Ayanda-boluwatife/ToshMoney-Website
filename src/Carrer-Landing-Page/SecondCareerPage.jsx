import React from 'react'
import styled from 'styled-components'
import Trainings from '../Second-Landing-Page/Trainings';

const SecondCareerPage = () => {
  return (
    <Wrapper>
        <div>
            <div className='main'>
                <h3>Benefits</h3>
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
    h3{
        color: #FB9B02;
        font-weight: 600;
    }
    .main{
      padding: 40px;
    }
    h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
    }
`
export default SecondCareerPage;