import "./navBar.css";
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import { Link } from "react-router-dom";

function NavBar({ showLogin, setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { infoPanier,getTotalCartItems } = useContext(StoreContext);
  return (
    <div className="navBar">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          className={menu === "Home" ? "active" : ""}
          onClick={() => {
            setMenu("Home");
          }}
          to={"./"}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "Menu" ? "active" : ""}
          onClick={() => {
            setMenu("Menu");
          }}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={menu === "Mobile-App" ? "active" : ""}
          onClick={() => {
            setMenu("Mobile-App");
          }}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          className={menu === "Contactez-nous" ? "active" : ""}
          onClick={() => {
            setMenu("Contactez-nous");
          }}
        >
          Contactez-nous
        </a>
      </ul>
      <div className="navBar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navBar-search-icon">
          <Link to={"./cart"}>
            <img src={assets.basket_icon} alt="" />
            <div className={getTotalCartItems()?"dot":"non"}>{infoPanier.total}</div>
          </Link>
        </div>
        <button
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          se connecter
        </button>
      </div>
    </div>
  );
}

export default NavBar;
