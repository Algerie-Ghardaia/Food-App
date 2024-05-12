import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const numberCommande = Object.values(cartItems);
  const totalCommande = numberCommande.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const infoPanier = {
    numberCommande: numberCommande,
    total: totalCommande,
    cartItems,
  };
  const addToCart = (idItem) => {
    
    if (!cartItems[idItem]) {
      setCartItems((prevState) => ({ ...prevState, [idItem]: 1 }));

    } else {
      setCartItems((prevState)=>({ ...prevState,[idItem]: prevState[idItem] + 1}));
    }
  };
  const removeFromCart = (idItem) => {
    setCartItems((prevState)=>({ ...prevState,[idItem]: cartItems[idItem] - 1}));
  };

  const getTotalCartItems = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let infoItem = food_list.find((product) => product._id === item);
        totalAmount += infoItem.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  

  const contextValue = {
    food_list,
    cartItems,
    infoPanier,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
