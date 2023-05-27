import React from 'react'
import styled from 'styled-components'
import InnerBlog from './InnerBlog'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'

const InnerBlog1 = () => {
  return (
    <Wrapper>
        <div>
            <Nav />
        </div>
        <TopProps 
            header= 'Blog-post number 1'
        />
        <InnerBlog 
            title= 'This is from Bolu'
            blogimg= '/images/blog__1.png'
        />
    </Wrapper>
  )
}
const Wrapper = styled.section`
    
`
export default InnerBlog1