import {React , useState}from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

const MainRegisterPage = () => {
    const [isPop, setIsPop] = useState(false);
  return (
    <Wrapper>
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
                        <input type="text" />
                    </div>
                    <div className='field'>
                        <label htmlFor="">Email:</label> 
                        <input type="email" />
                    </div>
                </div>
                <div>
                   <h3>Gender</h3>
                   <div>
                        <input type="radio" name="" id="" />
                        <span>Male</span>
                   </div>
                   <div>
                        <input type="radio" name="" id="" />
                        <span>Female</span>
                   </div>
                </div>
                <div className='first'>
                    <div className='field'>
                        <label htmlFor="">Date Of Birth</label>
                        <input type="date" name="" id="" />
                    </div>
                    <div className='field'>
                        <label htmlFor="">Phone Number</label>
                        <input type="number" name="" id="" />
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor="">Contact Address</label>
                    <input type="text" name="" id="" />
                </div>
                <div className='first'>
                    <div className='field'>
                        <label htmlFor="">Street Address</label>
                        <input type="text" name="" id="" />

                    </div>
                    <div className='field'>
                        <label htmlFor="">State / Province / Region</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="application">
                    <h3>Course Application</h3>
                    <div className='field'>
                        <label htmlFor="">CHOOSE COURSE:</label>
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
                        <label htmlFor="">Level</label>
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
                    <div className='first'>
                        <div className='field'>
                            <label htmlFor="">CHOOSE YOUR LEVEL:</label>
                            <input type="text" />
                        </div>
                        <div className='field'>
                            <label htmlFor="">OTHERS:</label> 
                            <input type="text" />
                        </div>
                    </div>

                    <div>
                        WHY DO YOU WANT TO LEARN THIS COURSE? <br />
                        the question is meant to help us familiarize with your interest  and specifics skills. <br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>


            </form>
            <div className='submit'>
                <p>Subtmit your application for our team to review. Our team will get back to you within 24 hours.</p>
                <button onClick={()=>setIsPop(!isPop)}>Submit</button>
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
                        <p>Your applicatio has been sent to our team successfuly. <br /> oue team will get back to you in the next 24 hours</p>
                        <Link to={'/'}><span>Back To Home</span></Link>
                    </div>
                </div>
                    </div>
            )}
        </div>

        <div><Link to={'/'}>Back To Home</Link></div>

        
    </Wrapper>
  )
}
const Wrapper = styled.section`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

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
        flex-direction: column;
        gap: 40px;
        width: 100%;
    }
    .field{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    form input{
        width: 100%;
    }
    .form-area{
        width: 80%;
    }
    input, textarea, select, option{
        width: 100%;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #F8E7F8;
        border-radius: 10px;
        margin-top: 10px;
    }
    .submit button{
        width: 10%;
        cursor: pointer;
        background-color: #FB9B02;
        color: white;
        padding: 10px;
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
    }
    .main-main{
        width: 100%;
        height: 100vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 33%;
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