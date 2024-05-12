import React from "react";
import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";


const exploreMenu = ({ categories, setCategories }) => {

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explorez notre menu</h1>
      <p className="explore-menu-text">
        choisissez parmi un menu varié proposant une gamme délicieuse de plats
        préparés avec les meilleurs ingrédients et l'expertise culinaire. notre
        mission est d'élever vos envies pour satisfaire votre expérience
        culinaire, un délicieux repas.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              onClick={() => {
                setCategories((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                );
              }}
              key={index}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={categories === item.menu_name ? "actived" : ""}
              />
              <p>{item.menu_name} </p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default exploreMenu;
