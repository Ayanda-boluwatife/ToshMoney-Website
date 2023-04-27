import React from 'react'
import styled from 'styled-components'

const FaqQuestionTwo = () => {
  return (
    <Wrapper>
        <div className='main'>
            <h1>Frequently asked questions for Training</h1>
        </div>

        
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
background: rgba(254, 243, 199, 0.5);

.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
}
h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
        text-align: center;
    }



@media screen and (max-width:950px) {
    .main{
        width: 100%;
    }
}
`
export default FaqQuestionTwo