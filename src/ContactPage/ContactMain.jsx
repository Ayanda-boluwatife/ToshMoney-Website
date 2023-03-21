import React from 'react'
import styled from 'styled-components';

const ContactMain = () => {
  return (
    <Wrapper>
        <div className='main'>
            <span>Contact</span>
            <h1>send us your message.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>

        <div className="form-area">
          <p>Fill The Below Form</p>
        </div>

        <div className='form'>
          <form action="">
            <div>
              FULL NAME: <br />
              <input type="text" name="" id="" />
            </div>
            <div>
              EMAIL: <br />
              <input type="email" name="" id="" />
            </div>
            <div>
              MESSAGE: <br />
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          <div>
            <button>Send Now</button>
          </div>
          </form>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   padding: 40px;

   span{
    color: #FB9B02;
    font-size: 700;
   }
   .main{
    width: 40%;
   }
   .form-area{
    background: rgba(254, 243, 199, 0.7);
    border-radius: 14px;
    color: #FB9B02;
    padding: 5px 70px;
    font-size: 1.5vw;
    font-weight: 700;
    width: 80%;
   }
   input, textarea{
    width: 50%;
    background: #FFFFFF;
    border: 1px solid #F8E7F8;
    border-radius: 14px;  
    outline-color: #FB9B02;
    padding: 15px;
    box-shadow: 0 4px 4px rgba(254, 243, 199, 0.7);
   }
   .form{
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 20px;
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
    input, textarea{
      width: 100%;
    }
    .form-area{
      font-size: 3vw;
      padding: 5px 30px;
      width: 90%;
    }
    .main{
      width: 100%;
    }
   }
`
export default ContactMain;