import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const OurClients = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };
  return (
    <Wrapper>
        <div>
          <div><span>Our Clients</span></div>
        </div>
       <Swiper  >
          <SwiperSlide {...params} className='client'>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
            <div className='last'>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
              <img src="/images/adalo.png" alt="" />
            </div>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide {...params} className='client'>
            <div className='last'>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
            <div>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
            <div>
              <img src="/images/adalo.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide {...params} className='client'>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
            <div className='last'>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
              <img src="/images/adalo.png" alt="" />
            </div>
            <div>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide {...params} className='client'>
            <div className='last'>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
              <img src="/images/alphabet.png" alt="" />
            </div>
            <div>
              <img src="/images/Matmos logo.png" alt="" />
            </div>
            <div>
              <img src="/images/adalo.png" alt="" />
            </div>
          </SwiperSlide>
       </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   background-color :rgba(254, 243, 199, 0.5) ;
   width: 100%;
   display: flex;
   flex-direction: column;
   .client{
    /* width: 100%; */
    padding: 40px;
    display: flex;
    gap: 100px;
   }

   span{
    padding: 40px;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
   }

   @media screen and (max-width:950px) {
    .client{
      grid-template-columns: 1fr 1fr;
      row-gap: 30px;
    }
    .last{
      align-content: center;
    }
  }
      
`
export default OurClients