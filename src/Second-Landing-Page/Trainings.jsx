import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Trainings = () => {
  return (
    <Wrapper>
        <div className='one'>
            <div><img src="/images/Group 18.png" alt="" /></div>
            <h1>Comprehensive software development services</h1>
            <p>We  offers a wide range of software development services, including website design, web development, app development, and more. Clients can rely on their experienced team to handle all aspects of the development process, from concept to launch.</p>
        </div>
        <div className='two'>
            <div><img src="/images/Group 19.png" alt="" /></div>
            <h1>Expert training programs</h1>
            <p>We offers a wide range of software development services, including website design, web development, app development, and more. Clients can rely on their experienced team to handle all aspects of the development process, from concept to launch.</p>
        </div>
        <div className='three'>
            <div><img src="/images/Group 20.png" alt="" /></div>
            <h1>Innovative solutions</h1>
            <p>We prides itself on delivering innovative software solutions that meet the unique needs of each client. Their team stays up-to-date with the latest trends and technologies in the industry, and leverages this knowledge to develop cutting-edge products.</p>
        </div>
        <div className='four'>
            <div><img src="/images/Group 21.png" alt="" /></div>
            <h1>Exceptional customer service</h1>
            <p>We are dedicated to providing exceptional customer service to each and every client. Their team is responsive, communicative, and always willing to go the extra mile to ensure that clients are satisfied with the final product.</p>
            <div className='btn'><Link to={'/service'}><button>View All Services</button></Link></div>
        </div>
        
    </Wrapper>
  )
}
const Wrapper = styled.section`
   display : grid;
   grid-template-columns: 1fr 1fr;
   padding: 40px;
   .one, .two, .three, .four{
    width: 80%;
    padding: 30px;
   }
   .one img:hover, .two img:hover, .three img:hover, .four img:hover{
    animation: animate .9s infinite;
   }

   @keyframes animate {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
   }
   .btn button{
    padding: 15px 30px;
    background: linear-gradient(102.73deg, #C12DC1 40.79%, #D913D9 71.33%);
    border-radius: 14px;
    border: none;
    float: right;
    color: white;
   }
   .btn button:hover{
    background: linear-gradient(102.73deg, #D913D9 71.33%,#C12DC1 40.79% );
    cursor: pointer;
   }

   @media screen and (max-width:950px) {
    grid-template-columns: 1fr;
    padding: 50px;
    .one, .two, .three, .four{
        width: 100%;
        padding: 10px;
    }
   }
`
export default Trainings;