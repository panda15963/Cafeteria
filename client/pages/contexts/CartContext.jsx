import { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [isInCart, setIsInCart] = useState(false);
  const addToCart = (product) => {
    setCart({...cart, product});
    setIsInCart(true);    
  };
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
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