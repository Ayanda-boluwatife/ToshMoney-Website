import React from 'react';
import styled from 'styled-components';
import logo from '../images/Toshconsult Img 1.png';
import {AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai';
import {CiTwitter} from 'react-icons/ci';
import {FiFacebook} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
        <footer>
            <div className="logo-social">
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt={logo} /></Link>
                </div>
                <div className="social">
                    <span className='inst'><Link><AiOutlineInstagram/></Link></span>
                    <span className='twit'><a href='https://twitter.com/toshconsult '><CiTwitter/></a></span>
                    <span className='twit'><a href='https://www.linkedin.com/company/81878183'><AiOutlineLinkedin/></a></span>
                    <span className='inst'><a href='https://web.facebook.com/toshconsult'><FiFacebook/></a></span>
                </div>
            </div>
            <div className="grid-section">
                <div className='set'>
                    <h3>Courses</h3>
                    <div className="linkers">
                        <a href={'/course/front-end'}>front-end development</a>
                        <a href={'/course/back-end'}>back-end development</a>
                        <a href={'/course/mobile-app'}>mobile app development</a>
                        <a href={'/course/uiux'}>ui/uX Design</a>
                        <a href={'/course/python'}>python full-stack development</a>
                        <a href={'/course/fullstack'}>javascript full-stack development</a>
                        <a href={"/course/wordpress"}>WordPress Development</a>
                        <a href={"/course/digital-markting"}>Digital Marketing</a>
                    </div>
                </div>
                <div className='set'>
                    <h3>services</h3>
                    <div className="linkers">
                        <a href={'/service/website-development'}>Website development</a>
                        <a href={'/service/mobile-app'}>mobile app development</a>
                        <a href={'/service/digital-markting'}>Digital Marketing</a>
                        <a href={'/service/software-development'}>software development</a>
                        <a href={'/service/UIUX'}>uI/UX design</a>
                    </div>
                </div>
                <div className='set'>
                    <h3>About</h3>
                    <div className="linkers">
                        <a href={'/about'}>about us</a>
                        <a href={'/contact'}>contact us</a>
                        <a href={'/faq1'}>Services Faq</a>
                        <a href={'/faq2'}>Studentship Faq</a>
                        <a href={'/privacy-policy'}>Privacy & Policy</a>
                    </div>
                </div>
                <div className='set'>
                    <h3>resources</h3>
                    <div className="linkers">
                        <a href={'/career'}>career</a>
                        <a href='/blog'>blog</a>
                    </div>
                </div>
            </div>
            <div className="base">
                <div className='first'>
                    <span>2023 copyright by toshconsult.</span>
                </div>
                <div className='second'>
                    <div><h4>address:</h4> <span>block 20 ibrahim taiwo road, ilorin, kwara, NG</span></div>
                    <div><h4>phone no.:</h4> <span>+2348103856846</span></div>
                    <div><h4>email:</h4> <span style={{textTransform: 'lowercase'}}>info@toshconsultinc.com</span></div>
                </div>
            </div>
        </footer>
    </Wrapper>
  )
}

const Wrapper = styled.footer`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    footer{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 50px;
        text-transform: capitalize;
    }
    .logo-social{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 200px;
    }
    .social{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 20px;
    }
    .social span{
        border-radius: 20px;
        padding: 5px;
    }
    .inst{
        background-color: #FEF3C7;
        color: orange;
    }
    .inst a{
        color: orange;
        text-align: center;
        padding: 10px 5px;
    }
    .twit{
        background-color: #F8E7F8;
    }
    .twit a{
        color: #C12DC1;
        text-align: center;
        padding: 10px 5px;
    }
    .grid-section{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, auto);
        justify-content: space-around;
    }
    .set{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .linkers{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .linkers a{
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 400;
    }
    .linkers a:hover{
        color: orange;
    }
    .base{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 20px;
    }
    .first{
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .second{
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: rgba(0, 0, 0, 0.6);
    }



    @media screen and (max-width: 950px) {
        footer{
            padding: 0 30px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding-bottom: 30px;
        }
        .logo-social{
            flex-direction: column;
            margin-top: 50px;
            gap: 10px;
        }
        .grid-section{
            grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
            grid-gap: 30px;
        }
        .social{
            justify-content: center;
            width: 100%;
        }
        .logo{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .base{
            flex-direction: column-reverse;
            text-align: center;
        }
        .set{
            text-align: center;
        }
    }


`

export default Footer;