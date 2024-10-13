import './App.css';
import {Rotes,BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from './components/layouts/Header';
import HeroSection from './components/Herosection';
import FoodMenu from './components/menu/FoodMenu.js';
import Offer from './components/offer/Offer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <HeroSection/>
        <FoodMenu/>
        <Offer/>
        <Routes>

         
          {/* <Route path="/menu" element={<HeroSection/>} /> */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
