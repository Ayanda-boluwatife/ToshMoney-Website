import React from 'react'
import styled from 'styled-components';
import Props from './Props';
import Rec6 from '../images/Rectangle 66.png';
import Rec1 from '../images/Rectangle 66 (1).png'
import Rec2 from '../images/Rectangle 66 (2).png'
import Rec3 from '../images/Rectangle 66 (3).png'
import group27 from '../images/Rectangle 27.png';
import group33  from '../images/Rectangle 33 (2).png'
import group74 from '../images/Rectangle 74.png';
import group101 from '../images/wordpress-tutorials (1).jpg';

const CoursesThree = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="top-head">
                <h1>available courses</h1>
                <p>Choose a career to learn and position yourself to get a well-paid job, start your own business, and help boost any business sales and awareness faster. </p>
            </div>
            <Props
                image={Rec6}
                head="FRONT-END DEVELOPMENT"
                paragraph="Learn the development of the graphical user interface of a website so that users can view and interact with that website."
                one=". HTML"
                two=". CSS"
                three=". Javascript"
                four=". React JS"
                five=". Tailwind CSS"
                six=". GIT & GITHUB"
                seven=". Bootsrap"
                button="Learn More"
                btn="button-one"
                link={"/front-end"}
            />
            <Props
                image={Rec1}
                head="BACK-END DEVELOPMENT"
                paragraph="Learn to work on server-side software, which focuses on everything you can't see on a website."
                one=". javascript"
                two=". Node JS"
                three=". Express JS"
                four=". Passport JS"
                five=". PostMan"
                six=". MongoDB"
                seven=". Mongoose"
                eigth=". GIT & GITHUB"
                button=" Learn More"
                btn="button-two"
                link={"/back-end"}
            />
            <Props
                image={Rec2}
                head="PYTHON FULL-STACK DEVELOPMENT"
                paragraph="Learn how to develop applications using the Python programming language."
                one=". Python"
                two=". Django"
                three=". PostGrel"
                four=". Bootstrap"
                five=". GIT & GITHUB"
                six=". HTML"
                seven=". CSS"
                eight=". Javascript"
                button="Learn More"
                btn="button-one"
                link={"/python"}
            />
            <Props
                image={Rec3}
                head="UI/UX DESIGN"
                paragraph="Learn to create the user interface for an app, website, or other interactive media."
                one=". UI Design"
                two=". Figma"
                three=". UX Design"
                four=". User Research"
                five=". User Journey"
                six=". User Flow"
                seven=". Wireframe"
                button="Learn More"
                btn="button-two"
                link={"/uiux"}
            />
            <Props
                image={group27}
                head="FULL -STACK DEVELOPMENT"
                paragraph="Learn how to develop both client and server software."
                one=". HTML"
                two=". CSS"
                three=". Javascript"
                four=". Bootsrap"
                five=". React JS"
                six=". Node JS"
                seven=". Express JS"
                eight=". Passport JS"
                nine=". Socket IO"
                ten=". MongoDB"
                eleven=". GIT & GITHUB"
                twleve=". Monroose"
                button="Learn More"
                btn="button-one"
                link={"/fullstack"}
            />
            <Props
                image={group33}
                head="Mobile-App-Development"
                paragraph="Learn the act or process to develop mobile apps for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones. "
                one=". Javascript"
                two=". React JS"
                three=". React Native"
                four=". Expo"
                five=". Node JS"
                six=". Express JS"
                seven=". Express JS"
                eight=". Passport JS"
                nine=". socket IO"
                ten=". MongoDB"
                eleven=". GIT & GITHUB"
                twleve=". Monroose"
                button="Learn More"
                btn="button-two"
                link={"/mobile-app"}
            />
            <Props
                image={group101}
                head="WordPress Development"
                paragraph="Learn to design and develop websites for companies using the WordPress creation tool."
                one=". WP Installation"
                two=".  WP Settings"
                three=". Plugins Installation"
                four=". Themes Installation"
                five=". Page Design"
                six=". Theme Customization"
                seven=". Plugins Customization"
                eight=". Working With Pg. Builders"
                nine=".  Working With Cpanel"
                ten=". Using Custom scripts"
                button="Learn More"
                btn="button-one"
                link={"/wordpress"}
            />
            <Props
                image={group74}
                head="Digital Marketing"
                paragraph="Learn to become a globally certified, sought-after, and highly-paid digital marketing professional."
                one=". Digital Marketing Fundamentals "
                two=". Social Media Marketing "
                three=". Social Media Advertising "
                four=". Mobile Graphics Design "
                five=". Content Creation & Monetization"
                six=". Google Advertising "
                seven=". Email Marketing "
                button="Learn More"
                btn="button-two"
                link={"/digital-markting"}
            />
            
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
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 70px;
        gap: 20px;
        text-transform: capitalize;
    }
    h3, h1{
        font-family: "Raleway", sans-serif;
        font-weight: 600;
    }
    h3{
        color: #FB9B02;
    }
    .top-head{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    p{
        font-family: "Poppins", sans-serif;
    }
    .button-one, .button-two{
        padding: 10px 25px;
        background-color: #FB9B02;
        border: none;
        outline: none;
        color: white;
        border-radius: 10px;
        cursor: pointer;

    }
    .button-one:hover{
        border: 1px solid #FB9B02;
        background-color: white;
        color: #FB9B02;
    }
    .button-two{
        background-color: #C12DC1;
    }
    .button-two:hover{
        border: 1px solid #C12DC1;
        color: #C12DC1;
        background-color: white;
    }


    @media screen and (max-width: 950px) {
        .container{
            padding: 40px;
        }
    }

`

export default CoursesThree;