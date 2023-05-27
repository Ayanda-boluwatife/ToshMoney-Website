import React from 'react'
import styled from 'styled-components'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'
import InnerBlog from './InnerBlog'

const InnerBlog3 = () => {
  return (
    <Wrapper>
        <div>
          <Nav />
        </div>
        <TopProps 
          header= 'This is the blogpost 3 inner'
        />
        <InnerBlog 
          title= 'Blog 3'
          blogimg= '/images/blog__3.png'
        />
    </Wrapper>
  )
}
const Wrapper = styled.section`
`
export default InnerBlog3