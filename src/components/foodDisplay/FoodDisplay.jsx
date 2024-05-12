import "./foodDisplay.css";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ categories }) => {
  // console.log("je suis display ===> : " + categories);
  const { food_list } = useContext(StoreContext);
  //  console.log(food_dxlist);
  return (
    <div className="food-display" id="food-display">
      <h2>Meilleurs plats près de chez vous</h2>
      <div className="foot-display-list">
        {food_list.map((item) => {
          // console.log(item.category);
          if (categories === "all" || categories === item.category) {
            return <FoodItem key={item._id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
