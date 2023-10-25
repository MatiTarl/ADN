import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactanosPage from './Components/ContactanosPage/Contactanos';



function App() {
  return (
    <div className="flex container ">
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='/AboutUs' element={<AboutPage></AboutPage>}/>
        <Route path='/ContactUs' element={<ContactanosPage></ContactanosPage>}/>
      </Routes>
    </div>
  );
}

export default App;
