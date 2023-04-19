import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimony = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  return (
    <Wrapper>
      <div className='word'>
        <h1>What Our Client Are Saying</h1>
      </div>
        <Swiper {...params} className='swipe'>
          <SwiperSlide className='SwiperSlide'>
            <div className='one'>
              <img src="/images/Eli.png" alt="" />
              <h1>Idiagbon Abdulrahman</h1>
              <p><em>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.”</em></p>
            </div>
            <div className='one'>
              <img src="/images/Elip.png" alt="" />
              <h1>Ayanda Boluwatife</h1>
              <p><em>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.”</em></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className='one'>
              <img src="/images/Eli.png" alt="" />
              <h1>Mubarak</h1>
              <p><em>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.”</em></p>
            </div>
            <div className='one'>
              <img src="/images/Elip.png" alt="" />
              <h1>Alfa Taofeeq</h1>
              <p><em>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.”</em></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className='one'>
              <img src="/images/Eli.png" alt="" />
              <h1>Mr Faruk</h1>
              <p><em>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.”</em></p>
            </div>
            <div className='one'>
              <img src="/images/Elip.png" alt="" />
              <h1>Mr Adams</h1>
              <p><em>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget <br /> aenean accumsan bibendum gravida maecenas augue.”</em></p>
            </div>
          </SwiperSlide>
        </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.section`
background: rgba(254, 243, 199, 0.5);
padding: 40px;
    .SwiperSlide{
      display: flex;
      justify-content: space-around;
      transition: ease-in-out .5s;
      margin-top: 50px;
    }
    .one{
      background: #FFFFFF;
      border-radius: 14px;
      padding: 30px;
    }
    h1{
      font-family: "Raleway", sans-serif;
      font-weight: 600;
      font-size: 35px;
    }
    p{
      font-family: "Poppins", sans-serif;
    }
    .word{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* line-height: 2%; */
    }
    .swipe{
      transition: ease-in-out .5s;
    }
    @media screen and (max-width:1200px) {
      .SwiperSlide{
        flex-direction: column;
        gap: 30px;
      }
      .word{
        /* line-height: 10%; */
      }
    }
`
export default Testimony;