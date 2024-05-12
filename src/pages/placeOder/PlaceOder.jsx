import { StoreContext } from "../../context/StoreContext";
import "./placeOder.css";
import React, { useContext } from "react";

const PlaceOder = () => {
  const { getTotalCartItems } = useContext(StoreContext);
  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <p>Informations de livraison</p>
          <div className="multi-fields">
            <div className="standar-input">
              <input type="text" placeholder="Nom :" required />
              <input type="text" placeholder="Prenon :" required />
            </div>
            <div className="standar-input">
              <input type="email" placeholder="Adresse Email :" required />
              <input type="text" placeholder="Tel : " required />
            </div>
            <div className="standar-input">
              <input type="text" placeholder="Numero de la Rue" required />
              <input
                type="text"
                placeholder="Rue Ex :  Rue des oriels...."
                required
              />
            </div>
            <div className="standar-input">
              <input type="text" placeholder="Ville Ex : Dreux" required />
              <input type="text" placeholder="Code postal : 47 000" required />
            </div>
            <div className="standar-input">
              <input type="text" placeholder="Pays : " />
              <input type="text" placeholder="" required />
            </div>
          </div>
        </div>
        <div className="place-order-right">
          <div className="all">
            <div className="title">
              <p>Infomation de la commande</p>
            </div>
            <div className="info">
              <div className="info-detai">
                <div className="info-detai-tp">
                  <div>Total-commande</div>
                  <div>{getTotalCartItems()}€</div>
                </div>
                <hr />
                <div className="info-detai-tp">
                  <div>Livraison</div>
                  <div>{getTotalCartItems()? 2:0} €</div>
                </div>
                <hr />
                <div className="info-detai-tp">
                  <div>Total</div>
                  <div>{getTotalCartItems()?getTotalCartItems() + 2:0} €</div>
                </div>
              </div>
            </div>

            <button className="btn-paiment">Piament</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOder;
