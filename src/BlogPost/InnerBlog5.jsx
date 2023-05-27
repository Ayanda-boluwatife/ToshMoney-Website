import React from 'react'
import styled from 'styled-components'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'
import InnerBlog from './InnerBlog'

const InnerBlog5 = () => {
  return (
    <Wrapper>
      <div>
        <Nav />
      </div>
      <TopProps 
        header= "Blog 5"
      />
      <InnerBlog 
        title= "Blog 5"
        blogimg= '/images/blog__2.png'
      />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  
`
export default InnerBlog5