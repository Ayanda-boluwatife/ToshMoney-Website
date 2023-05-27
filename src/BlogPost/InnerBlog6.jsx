import React from 'react'
import styled from 'styled-components'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'
import InnerBlog from './InnerBlog'

const InnerBlog6 = () => {
  return (
    <Wrapper>
      <div>
        <Nav />
      </div>
      <TopProps 
        header= "Blog 6"
      />
      <InnerBlog 
        title= "Blog 6"
        blogimg= '/images/blog__3.png'
      />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  
`
export default InnerBlog6