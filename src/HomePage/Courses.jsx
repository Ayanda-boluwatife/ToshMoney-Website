import React from 'react'
import styled from 'styled-components';
import {BsCheckLg} from 'react-icons/bs'
import group19 from '../images/Rectangle 19.png';
import group26 from '../images/Rectangle 26.png';
import group27 from '../images/Rectangle 27.png';
import group38 from '../images/Rectangle 38.png';
import group32 from '../images/Rectangle 32.png';
import group33  from '../images/Rectangle 33 (2).png'


const Courses = () => {
  return (
    <Wrapper>
        <div className="container">
            <h3>Available Courses</h3>
            <div className="top">
                <h1>Become A Pro Learner.</h1>
            </div>
            <div className="grid-section">
                <div className='first'>
                    <img src={group19} alt={group19} />
                    <div className="shape hi">
                        <h1>FRONT-END DEVELOPMENT</h1>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>HTML</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>CSS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>bootstrap</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>tailwind CSS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>javascript</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>React JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>GIT & GITHUB</span>
                            </div>
                        </div>
                        <a href={'/course/front-end'}><button className='learn un'>Learn More</button></a>
                    </div>
                </div>
                <div className='first second'>
                    <img src={group26} alt={group26} />
                    <div className="shape">
                        <h1>BACK-END DEVELOPMENT</h1>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>javascript</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Node JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Express JS</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>passport JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>PostMan</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>mongoose</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>GIT & GITHUB</span>
                            </div>
                        </div>
                        <a href={'/course/back-end'}><button className='learn more un'>Learn More</button></a>
                    </div>
                </div>
                <div className='first'>
                    <img src={group27} alt={group27} />
                    <div className="shape">
                        <h1>FULL -STACK DEVELOPMENT</h1>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>HTML</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>CSS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>javascript</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>bootstrap</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>React JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Node Js</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Express JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Passport JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>socket IO</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>MongoDB</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>GIT & GITHUB</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Mongoose</span>
                            </div>
                        </div>
                        <a href={'/course/fullstack'}><button className='learn'>Learn More</button></a>
                    </div>
                </div>
                <div className='first'>
                    <img src={group38} alt={group38} />
                    <div className="shape">
                        <h1>PYHTON FULL -STACK DEVELOPMENT</h1>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>python</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Django</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>PostGrel</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>bootstrap</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>GIT & GITHUB</span>
                            </div>
                        </div>
                        <div className='one'>
                        <div >
                                <span><BsCheckLg/></span>
                                <span>HTML</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>CSS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>javascript</span>
                            </div>
                        </div>
                        <a href={'/coures/python'}><button className='learn un'>Learn More</button></a>
                    </div>
                </div>
                <div className='first second'>
                    <img src={group32} alt={group32} />
                    <div className='shape'>
                        <h1 className='optional'>UI/UX DESIGN</h1>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>UI Design</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Figma</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>UX Design</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>User Research</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>jUser Journey</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>User Flow</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Wireframe</span>
                            </div>
                        </div>
                        <a href={'/course/uiux'}><button className='learn more un'>Learn More</button></a>
                    </div>
                </div>
                <div className='first'>
                    <img src={group33} alt={group33} />
                    <div className="shape">
                        <h1>MOBILE APP DEVELOPMENT</h1>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>HTML</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>CSS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>bootstrap</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Expo</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Node JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>React Native</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Express JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Passport JS</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>socket IO</span>
                            </div>
                        </div>
                        <div className='one'>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>MongoDB</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>GIT & GITHUB</span>
                            </div>
                            <div>
                                <span><BsCheckLg/></span>
                                <span>Monroose</span>
                            </div>
                        </div>
                        <a href={'/course/mobile-app'}><button className='learn'>Learn More</button></a>
                    </div>
                </div>
            </div>
            <div className='viewcover'>
                <a href={'/courses'}><button className='viewall'>View all Courses</button></a>
            </div>
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
        gap: 30px;
        padding: 70px;
    }
    .container h3{
        font-family: 'Raleway', sans-serif;
        color: #FB9B02;
    }
    .top{
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .top h1{
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
        font-size: 35px;
    }
    .top p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
        color: rgba(0, 0, 0, 0.6);
    }
    .grid-section{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, auto));
        grid-gap: 60px;
    }
    .first{
        width: 100%;
        min-height: 70vh;
        border: 1px solid #F8E7F8;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
    }
    .second{
        border: 1px solid #FEF3C7;
    }
    .first img{
        width: 100%;
    }
    .shape{
        padding: 20px;
         display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        min-height: 40vh;

    }
    .shape h1{
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        padding: 10px 0;
        border-bottom: 2px solid #C12DC1;
    }
    .second h1{
        border-bottom: 2px solid #FB9B02
;

    }
    .learn{
        width: 100%;
        padding: 12px;
        color: white;
        background-color: #C12DC1;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
    .learn:hover{
        border: 1px solid #C12DC1;
        background-color: white;
        color: #C12DC1;
    }
    .more{
        background-color: #FB9B02;
    }
    .more:hover, .viewall:hover{
        color: #FB9B02;
        background-color: white;
        border: 1px solid #FB9B02;
    }
    .viewcover{
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-top: 20px;
    }
    .viewall{
        padding: 12px 25px;
        color: white;
        background-color: #FB9B02;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
    .un{
        margin-top: 50px;
    }
    .one{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        font-family: 'Poppins', sans-serif;

    }
    .one div{
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        gap: 5px;
    }



    @media screen and (max-width: 950px) {
        .container{
            padding: 40px;
        }
        .one span {
            font-size: 15px;
        }
    }

`

export default Courses;