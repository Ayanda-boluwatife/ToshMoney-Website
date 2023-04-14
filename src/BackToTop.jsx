import React, { useState } from 'react'
import styled from 'styled-components';
import {FaArrowCircleUp} from 'react-icons/fa'

const BackToTop = () => {

  const [visible, setVisible] = useState(false);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120) {
          setVisible(true)
        }
        else{
          setVisible(false)  
        }
    })

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }



  return (
    <Wrapper>
        <button onClick={scrollToTop} className={`${visible ? "back-to-top active" : "back-to-top"}`}><FaArrowCircleUp /></button>
    </Wrapper>

  )
}

const Wrapper = styled.div`
    
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .back-to-top{
    position: fixed;
    bottom: 3%;
    left: 90%;
    padding: 5px 15px;
    background-color: #FB9B02;
    border-radius: 50%;
    visibility: hidden;
    opacity: 0;
    transition: all 1s ease;
    border: none;
    font-size: 40px;
    text-align: center;
    cursor: pointer;
    animation: animater 2s linear infinite;
    z-index: 1000;
  }
  @keyframes animater {
    0%{transform: translateY(10px);}
    50%{transform: translateY(0px);}
    100%{transform: translateY(10px);}
  }
  svg{
    margin-top: 5px;
  }

  .back-to-top.active{
    opacity: 1;
    visibility: visible;
  }


  @media screen and (max-width: 950px) {
    .back-to-top{
      left: 82%;
    }
  }

`

export default BackToTop;