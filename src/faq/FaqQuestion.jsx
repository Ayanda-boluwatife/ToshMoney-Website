import React from 'react'
import styled from 'styled-components'

const FaqQuestion = () => {
  return (
    <Wrapper>
        <div className='main'>
            <h1>Frequently asked questions</h1>
            <p>Get to Know Our Team and Our Mission to Provide Exceptional Service and Quality Products</p>
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



@media screen and (max-width:950px) {
    .main{
        width: 100%;
    }
}
`
export default FaqQuestion