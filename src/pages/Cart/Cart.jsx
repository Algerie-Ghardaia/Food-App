import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import React, { useContext } from "react";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartItems } =
    useContext(StoreContext);
    const navigate=useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Articles</p>
          <p>Titre</p>
          <p>Prix</p>
          <p>Quantité</p>
          <p>Totale</p>
          <p>Retirer</p>
        </div>
        <br />
        <div className="tab" />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div
                  key={item._id}
                  className="cart-items-title cart-items-item s"
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} €</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} €</p>
                  <p
                    onClick={() => {
                      removeFromCart([item._id]);
                    }}
                  >
                    x
                  </p>
                </div>
                <hr className="tab1" />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total de votre Panier : </h2>
          <div>
            <div className="cart-total-detail">
              <p>Total</p>
              <p>{getTotalCartItems()} €</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Livrison Gratuite</p>
              <p>{2} €</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>{getTotalCartItems() + 2} €</b>
            </div>
          </div>
          <button onClick={()=>{navigate("/placeOder")}}>Procéder au paiement</button>
        </div>
        <div className="promo-code">
          <div>
            <p>Si vous avez un code promo, saisissez-le ici</p>
            <div className="promo-code-input">
              <input type="text" placeholder="Code promo" />
              <button>Vérifier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
//
