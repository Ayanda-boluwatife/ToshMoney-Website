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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<HomeTwo />} />
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
