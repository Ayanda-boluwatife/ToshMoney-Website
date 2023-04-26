import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Second-Landing-Page/About';
import Career from './Carrer-Landing-Page/Career';
import Home from './HomePage/Home';
import HomeTwo from './Courses page/HomeTwo';
import Service from './ServicePage/Service';
import Contact from './ContactPage/Contact';
import Faq from './faq/Faq';
import Register from './RegisterPage/Register';

import FrontEnd from './Courses page/FrontEnd';
import BackEnd from './Courses page/BackEnd';
import Python from './Courses page/Python';
import Uiux from './Courses page/Uiux';
import FullStack from './Courses page/FullStack';
import MobileApp from './Courses page/MobileApp';
import DigitalMarketing from './Courses page/DigitalMarketing';
import WordPress from './Courses page/WordPress';
import PrivacyPolicy from './HomePage/PrivacyPolicy';
import FaqRedo from './faq/FaqRedo';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<HomeTwo />} />
          <Route path='/front-end' element={<FrontEnd />} />
          <Route path='/back-end' element={<BackEnd />} />
          <Route path='/python' element={<Python />} />
          <Route path='/uiux' element={<Uiux />} />
          <Route path='/fullstack' element={<FullStack />} />
          <Route path='/mobile-app' element={<MobileApp/>}/>
          <Route path='/digital-markting' element={<DigitalMarketing/>}/>
          <Route path='/wordpress' element={<WordPress/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/faq1' element={<Faq />} />
          <Route path='/faq2' element={<FaqRedo/>} />
          <Route path='/register-now' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
