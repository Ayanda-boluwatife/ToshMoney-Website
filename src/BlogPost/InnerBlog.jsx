import React from 'react';
import styled from 'styled-components';

const InnerBlog = (props) => {
  return (
    <Wrapper>
        <div className='innerblog__grid__1'>
          <div>
              <h2>{props.title}</h2>
          </div>
          <div className='innerblog__main'>
              <img src={props.blogimg} alt="" />
              <p>{props.para1}</p>
              <p>{props.para2}</p>
              <p>{props.para3}</p>
              <p>{props.para4}</p>
          </div>
        </div>

        <div className='innerblog__grid__2'>
          <div className='border__1'>
            <h2>{props.border1}</h2>
            <ul>
              <li>{props.list1}</li>
              <li>{props.list2}</li>
              <li>{props.list3}</li>
              <li>{props.list4}</li>
              <li>{props.list5}</li>
            </ul>
          </div>
          <div className='border__2'>
          <h2>{props.border2}</h2>
            <ul>
              <li>{props.list6}</li>
              <li>{props.list7}</li>
              <li>{props.list8}</li>
              <li>{props.list9}</li>
              <li>{props.list10}</li>
            </ul>
          </div>
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`

padding: 0 4rem;
display: grid;
grid-template-columns: 60% 40%;
grid-gap: 2rem;
margin-bottom: 3rem;

.border__1, .border__2{
  border: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.border__1 ul li, .border__2 ul li{
  padding: 6px;
}

.innerblog__grid__2{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.innerblog__main img{
  width: 100%;
  height: 400px;
}

p, li{
  font-family: "Poppins", sans-serif;
}

h1, h2, h3{
  font-family: "Railway", sans-serif;
}

@media screen and (max-width:1024px) {

  grid-template-columns: 1fr;
}

@media screen and (max-width:600px) {
  padding: 0 1rem;
  grid-template-columns: 1fr;

  .innerblog__main img{
    height: 300px;
  }
}
`
export default InnerBlog