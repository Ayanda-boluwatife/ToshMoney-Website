import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Second-Landing-Page/About';
import Career from './Carrer-Landing-Page/Career';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/apply' element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
