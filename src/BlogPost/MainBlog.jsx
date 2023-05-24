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
                    <div className="card__img">
                        <img src="/images/blog__1.png" alt="" />
                    </div>
                    <div className="card__content">
                        <h1>How to use chatGPT for UI/UX design: 25 examples</h1>
                        <p>The practical guide to include AI in your daily workflow Instead of continuing the endless debate “will AI replace designers” let's focus on something practical.</p>
                    </div>
                </div>
                <div className="card__2">
                    <div className="card__img">
                        <img src="/images/blog__2.png" alt="" />
                    </div>
                    <div className="card__content">
                        <h1>Bad Bad UI: 10 Common Mistakes in User Interfaces</h1>
                        <p>We all learn from mistakes, and this rule applies to web designers as well. In this article, we will tell you what mistakes many of them make when creating user interface design.</p>
                    </div>
                </div>
                <div className="card__3">
                    <div className="card__img">
                        <img src="/images/blog__3.png" alt="" />
                    </div>
                    <div className="card__content">
                        <h1>Frustrations and Triumphs: My Journey to Learning</h1>
                        <p>A true language love story — I've been learning Korean for a whopping 15 years. 15 difficult and exciting years. I can’t imagine a life without</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.main{
    padding: 20px;
}

.main__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

.main__header h1{
    font-size: 4vw;
}

.tab{
    display: flex;
    gap: 20px;
    align-items: center;
}

.tab button{
    padding: 6px 20px;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
}

.main__card{
    display: flex;
    justify-content: space-around;
    width: 80%;
    gap: 20px;
    overflow: hidden;
}

.card__1, .card__2, .card__3{
    /* width: 80%; */
    border: 1px solid #000;
    /* padding: 10px; */
    background-color: gray;
}

/* .card__content{
    
} */

/* .card__img img:hover, .card__img img:hover, .card__img img:hover{
    transform: scale(70px);
    transition: all .5s ease;
    overflow: hidden;
    width: 100%;
} */
`
export default MainBlog;