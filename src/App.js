import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Second-Landing-Page/About';
import Career from './Carrer-Landing-Page/Career';
import Home from './HomePage/Home';
import HomeTwo from './Courses page/HomeTwo'
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<HomeTwo />} />
          <Route path='/front-end' element={<FrontEnd />} />
          <Route path='/back-end' element={<BackEnd />} />
          <Route path='/python' element={<Python />} />
          <Route path='/uiux' element={<Uiux />} />
          <Route path='/fullstack' element={<FullStack />} />
          <Route path='/mobile-app' element={<MobileApp/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/faq' element={<Faq />} />
          <Route path='/register_now' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
