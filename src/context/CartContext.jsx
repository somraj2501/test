import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if(item.id === itemId && item.quantity === 1) {
          return null;
        }

        return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
          );
        }
      )
    );
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};