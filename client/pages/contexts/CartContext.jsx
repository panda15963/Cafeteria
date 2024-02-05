import { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [isInCart, setIsInCart] = useState(false);
  const addToCart = (productData) => {
    setCart([productData, ...cart]);
    setIsInCart(true);    
  };
  const removeFromCart = (productData) => {
    setCart(cart.filter((item) => item.id !== productData.id));
    setIsInCart(false);
  };
  return (
    <CartContext.Provider value={{ isInCart,cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};