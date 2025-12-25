import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const openRegister = () => setShowRegister(true);
  const closeRegister = () => setShowRegister(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartOpen,
        setCartOpen,
        showRegister,
        openRegister,
        closeRegister,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
