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
              <h1>Mr Faruk</h1>
              <p><em>"Toshconsult Technologies Inc gave us the best software<br/> for our hauling and logistics company. I’d recommend them always"</em></p>
            </div>
            <div className='one'>
              <img src="/images/Elip.png" alt="" />
              <h1>Mr Adams</h1>
              <p><em>“Toshconsult is the best Web agency. They handle<br/> project with good mindset to help brands grow”</em></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className='one'>
              <img src="/images/Eli.png" alt="" />
              <h1>Mubarak</h1>
              <p><em>"Toshconsuit agency did an excellent job by providing me with a speedy and SEO responsive website for my business;<br/> I recommended anyone who needs a website for all kinds of business; trust me, you won't regret it"</em></p>
            </div>
            <div className='one'>
              <img src="/images/Elip.png" alt="" />
              <h1>Alfa Taofeeq</h1>
              <p><em>"ToshConsult is the best website developer, website designer. They provide the best quality services"</em></p>
            </div>
          </SwiperSlide>
            <SwiperSlide className='SwiperSlide'>
              <div className='one'>
                <img src="/images/Eli.png" alt="" />
                <h1>Idiagbon Abdulrahman</h1>
                <p><em>"ToshConsult is the best web agency. I repeat again, they are the best!! They developed<br /> Elpakonnect.com.ng for us and we’re happy with their work. I’ll always recommend them"</em></p>
              </div>
              <div className='one'>
                <img src="/images/Elip.png" alt="" />
                <h1>Ayanda Boluwatife</h1>
                <p><em>"The best software development company. I’m currently learning programming at Toshconsult Inc.<br/>If you want to learning web Development, app development, then I’d recommend Toshconsult Inc for you"</em></p>
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
      text-align: center;

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