import React from 'react'
import styled from 'styled-components'
import Nav from '../HomePage/Nav'
import TopProps from '../Courses page/TopProps'
import InnerBlog from './InnerBlog'
import Footer from '../HomePage/Footer'

const InnerBlog3 = () => {
  return (
    <Wrapper>
        <div>
          <Nav />
        </div>
        <TopProps 
          header= 'Frustrations and Triumphs: My Journey to Learning'
        />
        <InnerBlog 
          title= 'Frustrations and Triumphs: My Journey to Learning'
          blogimg= '/images/blog__3.png'
          para1= 'A true language love story — I’ve been learning Korean for a whopping 15 years. 15 difficult and exciting years. I can’t imagine a life without.'
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
export default InnerBlog3