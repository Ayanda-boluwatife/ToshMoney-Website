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
              <ol>
                <li>
                  <h1>{props.para_header1}</h1>
                  <p>{props.para3}</p>
                </li>
                <li>
                  <h1>{props.para_header2}</h1>
                  <p>{props.para4}</p>
                </li>
                <li>
                  <h1>{props.para_header3}</h1>
                  <p>{props.para5}</p>
                </li>
              </ol>
          </div>
        </div>

        <div className='innerblog__grid__2'>
          <div className='border__1'>
            <h2>On this page</h2>
            <ul>
              <li>{props.para_header1}</li>
              <li>{props.para_header2}</li>
              <li>{props.para_header3}</li>
            </ul>
          </div>
          <div className='border__2'>
          <h2>Recommend blogs</h2>
            <ul>
              <li><a href="#">{props.list6}</a></li>
              <li><a href="#">{props.list7}</a></li>
              <li><a href="#">{props.list8}</a></li>
              <li><a href="#">{props.list9}</a></li>
              <li><a href="#">{props.list10}</a></li>
            </ul>
          </div>
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`

padding: 0 4rem;
display: grid;
grid-template-columns: 75% 25%;
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
  list-style: none;
}

.border__1 ul li{
  font-weight: 500;
}

.innerblog__main ol{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.border__2 a{
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-family: 'Times New Roman', Times, serif;
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