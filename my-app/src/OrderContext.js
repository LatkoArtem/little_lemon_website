import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (item) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromOrder = (itemName) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const increaseQuantity = (itemName) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.quantity < 20 ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, increaseQuantity, decreaseQuantity }}>
      {children}
    </OrderContext.Provider>
  );
};
