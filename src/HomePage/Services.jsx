import React from 'react'
import styled from 'styled-components';
import vector from '../images/Vector.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <Wrapper>
        <div className="container-two">
            <h3 className='header'>Services</h3>
            <div className="top">
                <h1>our services</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
                </p>
            </div>
            <div className="grid-system">
                <div className="one">
                    <div>
                        <img src={vector} alt={vector} />
                    </div>
                    <div className="content">
                        <h3>Web Development </h3>
                        <p>From custom designs to robust e-commerce solutions, we have the expertise to deliver a website that will set you apart from the competition.</p>
                    </div>
                </div>
                <div className="one">
                    <div>
                        <img src={vector} alt={vector} />
                    </div>
                    <div className="content">
                        <h3> Mobile App Development </h3>
                        <p>With years of experience and a commitment to quality, we'll work closely with you to understand your unique needs and create an app that perfectly represents your brand.</p>
                    </div>
                </div>
                <div className="one">
                    <div>
                        <img src={vector} alt={vector} />
                    </div>
                    <div className="content">
                        <h3> Software Development </h3>
                        <p>Our team of skilled developers uses the latest technologies and frameworks to create high-performance software that looks great on any device.</p>
                    </div>
                </div>
            </div>
            <div className="btn-group">
                <Link to={'/service'}><button>view all services</button></Link>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    .container-two{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 70px;
        background-color: #FEF3C7;
    }
    .header{
        font-family: 'Raleway', sans-serif;
        color: #FB9B02;
    }
    .top{
        width: 50%;
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
    }
    .grid-system{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
        grid-gap: 20px;
    }
    .one{
        width: 100%;
        height: 50vh;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 0 20px;
        gap: 20px;
    }
    .content{
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .content h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
    }
    .content p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;
    }
    .btn-group{
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .btn-group button{
        padding: 12px 25px;
        border-radius: 10px;
        background-color: #FB9B02;
        color: white;
        border: none;
        cursor: pointer;
    }
    .btn-group button:hover{
        border: 1px solid #FB9B02;
        background-color: white;
        color: #FB9B02;
    }

    @media screen and (max-width: 950px) {
        .container-two{
            padding: 40px;
        }
        .top{
            width: 100%;
        } 
        .btn-group{
            align-items: center;
            justify-content: center;
        }       
    }

`

export default Services;