import React from 'react';
import BackToTop from '../BackToTop';
import Footer from '../HomePage/Footer';
import Nav from '../HomePage/Nav';
import FaqQuestion from './FaqQuestion';
import LastPage from './LastPage';
import MainFaqPage from './MainFaqPage';
import { Helmet } from 'react-helmet';

const Faq = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="./tosh logo.jpg" />
        <meta name="description" content="Get to know our Frequently Asked Question"/>
        <title>Toshconsult Inc Service Faq | Frequently Asked Question</title>
      </Helmet>
      <Nav />
      <FaqQuestion />
      <MainFaqPage />
      <LastPage
        head="Get in Touch"
        link={'/service'}
        button="Contact Us"
      />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Faq