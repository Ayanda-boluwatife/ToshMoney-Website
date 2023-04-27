import React from 'react'
import styled from 'styled-components';

const ContactMain = () => {
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
          <form action="">
            <div className='field'>
              <label htmlFor="">Full Name:</label> 
              <input type="text" name="" id="" />
            </div>
            <div className="field">
              <label htmlFor="">Select your Services</label>
              <select name="" id="">
                <option value="">Mobile App Development</option>
                <option value="">UIUX Design</option>
                <option value="">Website Development</option>
                <option value="">Software Development</option>
                <option value="">Digital Marketing</option>
              </select>
            </div>
            <div className='field'>
              <label htmlFor="">Your Propose Budget:</label>
              <select name="" id="">
                <option value="">20,000 - 50,000</option>
                <option value="">50,0000 - 80,000</option>
                <option value="">80,000 - 100,000</option>
                <option value="">100,000 - 150,000</option>
                <option value="">150,000 - Above</option>
              </select>
            </div>
            <div className='field'>
              <label htmlFor="">Phone Number:</label>
              <input type="email" name="" id="" />
            </div>
            <div className='field'>
              <label htmlFor="">Email:</label>
              <input type="number" name="" id="" />
            </div>
            <div className='field'>
              <label htmlFor="">MESSAGE:</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          <div>
            <button>Send Now</button>
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
   }
`
export default ContactMain;