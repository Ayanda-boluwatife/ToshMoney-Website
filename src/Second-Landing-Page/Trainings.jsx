import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Trainings = () => {
  return (
    <Wrapper>
        <div className="container">
            <h3 className='header'>Advatages of ToshConsult</h3>
            <div className='advantages'>
                <h1>innovative solution at toshconsult</h1>
                <p>Discover How Toshconsult Delivers Comprehensive Development Services, Innovative Solutions, and Exceptional Customer Service, Along with Comprehensive Training Programs to Empower Tech Professionals</p>
            </div>
            <div className="grid-system">
                <div className='one'>
                    <div><img src="/images/Group 18.png" alt="" /></div>
                    <div className='content'>
                        <h1>Comprehensive software development services</h1>
                        <p>We  offers a wide range of software development services, including website design, web development, app development, and more. Clients can rely on their experienced team to handle all aspects of the development process, from concept to launch.</p>
                    </div>
                </div>
                <div className='two'>
                    <div><img src="/images/Group 19.png" alt="" /></div>
                    <div className='content'>
                        <h1>Expert training programs</h1>
                        <p>We offers a wide range of software development services, including website design, web development, app development, and more. Clients can rely on their experienced team to handle all aspects of the development process, from concept to launch.</p>
                    </div>
                </div>
                <div className='three'>
                    <div><img src="/images/Group 20.png" alt="" /></div>
                    <div className='content'>
                        <h1>Innovative solutions</h1>
                        <p>We prides itself on delivering innovative software solutions that meet the unique needs of each client. Their team stays up-to-date with the latest trends and technologies in the industry, and leverages this knowledge to develop cutting-edge products.</p>
                    </div>
                </div>
                <div className='four'>
                    <div><img src="/images/Group 21.png" alt="" /></div>
                    <div className='content'>
                        <h1>Exceptional customer service</h1>
                        <p>We are dedicated to providing exceptional customer service to each and every client. Their team is responsive, communicative, and always willing to go the extra mile to ensure that clients are satisfied with the final product.</p>
                    </div>
                    <div className='btn'><Link to={'/service'}><button>View All Services</button></Link></div>
                </div>
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
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 70px;
        gap: 40px;
        text-transform: capitalize;
    }
    .grid-system{
        width: 100%;
        display : grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
        row-gap: 50px;
    }
    .advantages{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .advantages h1{
        font-size: 35px;
    }
    .header{
        color: #FB9B02;
        font-weight: 600;
        font-family: "Raleway", sans-serif;
    }
    .one, .two, .three, .four{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
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
    .container{
        padding: 40px;
    }
    .grid-system{
        grid-template-columns: 1fr;
    }
    .advantages{
        width: 100%;
    }
   }
`
export default Trainings;