import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioComponent from './Components/PortfolioComponent/PortfolioComponent';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMeComponent from './Components/AboutMeComponent/AboutMeComponent';
import ProjectComponent from './Components/ProjectComponent/ProjectComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<PortfolioComponent />} />
    <Route path='/NavbarComponent' element={<NavbarComponent />} />
    <Route path='/AboutMeComponent' element={<AboutMeComponent />} />
    <Route path='/ProjectComponent' element={<ProjectComponent />} />
    <Route path='/FooterComponent' element={<FooterComponent />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
