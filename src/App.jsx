import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';
import Orders from './Orders';
import Home from './Home';
import PageNotFound from './PageNotFound';
import './App.css';
import { VegProducts } from './VegProducts';
import { NonVegMenu } from './NonVegMenu';
import { MilkProducts } from './MilkProducts';
import { Chocolets } from './Chocolets';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useInsertionEffect } from 'react';
import { logOut } from './store';
import AboutUs from './AboutUs';



function App() {
   const navigate = useNavigate();
   const handleLogout = () => {
    dispatch(logOut());
    navigate('/home');
  };
   const dispatch=useDispatch();
  const cartCount = useSelector(globalState => globalState.cart);

  const totalItems = cartCount.reduce((total, item) => total + item.quantity, 0);
  const [showSidebar, setShowSidebar] = useState(false);
   const profile = useSelector(state => state.user.currentUser?.profileImage);
    let isAuthenticate=useSelector(state=>state.user.isAuthenticate);
      let currentUser =useSelector(state=>state.user.currentUser);
  return (
    <>
      {/* Header */}
      <header className="header">
        <img
          src="https://th.bing.com/th/id/OIP.YCG-dpbevTNeHjJqCs8xyAAAAA?rs=1&pid=ImgDetMain"
          alt="PackagePilot Logo"
          className="logo"
        />
        <div>
          <h1 className="title">PackagePilot</h1>
          <p className="tagline">Fresh Picks – Fast Drops – Every Day</p>
        </div>
      </header>

      {/* Sub-header Banner */}
      <div className="sub-banner">
        <marquee >🚚 Your all-in-one shopping app! We deliver fresh groceries, vegetables, non-veg items, milk products, chocolates, desserts, electronics & more – right to your door.</marquee>
      </div>
      {/* Navigation Bar */}
      <nav className="menu">
        <Link to="/home">Home</Link>
        <Link to="/veg">Vegetables</Link>
        <Link to="/nonveg">Non-Veg</Link>
        <Link to="/milk">Milk Products</Link>
         <Link to="/Choco">Chocolets</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart">
          <img
            src="https://cdn4.iconfinder.com/data/icons/shopping-and-commerce-outline-color/512/shopping_commerce_21-1024.png"
            alt="Cart"
            className="icon"
          />
          <b>({totalItems})</b>
        </Link>
        <Link to="/contact">
          <img src="https://static-00.iconduck.com/assets.00/phone-call-fill-contact-icon-2047x2048-vcoagu3q.png" alt="Contact" className="icon-small" />
        </Link>
         <Link to="/AboutUs">AboutUs</Link>
          {isAuthenticate? 
            <div> welcome! {currentUser.username}&nbsp;<button onClick={handleLogout}>LogOut</button></div>
            : <Link to={"/signin"}><button >sign_in</button></Link>
          }
            <img
          src={profile||"https://cdn-icons-png.flaticon.com/512/847/847969.png"}
          alt="Profile"
          className="profile-image"
        />

      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<VegProducts/>} />
        <Route path="/nonveg" element={<NonVegMenu />} />
        <Route path="/milk" element={<MilkProducts/>} />
         <Route path="/Choco" element={<Chocolets/>} />
        <Route path="/orders" element={<Orders user={currentUser}/>} />
         <Route path="/signin" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp/>} />
           <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/cart" element={
            <Cart isLogged={isAuthenticate} user={currentUser}/>

        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
       
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>About PackagePilot</h3>
          <b>
            PackagePilot is your go-to delivery app for fresh groceries, vegetables, non-veg, chocolates,
            desserts, milk products, electronics, and daily essentials. Fast, reliable, and affordable delivery
            right to your doorstep — anytime, anywhere.
          </b>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PackagePilot. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
