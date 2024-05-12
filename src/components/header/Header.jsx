import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>commandez votre plat préféré ici</h2>
        <p>
          choisissez parmi un menu varié proposant une gamme délicieuse de plats
          préparés avec les meilleurs ingrédients et l'expertise culinaire.
          notre mission est d'élever vos envies pour satisfaire votre expérience
          culinaire, un délicieux repas à la fois.
        </p>
        <button>Affiche Le Menu</button>
      </div>
    </div>
  );
};

export default Header;
