import React from 'react'
import styled from 'styled-components';
import group9 from '../images/Group 9.png'
import group10 from '../images/Group 10.png'
import group11 from '../images/Group 11.png'
import group12 from '../images/Group 12.png'
const FeatureTwo = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="top">
                <h1>
                    Best place to learn & Grow 
                </h1>
                <p>
                    Get the most comprehensive theoretical and practical Training program during and after-training support
                </p>
            </div>
            <div className="grid-section">
                <div className='one'>
                    <img src={group9} alt={group9} />
                    <div className="set">
                        <h4>Experience Instructors</h4>
                        <p>With practical training, our instructor guides rather than direct the learning process where students are naturally interested in learning. Our instructors train, guide, and mentor you to achieve your tech or career goals.</p>
                    </div>
                </div>
                <div className='two'>
                    <img src={group10} alt={group10} />
                    <div className="set">
                        <h4>Working Experience</h4>
                        <p>We train our students with work experience that enables them to take what they have learned off the page and put it into practice. Through practical opportunities, our students learn what it’s like to work as part of a team in a fast-paced business environment.</p>
                    </div>
                </div>
                <div className='two'>
                    <img src={group11} alt={group11} />
                    <div className="set">
                        <h4>Collaborative Project</h4>
                        <p>Our students learn and work co-operatively in pairs or groups. For example, brainstorming, group discussions, completing shared tasks in a pair or group, reaching an agreement about processes, analyzing problems, and finding solutions.</p>
                    </div>
                </div>
                <div className='one'>
                    <img src={group12} alt={group12} />
                    <div className="set">
                        <h4>Job Opportunity</h4>
                        <p>We provide internships, work placements, and part-time work to build their skills and try out a certain job or career. This will also help improve their understanding of a company’s culture and working practices.</p>
                    </div>
                </div>
            </div >
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        text-transform: capitalize;
        padding: 70px;
        gap: 35px;

    }
    .container h3{
        color: #FB9B02;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }
    .top{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
    .top h1{
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }
    .top p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    .grid-section{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px, auto));
        grid-gap: 20px;
        margin-top: 60px;

    }
    .grid-section div{
        text-align: center;
        padding: 30px 10px;
        width: 100%;
        border-radius: 20px;
    }
    .one{
        border: 1px solid #F8E7F8;
    }
    .one img{
        height: 50px;
    }
    .two{
        border: 1px solid #FEF3C7;
    }
    .set{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .set h4{
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }
    .set p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }



    @media screen and (max-width: 950px) {
        .container{
            padding: 40px;
        }
        .top{
            width: 100%;
        }
    }

`

export default FeatureTwo;