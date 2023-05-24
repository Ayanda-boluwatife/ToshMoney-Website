import React from 'react'
import styled from 'styled-components'

const MainBlog = () => {
  return (
    <Wrapper>
        <div>
            <div className='main'>
               <div className="main__header">
                <h1>Explore Our Blogs</h1>
                <div className="tab">
                    <button>Popular</button>
                    <button>Recent</button>
                    <button>Past</button>
                </div>
               </div>
               <div className="main__card">
                <div className="card__1">
                    <img src="/images/blog__1.png" alt="" />
                    <h1>How to use chatGPT for UI/UX design: 25 examples</h1>
                    <p>The practical guide to include AI in your daily workflow Instead of continuing the endless debate “will AI replace designers” let's focus on something practical.</p>
                </div>
                <div className="card__2">
                    <img src="/images/blog__2.png" alt="" />
                    <h1>Bad Bad UI: 10 Common Mistakes in User Interfaces</h1>
                    <p>We all learn from mistakes, and this rule applies to web designers as well. In this article, we will tell you what mistakes many of them make when creating user interface design.</p>
                </div>
                <div className="card__3">
                    <img src="/images/blog__3.png" alt="" />
                    <h1>Frustrations and Triumphs: My Journey to Learning</h1>
                    <p>A true language love story — I've been learning Korean for a whopping 15 years. 15 difficult and exciting years. I can’t imagine a life without</p>
                </div>
               </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.main__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main__header h1{
    font-size: 6vw;
}

.tab{
    display: flex;
    gap: 20px;
    align-items: center;
}

.tab button{
    padding: 8px 20px;
    font-size: 25px;
    font-family: "Poppins", sans-serif;
}
`
export default MainBlog;