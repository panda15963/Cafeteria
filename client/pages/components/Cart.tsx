import React from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
const ShoppingCartPage = () => {
  const { user } = useUser();
  const user_info = user.id;
  const cart_lists = async (user_info : any) => {
    try {
      const response = await axios.post("http://localhost:3001/api/cart", { user_info });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(cart_lists(user_info));
  return (
    <>
      <NavBar />
      <h1>Shopping Carts</h1>
      <Footer />
    </>
  );
};
export default ShoppingCartPage;
