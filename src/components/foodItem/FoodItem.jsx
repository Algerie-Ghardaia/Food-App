import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./foodItem.css";
import React, { useContext } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

const FoodItem = ({ item }) => {
  const { _id, name, description, price, image } = item;
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />

        <div className="food-item-info">
          <div className="food-item-info-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-discription">{description}</p>
          <p className="food-item-price">{price} €</p>
          {!cartItems[_id] ? (
            <div className="food-item-counter ">
              <IoAddCircleOutline
                className="add btn"
                onClick={() => {
                  addToCart(_id);
              
                }}
              />
              <h3>Ajouter</h3>
            </div>
          ) : (
            <div className="food-item-counter x">
              <IoRemoveCircleOutline
                className="btn"
                onClick={() => {
                  removeFromCart(_id);
                }}
                color="#D01A2F"
                style={{ background: "#F8D2D3" }}
              />
              <p className="unselectable">{cartItems[_id]}</p>
              <IoAddCircleOutline
                className="btn"
                onClick={() => {
                  addToCart(_id);
                }}
                color="#48C127"
                style={{ background: "#D7FED8" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
