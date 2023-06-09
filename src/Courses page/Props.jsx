import React from 'react'
import styled from 'styled-components';


const Props = (props) => {
  return (
    <Wrapper>
        <div className="enclosure">
            <div className='image'>
                <img src={props.image} alt={props.image} />
            </div>
            <div className="first">
                <h2>{props.head}</h2>
                <p>{props.paragraph}</p>
                <div className='list'>
                    <span>{props.one}</span>
                    <span>{props.two}</span>
                    <span>{props.three}</span>
                    <span>{props.four}</span>
                    <span>{props.six}</span>
                    <span>{props.seven}</span>
                    <span>{props.eight}</span>
                    <span>{props.nine}</span>
                    <span>{props.ten}</span>
                    <span>{props.eleven}</span>
                    <span>{props.twleve}</span>
                </div>
                <div className='btn-group'>
                    <a href={props.link}><button className={props.btn}>{props.button}</button></a>
                </div>
            </div>

        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
   
   .enclosure{
        width: 100%;
        min-height: 30vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border: 1px solid #F8E7F8;
        padding: 20px;
   }
   .image{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 40px;
   }
   h2{
    font-family: "Raleway", sans-serif;
    font-weight: 600;
   }
   span, p{
        font-family: "Poppins", sans-serif;
   }
   .image img{
        height: 250px; 
        border-radius: 20px;
   }
   .first{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
   }
   .list{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 30px;
        column-gap: 10px;
   }
   .btn-group{
        width: 100%;
        display: flex;
        justify-content: flex-end;
   }



   @media screen and (max-width: 950px) {
        .enclosure{
            flex-direction: column;
        }
    
        .first{
            width: 100%;
            margin-top: 30px;
            text-align: center;
        }
        .first h2{
            font-size: 20px;
            text-align: center;
        }
        .image{
            width: 100%;
            padding: 0;

        }
        .list{
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
        }
        .btn-group{
            justify-content: center;
        }
    }

`

export default Props;