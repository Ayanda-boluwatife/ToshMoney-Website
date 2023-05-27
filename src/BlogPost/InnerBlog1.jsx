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
            border1= "Blog post 1"
            list1= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list2= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list3= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list4= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list5= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            border2= 'Blog post 1'
            list6= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list7= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list8= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list9= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
            list10= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat atque debitis at perferendis enim id nostrum,'
        />
        <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.section`
    
`
export default InnerBlog1