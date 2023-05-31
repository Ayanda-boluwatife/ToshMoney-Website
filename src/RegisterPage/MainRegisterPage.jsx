import {React , useState}from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

const MainRegisterPage = () => {
    const [isPop, setIsPop] = useState(false);
    const [registerMsg, setRegisterMsg] = useState({
        full_name: "",
        email: "",
        gender: "",
        date_of_birth: "",
        phone_number: "",
        contact_address: "",
        street_address: "",
        region: "",
        course: "",
        course_level: "",
        preferred_time: "",
        message: "",
    });

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setRegisterMsg((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

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
                <form>
                    <div className='first'>
                        <div className='field'>
                            <label htmlFor="full_name">Full Name:</label>
                            <input class="input" type="text" 
                                name='full_name' 
                                id='full_name' 
                                value={registerMsg.full_name} 
                                onChange={handleChangeInput} 
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="email">Email:</label> 
                            <input class="input" type="email" 
                                name='email' 
                                id='email' 
                                value={registerMsg.email} 
                                onChange={handleChangeInput} 
                            />
                        </div>
                    </div>
                    <div className='field'>
                    <h3>Gender</h3>
                    <div className='special'>
                        <span>Male</span>
                        <input class="radio" type="radio" name="radio-input"  
                            value={registerMsg.gender} 
                            onChange={handleChangeInput} 
                        />
                    </div>
                    <div className='special'>
                        <span>Female</span>
                        <input class="radio" type="radio" name="radio-input"                                
                            value={registerMsg.gender} 
                            onChange={handleChangeInput}
                        />
                    </div>
                    </div>
                    <div className='first'>
                        <div className='field'>
                            <label htmlFor="date_of_birth">Date Of Birth</label>
                            <input class="input" type="date" 
                                name='date_of_birth' 
                                id='date_of_birth' 
                                value={registerMsg.date_of_birth} 
                                onChange={handleChangeInput} 
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="phone_number">Phone Number</label>
                            <input class="input" type="number" 
                                name='phone_number' 
                                id='phone_number' 
                                value={registerMsg.phone_number} 
                                onChange={handleChangeInput} 
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor="contact_address">Contact Address</label>
                        <input class="input" type="text" 
                            name='contact_address' 
                            id='contact_address' 
                            value={registerMsg.contact_address} 
                            onChange={handleChangeInput} 
                        />
                    </div>
                    <div className='first'>
                        <div className='field'>
                            <label htmlFor="street_address">Street Address</label>
                            <input class="input" type="text" 
                                name='street_address' 
                                id='street_address' 
                                value={registerMsg.street_address} 
                                onChange={handleChangeInput} 
                            />

                        </div>
                        <div className='field'>
                            <label htmlFor="region">State / Province / Region</label>
                            <input class="input" type="text"
                                name='region' 
                                id='region' 
                                value={registerMsg.region} 
                                onChange={handleChangeInput} 
                            />
                        </div>
                    </div>
                    <div className="application">
                        <h3 className='header'>Course Application</h3>
                        <div className='field'>
                            <label htmlFor="course">Choose Course:</label>
                            <select 
                                name='course' 
                                id='course' 
                                value={registerMsg.course} 
                                onChange={handleChangeInput} 
                            >
                                <option>Frontend Development</option>
                                <option>Backend Development</option>
                                <option>Python Development</option>
                                <option>Fullstack Development</option>
                                <option>UIUX Design</option>
                                <option>Digital Markrting</option>
                                <option>WordPress Development</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="course_level">Choose Your Level:</label>
                            <select
                                name='course_level' 
                                id='course_level' 
                                value={registerMsg.course_level} 
                                onChange={handleChangeInput} 
                            >
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advance</option>    
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="preferred_time">Preferred Time</label>
                            <select
                                name='preferred_time' 
                                id='preferred_time' 
                                value={registerMsg.preferred_time} 
                                onChange={handleChangeInput} 
                            >
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Weekend</option>
                            </select>
                        </div>
                        <div className='field'>
                            <h3>WHY DO YOU WANT TO LEARN THIS COURSE?</h3>
                            <p>The question is meant to help us familiarize with your interest  and specifics skills.</p>
                            <textarea  
                                name='message' 
                                id='message' 
                                value={registerMsg.message} 
                                onChange={handleChangeInput}  cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className='submit'>
                    <p>Subtmit your application for our team to review. Our team will get back to you within 24 hours.</p>
                    <div>
                        <button 
                        // onClick={()=>setIsPop(!isPop)}
                        >Submit</button>
                    </div>
                    </div>
                </form>

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