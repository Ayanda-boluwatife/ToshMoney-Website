import React from 'react'
import styled from 'styled-components';


const TeamsAbout = () => {
  return (
    <Wrapper>
        <div className='advantages'>
            <span>Team</span>
            <h1>our teams</h1>
            <p>Meet Our Team of Tech Visionaries Passionate about Innovation and Empowering Businesses.</p>
        </div>
        <div className='all-bg'>
            <div className="one">
                <div className="inner-one">
                    <h1>IBRAHIM KOLAPO</h1>
                    <p>sen. full-stack developer</p>
                </div>
            </div>
            <div className="two">
                <div className="inner-one">
                    <h1>IBRAHIM KOLAPO</h1>
                    <p>sen. full-stack developer</p>
                </div>
            </div>
            <div className="three">
                <div className="inner-one">
                    <h1>IBRAHIM KOLAPO</h1>
                    <p>sen. full-stack developer</p>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding:40px ;
  .advantages span{
        color: #FB9B02;
        font-weight: 600;
    } 
    .one{
        background-image: url('/images/Rectangle 61.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 60vh;
        width: 100%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .all-bg{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 80px;
    }
    .two{
        width: 100%;
        height: 60vh;
        background-image: url('/images/Rectangle 62.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .three{
        width: 100%;
        height: 60vh;
        border-radius: 20px;
        background: url('/images/Rectangle 63.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .inner-one{
        background-color: white;
        line-height: 50%;
        margin-top: 280px;
        padding: 10px;
        border-radius: 30px;
    }

    @media screen and (max-width:950px) {
        .all-bg{
            grid-template-columns: 1fr;
        }
    }
`
export default TeamsAbout;