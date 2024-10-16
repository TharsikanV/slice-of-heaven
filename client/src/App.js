import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/layouts/Header';
import HeroSection from './components/Herosection';
import FoodMenu from './components/menu/FoodMenu.js';
import MenuItems from './components/menu/MenuItems.js';
import Offer from './components/offer/Offer.js';
import ExpertChefs from './components/chefs/ExpertChefs.js';
import Reservation from './components/user/Reservation.js';
import ShowBlogs from './components/blogs/ShowBlogs.js';
import AdminLogin from './components/admin/AdminLogin.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './components/admin/AdminDashboard.js';
import MenuManagement from './components/admin/MenuManagement.js';
import ReservationManagement from './components/admin/ReservationManagement.js';
import Footer from './components/layouts/Footer.js';
import FoodGallery from './components/menu/FoodGallery.js';
import DownloadAppSection from './components/user/DownloadAppSection.js';
import { useRef, useState } from 'react';
// import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  // Create a reference for the Reservation section
  const reservationRef = useRef(null);
  const menuItemsRef=useRef(null);
  return (
    <Router>
      <div className="App">
      <ToastContainer />
        <Routes>
          <Route path="/login" element={<AdminLogin setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/admin/dashboard" element={isLoggedIn?<AdminDashboard/>:<Navigate to='/'/>} />
          <Route path="/admin/menus" element={<MenuManagement/>} />
          <Route path="/admin/reservations" element={<ReservationManagement/>} />
          <Route path="/" element={
            <>
            <Header setIsLoggedIn={setIsLoggedIn} reservationRef={reservationRef}/>
            <HeroSection menuItemsRef={menuItemsRef}/>
            <FoodMenu />
            <Offer />
            <div ref={menuItemsRef}>
            <MenuItems />
            </div>
            <DownloadAppSection/>
            <ExpertChefs />
            {/* Assign the reference to the Reservation component */}
            <div ref={reservationRef}>
                <Reservation />
            </div>
            <ShowBlogs />
            <FoodGallery/>
            <Footer/>
            </>
            
          } />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
