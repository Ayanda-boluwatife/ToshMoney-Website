import React from 'react'
import styled from 'styled-components';
import {BsCheckLg} from 'react-icons/bs';
import {TbCurrencyNaira} from 'react-icons/tb'
import Bottom from '../Courses page/Bottom';

const GeneralProps = (props) => {
  return (
   <Wrapper>
        <div className="cover">
            <div className="top-header">
                <h1>Course Details</h1>
                <p>{props.para}</p>
            </div>
            <div className="groove">
                <img src={props.picture} alt={props.picture} />
                <div className="middle">
                    <div className="middle-one">
                        <h2 className='head-p'>Course Price</h2>
                        <h4><TbCurrencyNaira/>{props.price}</h4>
                    </div>
                    <div className="middle-two">
                        <h2 className='head-d'>Course Duration</h2>
                        <h4>{props.duration}</h4>
                    </div>
                </div>
                <div className="flex-group">
                    <div className="first">
                        <h2>WHAT YOU’LL LEARN</h2>
                        <div className="items">
                            <p>{props.one}</p>
                            <p>{props.two}</p>
                            <p>{props.three}</p>
                            <p>{props.four}</p>
                            <p>{props.five}</p>
                            <p>{props.six}</p>
                            <p>{props.seven}</p>
                            <p>{props.eight}</p>
                            <p>{props.nine}</p>
                            <p>{props.ten}</p>
                            <p>{props.eleven}</p>
                            <p>{props.twelve}</p>

                        </div>
                    </div>
                    <div className="second">
                        <h2>COURSE BENEFITS</h2>
                        <div className="items">
                        <p><BsCheckLg/> project handoff</p>
                        <p><BsCheckLg/> community collaboration</p>
                        <p><BsCheckLg/> group project</p>
                        <p><BsCheckLg/> expert instructors</p>
                        <p><BsCheckLg/> access to real life project</p>
                        <p><BsCheckLg/> job opportunity</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Bottom/>
   </Wrapper>
  )
}

const Wrapper = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .groove{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    .groove img{
        height: 40vh;
        width: 100%;
    }
    .cover{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 70px;
    }
    .top-header{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;
    }
    .middle{
        width: 50%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }
    .flex-group{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 70px;
    }
    .first, .second{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .first h2, .head-p{
        color: #FB9B02;
        background-color: #FEF3C7;
        border-radius: 10px;
        padding: 12px;
    }
    .head-d{
        width: 100%;
    }
    .head-p{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    h3{
        color: #FB9B02;
    }
    .second h2, .head-d{
        color: #C12DC1;
        background-color: #F8E7F8;
        border-radius: 10px;
        padding: 12px;
    }
    h1, h2, h3, h4{
        font-family: "Raleway", sans-serif;
        font-weight: 600;
    }
    .items{
        /* width: 100%; */
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    p{
        font-family: "Poppins", sans-serif;
    }
    .items p{
        font-family: "Poppins", sans-serif;
        display: flex;
        gap: 10px;
        flex-direction: row;
        align-items: center;
    }



    @media screen and (max-width: 950px) {
        .top-header{
            width: 100%;
        }
        .flex-group{
            flex-direction: column;
            gap: 20px;
        }
        .cover{
            padding: 40px;
        }
        .middle{
            width: 100%;
        }
    }
`

export default GeneralProps;