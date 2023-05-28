import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Second-Landing-Page/About';
import Career from './Carrer-Landing-Page/Career';
import Home from './HomePage/Home';
import HomeTwo from './Courses page/HomeTwo';
import Service from './ServicePage/Service';
import Contact from './ContactPage/Contact';
import Faq from './faq/Faq';
import Register from './RegisterPage/Register';
import Blog from './BlogPost/Blog';
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
import MobileAppService from './All Inner Service Page/Mobile App/MobileAppService';
import UiuxService from './All Inner Service Page/Uiux page/UiuxService';
import InnerBlog3 from './BlogPost/InnerBlog3';
import InnerBlog2 from './BlogPost/InnerBlog2';
import InnerBlog1 from './BlogPost/InnerBlog1';
import InnerBlog4 from './BlogPost/InnerBlog4';
import InnerBlog5 from './BlogPost/InnerBlog5';
import InnerBlog6 from './BlogPost/InnerBlog6';
import WebsiteService from './All Inner Service Page/Website page/WebsiteService';
import SoftwareService from './All Inner Service Page/Software Page/SoftwareService';
import DigitalMarketingService from './All Inner Service Page/Digital Marketing/DigitalMarketingService';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<HomeTwo />} />
          <Route path='/course/front-end' element={<FrontEnd />} />
          <Route path='/course/back-end' element={<BackEnd />} />
          <Route path='/course/python' element={<Python />} />
          <Route path='/course/uiux' element={<Uiux />} />
          <Route path='/course/fullstack' element={<FullStack />} />
          <Route path='/course/mobile-app' element={<MobileApp/>}/>
          <Route path='/course/digital-markting' element={<DigitalMarketing/>}/>
          <Route path='/course/wordpress' element={<WordPress/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/service' element={<Service/>}/>
          <Route path='/service/mobile-app' element={<MobileAppService/>}/>
          <Route path='/service/uiux' element={<UiuxService/>}/>
          <Route path='/service/website-development' element={<WebsiteService/>}/>
          <Route path='/service/software-development' element={<SoftwareService/>}/>
          <Route path='/service/digital-markting' element={<DigitalMarketingService/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/faq1' element={<Faq />} />
          <Route path='/faq2' element={<FaqRedo/>} />
          <Route path='/register-now' element={<Register />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/innerblog1' element={<InnerBlog1 />} />
          <Route path='/innerblog2' element={<InnerBlog2 />} />
          <Route path='/innerblog3' element={<InnerBlog3 />} />
          <Route path='/innerblog4' element={<InnerBlog4 />} />
          <Route path='/innerblog5' element={<InnerBlog5 />} />
          <Route path='/innerblog6' element={<InnerBlog6 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
