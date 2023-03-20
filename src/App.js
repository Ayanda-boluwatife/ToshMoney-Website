import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Second-Landing-Page/About';
import Career from './Carrer-Landing-Page/Career';
import Home from './HomePage/Home';
import HomeTwo from './Courses page/HomeTwo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<HomeTwo />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
