import React from 'react'
import styled from 'styled-components'
import InnerBlog from './InnerBlog'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'

const InnerBlog2 = () => {
  return (
    <Wrapper>
        <div>
            <Nav />
        </div>
        <TopProps 
            header= 'Blog-post number 2'
        />
        <InnerBlog 
            title= "this is from alfa taofeeq"
            blogimg= '/images/blog__2.png'
        />
    </Wrapper>
  )
}
const Wrapper = styled.section`
    
`
export default InnerBlog2