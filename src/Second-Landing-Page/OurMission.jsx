import React from 'react'
import styled from 'styled-components'

const OurMission = () => {
  return (
    <Wrapper>
        <div>
            <img src="/images/Rectangle 11.png" alt="" />
        </div>
        <div>
            <h1 className='mission'>Our Mission</h1>
            <p className='about'>At Toshconsult Technologies Inc, our mission is to empower businesses, individuals, and aspiring tech professionals with innovative software solutions and training programs that drive success. We are committed to delivering exceptional service and quality products in website design, web development, app development, and all aspects of software development, while also providing accessible and comprehensive education to help people transition to tech careers. Our goal is to foster a culture of creativity, collaboration, and lifelong learning that inspires our team and our clients to achieve their full potential.</p>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 40px;
    align-items: center;

    .mission{
        font-size: 3vw;
    }
    h1{
        font-family: "Raleway", sans-serif;
        font-weight: 600;
    }
    p{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }
    .about{
        line-height: 200%;
    }



    @media screen and (max-width: 950px) {
        grid-template-columns: 1fr;

        img{
            width: 100%;
        }
        .mission{
            font-size: 6vw;
        }
        .about{
            line-height: 150%;
        }
    }
`
export default OurMission;