import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/router";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
const ShoppingCart = () => {
  const router = useRouter();
  const { id } = router.query;
  const { cart, removeItem } = useCart();
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);
  const { items } = cart.find((cartItem : any) => cartItem.id === id) || {};
  console.log("items", items);
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ShoppingCart;
