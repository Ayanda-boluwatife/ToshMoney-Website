import React from 'react'
import styled from 'styled-components'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'
import InnerBlog from './InnerBlog'

const InnerBlog4 = () => {
  return (
    <Wrapper>
      <div>
        <Nav />
      </div>
      <TopProps 
        header= 'Blog 4'
      />

      <InnerBlog 
        title= 'blog 4'
        blogimg= '/images/blog__1.png'
      />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  
`
export default InnerBlog4