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
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.main__header{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.tab{
    display: flex;
    gap: 20px;
    align-items: center;
}
`
export default MainBlog;