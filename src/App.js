import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactanosPage from './Components/ContactanosPage/Contactanos';
import ProductPage from "./Components/ProductPage/ProductPage"


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='/AboutUs' element={<AboutPage></AboutPage>}/>
        <Route path='/Tecnologia' element={<ProductPage></ProductPage>}/>
        <Route path='/ContactUs' element={<ContactanosPage></ContactanosPage>}/>
      </Routes>
    </div>
  );
}

export default App;
