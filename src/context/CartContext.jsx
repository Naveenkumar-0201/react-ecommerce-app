import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };


  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
  if (newQuantity < 1) return; 

  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: newQuantity }
        : item
    )
  );
};

const placeOrder = (products) => {
  const newOrder = {
    id: "ORD" + Date.now(),
    items: products,
    date: new Date().toLocaleString(),
  };

  setOrders((prev) => [...prev, newOrder]);
};



  const removeSelectedItems = (selectedIds) => {
    setCartItems((prev) =>
      prev.filter((item) => !selectedIds.includes(item.id))
    );
  };

  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
  cartItems,
  addToCart,
  removeFromCart,
  updateQuantity,
  removeSelectedItems,
  clearCart,
  orders,
  placeOrder
}}

    >
      {children}
    </CartContext.Provider>
  );
};
