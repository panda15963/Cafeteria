import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
const Cart = () => {
  const { user } = useUser();
  const user_info = user.id;
  const [cart, setCart] = useState<any>([]);
  const carts_items: any[] = [];
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/cart", { user_info })
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].id == user_info) {
            carts_items.push(response.data[i]);
          }
        }
        setCart(carts_items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].total;
    }
    setTotal(parseFloat((total + 3).toFixed(2)));
  }, [cart]);
  const removeItem = () => {
    console.log(cart);
  }
  const items = cart.map((item: any) => {
    return (
      <tbody key={item.id}>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white grid place-items-center">
            <img src={item.image} alt={item.name} width="100" height="100" />
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {item.name}
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            ${item.price}
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {item.amount}
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            ${item.total}
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={removeItem}>
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div>
      <NavBar />
      <h1 className="text-center text-3xl font-bold mt-10 py-5">
        Shopping Carts List
      </h1>
      <p className="text-center text-xl font-bold py-5">
        ※ Shipping Fees includes in the Total Price.
      </p>
      <div className="container mx-auto px-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr className="px-16 py-3">
                <th scope="col">Image</th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {items}
          </table>
        </div>
      </div>{" "}
      <div className="container mx-auto px-5">
        <div className="flex justify-end">
          <h1 className="text-2xl font-bold py-5">Total Price: ${total}</h1>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="flex justify-end">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
