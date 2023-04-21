import {React , useState}from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

const MainRegisterPage = () => {
    const [isPop, setIsPop] = useState(false);
  return (
    <Wrapper>
        <div className="container">
            <div className='logo'>
                <Link to={'/'}><img src="/images/ToshConsult Img 1.png" alt="" /></Link>
            </div>

            <div className='register'>
                <p>Register For Our Training</p>
            </div>

            <div className="form-area">
                <form action="">
                    <div className='first'>
                        <div className='field'>
                            <label htmlFor="">Full Name:</label>
                            <input class="input"type="text" />
                        </div>
                        <div className='field'>
                            <label htmlFor="">Email:</label> 
                            <input class="input"type="email" />
                        </div>
                    </div>
                    <div className='field'>
                    <h3>Gender</h3>
                    <div className='special'>
                            <span>Male</span>
                            <input class="radio" type="radio" name="" id="" />
                    </div>
                    <div className='special'>
                            <span>Female</span>
                            <input class="radio" type="radio" name="" id="" />
                    </div>
                    </div>
                    <div className='first'>
                        <div className='field'>
                            <label htmlFor="">Date Of Birth</label>
                            <input class="input"type="date" name="" id="" />
                        </div>
                        <div className='field'>
                            <label htmlFor="">Phone Number</label>
                            <input class="input"type="number" name="" id="" />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor="">Contact Address</label>
                        <input class="input"type="text" name="" id="" />
                    </div>
                    <div className='first'>
                        <div className='field'>
                            <label htmlFor="">Street Address</label>
                            <input class="input"type="text" name="" id="" />

                        </div>
                        <div className='field'>
                            <label htmlFor="">State / Province / Region</label>
                            <input class="input"type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="application">
                        <h3 className='header'>Course Application</h3>
                        <div className='field'>
                            <label htmlFor="">Choose Course:</label>
                            <select name="" id="">
                                <option value="">Frontend Development</option>
                                <option value="">Backend Development</option>
                                <option value="">Python Development</option>
                                <option value="">Fullstack Development</option>
                                <option value="">UIUX Design</option>
                                <option value="">Digital Markrting</option>
                                <option value="">WordPress Development</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="">Choose Your Level:</label>
                            <select name="" id="">
                                <option value="">Beginner</option>
                                <option value="">Intermediate</option>
                                <option value="">Advance</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="">Preferred Time</label>
                            <select name="" id="">
                                <option value="">Morning</option>
                                <option value="">Afternoon</option>
                                <option value="">Weekend</option>
                            </select>
                        </div>
                        <div className='field'>
                            <h3>WHY DO YOU WANT TO LEARN THIS COURSE?</h3>
                            <p>The question is meant to help us familiarize with your interest  and specifics skills.</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                </form>
                <div className='submit'>
                    <p>Subtmit your application for our team to review. Our team will get back to you within 24 hours.</p>
                    <div>
                        <button onClick={()=>setIsPop(!isPop)}>Submit</button>
                    </div>
                </div>
                {isPop &&(
                    <div className="common">
                        <div className='pop'>
                            <div className="main-main">
                                <div  className="head">
                                    <Link to={'/'}><FiArrowLeft /></Link>
                                    <div>
                                        <img src="/images/Group 44.png" alt="" />
                                    </div>
                                </div>

                                <h1>THANK YOU FOR APPLYING WITH US!</h1>
                                <p>Your applicatio has been sent to our team successfuly. Our team will get back to you in the next 24 hours</p>
                                <Link to={'/'}><span>Back To Home</span></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    img{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div{
        font-family: "Raleway", sans-serif;
        font-weight: 600;
    }
    .register{
        padding: 10px 70px;
        width: 90%;
        background: rgba(254, 243, 199, 0.7);
        border-radius: 14px;
        color: #FB9B02;
        font-weight: 700;
    }
    .first{
        display: flex;
        flex-direction: row;
        gap: 40px;
        width: 100%;
        align-items: center;
    }
    .field{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .special{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
    }
    .header{
        color: #FB9B02;
        font-size: 25px;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .application{
        display: flex;
        flex-direction: column;
        gap: 22px;
        width: 100%;
    }
    .input, textarea, select, option{
        width: 100%;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #F8E7F8;
        border-radius: 10px;
        margin-top: 10px;
        outline-color: #FB9B02;
    }
    .radio{
        outline-color: #FB9B02;
    }
    .submit{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .submit button{
        cursor: pointer;
        background-color: #FB9B02;
        color: white;
        padding: 10px 25px;
        border: none;
        border-radius: 10px;
    }
    .second {
        margin-left: 30px;
    }
    a{
        color: #FB9B02;
        font-weight: 800;
    }
    .common{
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
    }
    .pop{
        width: 100%;
        max-width: 400px;
        height: 40vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
 
    }
    .main-main{
        width: 100%;
    }
    .head{
        display: flex;
        align-items: center;
        gap: 180px;
    }
    .head img{
        height: 50px;
    }
    @media screen and (max-width:950px) {
        .first input{
            width: 100%;
        }
        .first{
            flex-direction: column;
        }
        .second{
            margin-left: 0;
        }
    }
`
export default MainRegisterPage