import React from 'react'
import styled from 'styled-components'
import InnerBlog from './InnerBlog'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'
import Footer from '../HomePage/Footer'

const InnerBlog1 = () => {
  return (
    <Wrapper>
        <div>
            <Nav />
        </div>
        <TopProps 
            header= 'How to use chatGPT for UI/UX design: 25 examples'
        />
        <InnerBlog 
            title= 'How to use chatGPT for UI/UX design: 25 examples'
            blogimg= '/images/blog__1.png'
            para1= 'The practical guide to include AI in your daily workflow Instead of continuing the endless debate “will AI replace designers” lets focus on something practical.'
            para2= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum, error amet repellendus. Praesentium, debitis nostrum? Est ut consequatur perferendis dignissimos alias quaerat!'
            para3= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum, error amet repellendus. Praesentium, debitis nostrum? Est ut consequatur perferendis dignissimos alias quaerat!'
            para4= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum, error amet repellendus. Praesentium, debitis nostrum? Est ut consequatur perferendis dignissimos alias quaerat!'
            para5= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum, error amet repellendus. Praesentium, debitis nostrum? Est ut consequatur perferendis dignissimos alias quaerat!'
            para_header1= 'Generate copy for a website or section'
            para_header2= 'Get ideas for page layers or wireframe'
            para_header3= 'Ideas to optimize your design workflow'
            list6= 'Bad Bad UI: 10 Common Mistakes in User Interfaces,'
            list7= 'Bad Bad UI: 10 Common Mistakes in User Interfaces,'
            list8= 'Bad Bad UI: 10 Common Mistakes in User Interfaces,'
            list9= 'Bad Bad UI: 10 Common Mistakes in User Interfaces,'
            list10= 'Bad Bad UI: 10 Common Mistakes in User Interfaces,'
        />
        <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.section`
    
`
export default InnerBlog1