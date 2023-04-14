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
                    <span className='twit'><Link><CiTwitter/></Link></span>
                    <span className='twit'><Link><AiOutlineLinkedin/></Link></span>
                    <span className='inst'><Link><FiFacebook/></Link></span>
                </div>
            </div>
            <div className="grid-section">
                <div className='set'>
                    <h3>Courses</h3>
                    <div className="linkers">
                        <a href={'/front-end'}>front-end development</a>
                        <a href={'/back-end'}>back-end development</a>
                        <a href={'/mobile-app'}>mobile app development</a>
                        <a href={'/uiux'}>ui/uX Design</a>
                        <a href={'/python'}>python full-stack development</a>
                        <a href={'/fullstack'}>javascript full-stack development</a>
                        <a href={"/wordpress"}>WordPress Development</a>
                        <a href={"/digital-markting"}>Digital Marketing</a>
                    </div>
                </div>
                <div className='set'>
                    <h3>services</h3>
                    <div className="linkers">
                        <Link>Website development</Link>
                        <a href={'/mobile-app'}>mobile app development</a>
                        <a href={"/digital-markting"}>Digital Marketing</a>
                        <Link>software development</Link>
                        <a href={'/uiux'}>uI/UX design</a>
                    </div>
                </div>
                <div className='set'>
                    <h3>About</h3>
                    <div className="linkers">
                        <a href={'/about'}>about us</a>
                        <a href={'/contact'}>contact us</a>
                        <a href={'/faq'}>FAQ</a>
                        <a href={'/privacy-policy'}>Privacy & Policy</a>
                    </div>
                </div>
                <div className='set'>
                    <h3>resources</h3>
                    <div className="linkers">
                        <Link>docs</Link>
                        <a href={'/career'}>career</a>
                        <Link>blog</Link>
                    </div>
                </div>
            </div>
            <div className="base">
                <div className='first'>
                    <span>2023 copyright by toshconsult.</span>
                </div>
                <div className='second'>
                    <div><h4>address:</h4> <span>block 20 ibrahim taiwo road, ilorin, kwara, NG</span></div>
                    <div><h4>phone no.:</h4> <span>08080595043</span></div>
                    <div><h4>email:</h4> <span>hello@toshconsult.com</span></div>
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
            gap: 10px;
        }
        .grid-section{
            grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
            grid-gap: 30px;
        }
        .social{
            justify-content: flex-start;
            width: 100%;
        }
        .logo{
            display: flex;
            justify-content: flex-start;
            width: 100%;
        }
        .base{
            flex-direction: column-reverse;
        }
    }


`

export default Footer;