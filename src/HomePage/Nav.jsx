import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/Toshconsult Img 1.png';
import { Link } from 'react-router-dom';
const Nav = (Props) => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }
  return (
    <Wrapper>
        <nav>
            <Link to={'/'}><img src={logo} alt={logo} /> </Link>
            <ul className="nav-desktop">
                <li className='nav-link'><Link className={Props.homeLink} to={'/'}>Home</Link></li>
                <li className='nav-link'><Link className={Props.aboutLink} to={"/about"}>About</Link></li>
                <li className='nav-link'><Link className={Props.courseLink} to={'/courses'}>Courses</Link></li>
                <li className='nav-link'><Link className={Props.serviceLink} to={'/service'}>Services</Link></li>
                <li className='nav-link'><Link className={Props.careerLink} to={"/career"}>Testimonials</Link></li>
                <li className='nav-link'><Link className={Props.contactLink} to={'/contact'}>Contact</Link></li>
            </ul>
            <ul className="apply">
                <Link to={'/register-now'}><button className="app">Apply Now</button></Link>
            </ul>
            <button onClick={toggleMenu} className={`${menu ? 'toggle open' : 'toggle'}`}>
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
            </button>
        </nav>
        <ul className={`nav-mobile ${menu ? 'mobile-toggler' : 'nav-mobile'}`}>
            <li className='nav-link'><Link className={Props.homeLink} to={'/'}>Home</Link></li>
            <li className='nav-link'><Link className={Props.aboutLink} to={"/about"}>About</Link></li>
            <li className='nav-link'><Link className={Props.courseLink} to={'/courses'}>Courses</Link></li>
            <li className='nav-link'><Link className={Props.serviceLink} to={'/service'}>Services</Link></li>
            <li className='nav-link'><Link className={Props.careerLink} to={"/career"}>Testimonials</Link></li>
            <li className='nav-link'><Link className={Props.contactLink} to={'/contact'}>Contact</Link></li>
            <Link to={'/register-now'}><button className="app">Apply Now</button></Link>
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
    nav{
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .nav-desktop{
        list-style: none;
    }
    .nav-link{
        margin-right: 30px;
        display: inline-block;
    }
    .nav-link a {
        text-decoration: none;
        color: black;
    }
    .nav-link a:hover{
        color: #FB9B02;
    }
    /* #active{
        color: #FB9B02 !important;
    } */
    .nav-mobile{
        display: none;
    }
    .app{
        background-color: #FB9B02;
        padding: 10px 25px;
        color: white;
        cursor: pointer;
        border: none;
        border-radius: 10px;
    }
    .app:hover{
        color: #FB9B02;
        background-color: white;
        border: 1px solid #FB9B02;
    }
    .toggle {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        transition: all .2s ease-in-out;
    }
    .toggle div{
        background-color: black;
        height: 2px;
        width: 25px;
        transition: all .4s ease;
    }
    .toggle.open .first {
        transform: rotate(-45deg) translate(1px, 11px);
    }
    .toggle.open .second {
        opacity: 0;
    }
    .toggle.open .third {
        transform: rotate(45deg) translate(1px, -11px);
    }


    @media screen and (max-width: 950px) {
        nav{
            justify-content: space-between;
            padding: 0 30px;
        }
        .nav-desktop, .apply{
            display: none;
        }
        .toggle{
            display: flex;
        }
        .nav-mobile{
            width: 100%;
            position: absolute;
            top: 15%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            height: 40vh;
            background-color: white;
            overflow: hidden;
            transition: all ease .5s;
            padding: 0 20px;
            z-index: 10;
            transform: translate(-100%);
        }
        .mobile-toggler{
            transform: translate(0);
        }

    }

`

export default Nav;