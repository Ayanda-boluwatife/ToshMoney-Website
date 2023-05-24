import React from 'react'
import styled from 'styled-components'
import Love from './Love'


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
`
export default MainBlog;