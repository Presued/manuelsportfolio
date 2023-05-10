import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioComponent from './Components/PortfolioComponent/PortfolioComponent';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMeComponent from './Components/AboutMeComponent/AboutMeComponent';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<PortfolioComponent />} />
    <Route path='/NavbarComponent' element={<NavbarComponent />} />
    <Route path='/AboutMeComponent' element={<AboutMeComponent />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
