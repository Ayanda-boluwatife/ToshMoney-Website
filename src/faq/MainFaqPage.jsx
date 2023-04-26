import {React, useState, useRef} from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

const MainFaqPage = () => {

    const items = [
        {
          title: 'How much does it cost to own a company website?',
          content: 'A standard company website starts from ₦150,000 and above. Although it all depends on the features you want on the website'
        },
        {
          title: ' Do I need a domain and hosting or you will provide them for me?',
          content: 'We recommend buying and domain and hosting before we get started working on your project but in a situation whereby you don’t know how to” we can help out'
        },
        {
          title: 'Do I need a landing page or woo commerce website for my business?',
          content: 'Kindly note that a landing page is not a functional website, it is only meant to showcase business or company details and people will be able to pick up some information from your website. But your woo commerce adds some extra features to allow users to interact with your website even when you are not online'        },
        {
          title: 'What is a domain name?',
          content: 'A domain name is a name your website bears online and which people can type into their browser to locate your website'        },
        {
          title: 'How fast can you work on a custom website?',
          content: 'It takes our team of developers 4weeks or more to build a custom website from scratch'        
        },
        {
          title: 'How much does it cost to build a mobile application for my business?',
          content: 'Mobile application prices depend on the technologies to be used. For Android mobile apps, it cost ₦500k or above. But make sure you contact us first before placing your order.'        
        },
        {
          title: 'Do I need to buy an Android/Apple developer account?',
          content: 'Yes, it is recommended to have your own developer account with your company name.'        
        },
        {
          title: 'How long does it take to build a mobile app?',
          content: 'A Mobile app building process does take between 3 months and above but depends on the number of screens, the core features of the app and the technology to be used.'        
        },
      ];

    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };
  return (
    <Wrapper>
        <div className='main'> 
            <span className='fake'>FAQ</span>
            <h1>Get help</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>

        <div className='faq'>
            <p>FREQUENTLY ASKED QUESTIONS</p>
        </div>

        <div className='accordion'>

            {items.map((item, index) => (
                <div key={index} className="one">
                    <div >
                        <div className='plus' onClick={() => toggleAccordion(index)}>
                            {item.title}
                            {
                                activeIndex ? <span><FiPlus /></span> : <span><FiMinus /></span>
                            }
                        </div>
                    </div>
                    {activeIndex === index && (
                    <div className='content'>
                        {item.content}
                    </div>
                    )}
                    </div>
                ))}
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   padding: 40px;

   .fake{
    color: #FB9B02;
   }

   .main{
    width: 40%;
   }

   .faq{
    background: rgba(254, 243, 199, 0.7);
    border-radius: 14px;
    color: #FB9B02;
    padding: 5px 70px;
    font-size: 1.5vw;
    font-weight: 700;
    width: 90%;
}

.accordion{
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.one{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    background: #FFFFFF;
    border: 1px solid #F8E7F8;
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
    transition: ease-in-out .5s;
}

.one:hover{
    border:1px solid #FB9B02;
    color: #FB9B02;
    transition: ease-in-out .5s;
}

.plus{
    display: flex;
    justify-content: space-between;
    transition: ease-in-out .5s;
}

.svg{
    cursor: pointer;
}
.content{
    display: flex;
    flex-direction: column;
    padding-top: 10px;
}
.train{
    display: block;
} 
    .service{
        display: block;
    }
    .train-sub{
        display: none;
    } 
    .service-sub{
        display: none;
    }

   @media screen and (max-width:950px) {
    .main{
        width: 100%;
    }
    .faq{
        width: 80%;
        padding: 5px 40px;
        font-size: 3vw;
    }

   }
`
export default MainFaqPage