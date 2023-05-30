import React,{ useState} from 'react'
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const ContactMain = () => {
  const [userMsg, setUserMsg] = useState({
    full_name : '',
    service:'',
    budget: '',
    phone_number:'',
    whatsapp_number:'',
    email:'',
    message: ''
  })

  const [redirect, setRedirect] = useState(false)

  const handleUserInput = (event)=>{
    const {name, value} = event.target;
    setUserMsg((prevData)=>{
      return{
        ...prevData,
        [name]:value
      }
    })
  };
  
const handleSubmit = async(event)=>{
  event.preventDefault();
  const response = await fetch("https://toshapi.onrender.com/contact",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body:JSON.stringify(userMsg)
})
if (response.ok){
  alert("Message sent successfully!")
  setRedirect(true)
}
}

if(redirect){
  return <Navigate to={"/service"} />
}

  return (
    <Wrapper>
      <div className="container">
        <div className="controller">
          <div className='main'>
                <h1>send us your message.</h1>
                <p>Get in Touch with us by filling the below form</p>
          </div>
        </div>

        <div className='form'>
        <div className="form-area">
          <p>Fill The Below Form</p>
        </div>
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <label htmlFor="full_name">Full Name:</label> 
              <input type="text" name="full_name" id="full_name" 
              onChange={handleUserInput}
              value={userMsg.full_name}
              />
            </div>
            <div className="field">
              <label htmlFor="">Select your Services</label>
              <select name="service" id="service" 
              onChange={handleUserInput}
              value={userMsg.service}
              >
                <option>Mobile App Development</option>
                <option>UIUX Design</option>
                <option>Website Development</option>
                <option>Software Development</option>
                <option>Digital Marketing</option>
              </select>
            </div>
            <div className='field'>
              <label htmlFor="">Your Propose Budget:</label>
              <select name="budget" id="budget" 
              onChange={handleUserInput}
              value={userMsg.budget}
              >
                <option >20,000 - 50,000</option>
                <option>50,0000 - 80,000</option>
                <option>80,000 - 100,000</option>
                <option>100,000 - 150,000</option>
                <option>150,000 - Above</option>
              </select>
            </div>
            <div className='field'>
              <label htmlFor="phone_number">Phone Number:</label>
              <input type="tel" name="phone_number" id="phone_number" 
              onChange={handleUserInput}
              value={userMsg.phone_number} />
            </div>
            <div className='field'>
              <label htmlFor="whatsapp_number">WhatsApp Number:</label>
              <input type="tel" name="whatsapp_number" id="whatsapp_number" 
              onChange={handleUserInput}
              value={userMsg.whatsapp_number} />
            </div>
            <div className='field'>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" 
              onChange={handleUserInput}
              value={userMsg.email} />
            </div>
            <div className='field'>
              <label htmlFor="message">MESSAGE:</label>
              <textarea name="message" id="message" 
              onChange={handleUserInput}
              value={userMsg.message} cols="30" rows="10"></textarea>
            </div>
          <div>
            <a href={"/service"}><button type='submit'>Send Now</button></a>
          </div>
          </form>
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
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      padding: 0 30px;
      margin-top: 50px;
    }

   span{
    color: #FB9B02;
    font-size: 700;
   }
   div{
        font-family: "Raleway", sans-serif;
    }
    .controller{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .main h1{
      color: #FB9B02;
      font-size: 27px;
    }
   .main{
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
   }
   .form-area{
    background: rgba(254, 243, 199, 0.7);
    border-radius: 14px;
    color: #FB9B02;
    padding: 5px 70px;
    font-size: 1.5vw;
    font-weight: 700;
    width: 100%;
   }

   input, textarea, select, option{
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #F8E7F8;
      border-radius: 14px;  
      outline-color: #FB9B02;
      padding: 15px;
      box-shadow: 0 4px 4px rgba(254, 243, 199, 0.7);
   }
   .form{
      display: flex;
      flex-direction: column;
      max-width: 500px;
      width: 100%;
      row-gap: 20px;
   }
   form{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
   }
   .field{
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 8px;
   }
   .form button{
    padding:10px 30px;
    background-color: #FB9B02;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
   }
   @media screen and (max-width:950px) {
    .main{
      width: 100%;
    }
    .form-area{
      font-size: 3vw;
      padding: 5px 30px;
      width: 90%;
    }
    .form-area p{
    text-align: center;
   }
   }
`
export default ContactMain;