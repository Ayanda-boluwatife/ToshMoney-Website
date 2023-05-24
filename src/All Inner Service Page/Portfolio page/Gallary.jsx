import React from 'react';
import styled from 'styled-components';
import gally1 from '../images/Rectangle 100.png';
import gally2 from '../images/Rectangle 101.png';
import gally3 from '../images/Rectangle 102.png';
import gally4 from '../images/Rectangle 103.png';
import gally5 from '../images/Rectangle 104.png';
import gally6 from '../images/Rectangle 105.png';
const Gallary = () => {
  return (
    <Wrapper>
        <div className="container">
            <img src={gally1} alt={gally1} />
            <img src={gally2} alt={gally2} />
            <img src={gally3} alt={gally3} />
            <img src={gally4} alt={gally4} />
            <img src={gally5} alt={gally5} />
            <img src={gally6} alt={gally6} />
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        padding: 30px 70px;
    }

    @media screen and (max-width: 950px) {
        .container{
            grid-template-columns: repeat(1, 1fr);
            padding: 40px;
        }
    }

`
export default Gallary;