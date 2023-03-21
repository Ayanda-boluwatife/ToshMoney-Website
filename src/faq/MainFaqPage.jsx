import {React, useState} from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

const MainFaqPage = () => {
    
    const items = [
        {
          title: 'When is the class taking place',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam sunt, fugiat dolorum incidunt minima provident saepe nulla a quam iure similique ad eius beatae modi temporibus dignissimos animi facere sapiente. Velit ipsa reprehenderit eos vitae nesciunt animi, a temporibus doloremque quos, molestiae, ducimus dignissimos in eaque quisquam ratione tempora repellat? Ipsa, architecto odit ut perspiciatis assumenda possimus tenetur porro voluptatem cum molestias, reiciendis sint perferendis quis, repudiandae nobis eveniet?.'
        },
        {
          title: 'When is the class taking place',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam sunt, fugiat dolorum incidunt minima provident saepe nulla a quam iure similique ad eius beatae modi temporibus dignissimos animi facere sapiente. Velit ipsa reprehenderit eos vitae nesciunt animi, a temporibus doloremque quos, molestiae, ducimus dignissimos in eaque quisquam ratione tempora repellat? Ipsa, architecto odit ut perspiciatis assumenda possimus tenetur porro voluptatem cum molestias, reiciendis sint perferendis quis, repudiandae nobis eveniet?.'
        },
        {
          title: 'When is the class taking place',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam sunt, fugiat dolorum incidunt minima provident saepe nulla a quam iure similique ad eius beatae modi temporibus dignissimos animi facere sapiente. Velit ipsa reprehenderit eos vitae nesciunt animi, a temporibus doloremque quos, molestiae, ducimus dignissimos in eaque quisquam ratione tempora repellat? Ipsa, architecto odit ut perspiciatis assumenda possimus tenetur porro voluptatem cum molestias, reiciendis sint perferendis quis, repudiandae nobis eveniet?.'        },
        {
          title: 'When is the class taking place',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam sunt, fugiat dolorum incidunt minima provident saepe nulla a quam iure similique ad eius beatae modi temporibus dignissimos animi facere sapiente. Velit ipsa reprehenderit eos vitae nesciunt animi, a temporibus doloremque quos, molestiae, ducimus dignissimos in eaque quisquam ratione tempora repellat? Ipsa, architecto odit ut perspiciatis assumenda possimus tenetur porro voluptatem cum molestias, reiciendis sint perferendis quis, repudiandae nobis eveniet?.'        },
        {
          title: 'When is the class taking place',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam sunt, fugiat dolorum incidunt minima provident saepe nulla a quam iure similique ad eius beatae modi temporibus dignissimos animi facere sapiente. Velit ipsa reprehenderit eos vitae nesciunt animi, a temporibus doloremque quos, molestiae, ducimus dignissimos in eaque quisquam ratione tempora repellat? Ipsa, architecto odit ut perspiciatis assumenda possimus tenetur porro voluptatem cum molestias, reiciendis sint perferendis quis, repudiandae nobis eveniet?.'        },
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