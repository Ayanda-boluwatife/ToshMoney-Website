import React from 'react';
import styled from 'styled-components';

const InnerBlog = (props) => {
  return (
    <Wrapper>
        <div>
          <div>
              <h2>{props.title}</h2>
          </div>
          <div>
              <img src={props.blogimg} alt="" />
              <p>{props.para1}</p>
              <p>{props.para2}</p>
              <p>{props.para3}</p>
          </div>
        </div>

        <div>
          
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`

padding: 0 6rem;
`
export default InnerBlog