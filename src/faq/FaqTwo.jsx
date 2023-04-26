import {React, useState, useRef} from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

const FaqTwo = () => {

    const items = [
        {
          title: 'How much is your course?',
          content: 'The price for each course can be found in his book'
        },
        {
          title: ' when is your course starting?',
          content: 'We don’t have a fixed starting date for students we normally attach each new student to their personal tutor upon registration'
        },
        {
          title: 'Will I get a certificate upon completion?',
          content: ' Of course yes, there is a certificate for each verified student who daily commits and completes their requirement for certification as stated in our terms and condition upon completing their course'        },
        {
          title: 'Do you have kids coding classes?',
          content: 'Yes we do train kids who are eager to become a software engineer '        },
        {
          title: 'Do you provide free laptops for students?',
          content: 'No, we always recommend each student should have their personal laptop'        
        },
        {
          title: 'What types of laptops do I need for programming?',
          content: 'Any laptop with at least 4 GB ram, 1.5 processor (speed), and 120 GB ram'        
        },
        {
          title: 'What time do you open?',
          content: 'We open between 9: 00 am – 5:30 pm'        
        },
        {
          title: ' Do you have a weekend class',
          content: 'es, we organize weekend class for special student between Saturday and Sunday only'        
        },
      ];

    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };
  return (
    <Wrapper>
        <div className='main'> 
            <h1 className='fake'>Get help</h1>
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
    font-size: 30px;
   }

   .main{
    width: 40%;
   }
   h1, h3{
        font-weight: 600;
        font-family: 'Raleway', sans-serif; 
    }
    p{
        font-weight: 300;
        font-family: 'Poppins', sans-serif;  
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
.accordion div{
    font-weight: 300;
    font-family: 'Poppins', sans-serif;  
}
.one div{
    font-weight: 600;
    font-family: 'Raleway', sans-serif; 
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
    .fake{
        font-size: 25px;
    }

   }
`
export default FaqTwo;