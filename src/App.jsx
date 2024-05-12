import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";

//-----------------IMPORT ROUTES--------------------//

import Cart from "./pages/Cart/Cart";
import PlaceOder from "./pages/placeOder/PlaceOder";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
//--------------------------------------------------//

function App() {
  const[showLogin, setShowLogin] =useState(false);
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
    <div className="app">
      <NavBar showLogin={showLogin} setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOder" element={<PlaceOder />} />
      </Routes>
    </div>
      <Footer/>
    </>
    
  );
}

export default App;
