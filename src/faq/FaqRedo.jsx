import React from 'react';
import Nav from '../HomePage/Nav';
import FaqQuestionTwo from './FaqQuestionTwo';
import FaqTwo from './FaqTwo';
import LastPage from './LastPage';
import Footer from '../HomePage/Footer';
import BackToTop from '../BackToTop';
import { Helmet } from 'react-helmet';

const FaqRedo = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="./tosh logo.jpg" />
        <meta name="description" content="Get to know our Frequently Asked Question"/>
        <title>Toshconsult Inc Student Faq | Frequently Asked Question</title>
      </Helmet>
        <Nav/>
        <FaqQuestionTwo/>
        <FaqTwo/>
        <LastPage
          head="Become A Pro Learner"
          link={'/courses'}
          button="Enroll In Our Courses"
        />
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default FaqRedo;