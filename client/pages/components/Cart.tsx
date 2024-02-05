import React from "react";
import { useCart } from "../contexts/CartContext";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";

const ShoppingCartPage = () => {
  const { cart, setCart } = useCart();
  console.log(cart.length);
  return (
    <>
      <NavBar />
      <h1>Shopping Carts</h1>

      <Footer />
    </>
  );
};
export default ShoppingCartPage;
