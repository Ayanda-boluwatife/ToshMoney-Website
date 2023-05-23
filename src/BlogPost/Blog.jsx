import React from 'react'
import BackToTop from '../BackToTop'
import Footer from '../HomePage/Footer'
import Nav from '../HomePage/Nav'
import styled from 'styled-components'
import BlogHeader from './BlogHeader'
import MainBlog from './MainBlog'

const Career = () => {
  return (
    <Wrapper>
      <section>
        <Nav
          blogLink='blogLink'
        />
        <BlogHeader />
        <MainBlog />
        <Footer/>
        <BackToTop />
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .blogLink{
    color: #FB9B02 !important;
  }

`
export default Career;