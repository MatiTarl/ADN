import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="flex container">
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
      </Routes>
    </div>
  );
}

export default App;
