import React from 'react'
import styled from 'styled-components';
import group11 from '../images/Rectangle 11.png'
import group5 from '../images/Group 5 (1).png'
import group6 from '../images/Group 6.png'
import group7 from '../images/Group 7.png'
import group8 from '../images/Group 8.png'

const Interact = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="first">
                <h1>interact with talented folks in the community</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
                <div className="end">
                    <div className="one vet">
                        <img src={group5} alt={group5} />
                        <p>community support</p>
                    </div>
                    <div className="one gon">
                        <img src={group6} alt={group6} />
                        <p>collaborate with folks</p>
                    </div>
                    <div className="one gon">
                        <img src={group7} alt={group7} />
                        <p>flexible working environment</p>
                    </div>
                    <div className="one vet">
                        <img src={group8} alt={group8} />
                        <p>24/7 support</p>
                    </div>
                </div>
            </div>
            <div className="second">
                <img src={group11} alt={group11} />
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
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 70px;
        align-items: center;
        grid-gap: 30px;
        text-transform: capitalize;
    }
    .first{
        width: 100%; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
    }
    .first h1{
        font-weight: 600;
        font-size: 35px;
        font-family: 'Raleway', sans-serif;
    }
    .first p{
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
        font-family: 'Poppins', sans-serif;
    }
    .second{
        /* width: 100%;
        height: 90vh; */
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
    }
    .second img{
        height: 400px;
    }
    .end{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
        grid-gap: 10px;
    }
    .one{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .vet, .gon{
        border: .8px solid #FB9B02;
        border-radius: 10px;
        padding: 5px;
    }
    .gon{
        border: .8px solid #C12DC1;
    }


    @media screen and (max-width: 950px) {
        .container{
            grid-template-columns: 1fr;
            padding: 40px;
        }
        .first{
            padding: 0;
        }
        .second img{
            width: 100%;
        }

    }

`

export default Interact;