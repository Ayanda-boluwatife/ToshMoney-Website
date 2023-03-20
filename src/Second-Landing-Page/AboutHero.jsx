import React from 'react'
import styled from 'styled-components'

const AboutHero = () => {
  return (
    <Wrapper>
      <div className='line'></div>
        <div>
          <h1>Discover Our Story. Who We <br /> Are and What We Stand For</h1>
        </div>
        <div>
          <p>Get to Know Our Team and Our Mission to Provide Exceptional Service </p>
          <p>and Quality Products</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80vh;
  width: 100%;
*{
  padding: 0;
  margin: 0;
  box-sizing:border-box;
}
p{
  text-align: center;
}
h1{
  font-size: 3vw;
}
.line{
  background-color:linear-gradient(180deg, rgba(193, 45, 193, 0.31) 0%, rgba(206, 103, 206, 0) 100%);
  filter: blur(100px);
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width:950px) {
  h1{
    font-size: 6vw;
  }
}
`
export default AboutHero;