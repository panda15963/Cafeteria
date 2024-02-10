import React from "react";
import { useUser } from "../contexts/UserContext";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Buyer_Information = () => {
    const { user } = useUser();
    const user_name = user.name;
    const user_email = user.email;
    const user_phone = user.phonenumber;
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr className="px-16 py-3">
                        <th colSpan={2}>Buyer Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Name :</th>
                        <td>{user_name}</td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Email :</th>
                        <td>{user_email}</td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Phone Number :</th>
                        <td>{user_phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const Recipient_Information = () => {
    const { user } = useUser();
    const user_name = user.name;
    const user_address = user.address;
    const user_phone = user.phonenumber;
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr className="px-16 py-3">
                        <th colSpan={2}>Recipient Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Name:</th>
                        <td>{user_name}</td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Address:</th>
                        <td>{user_address}</td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Telephone:</th>
                        <td>{user_phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const Card_Information = () => {
    const { user } = useUser();
    const user_info = user.id;
    const [cart, setCart] = useState<any>([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axios
          .post("http://localhost:3001/api/showcart", { user_info })
          .then((res) => {
            setCart(res.data);
          })
          .catch((error) => {
            console.log(error);
          })
      });
      useEffect(() => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
          total += cart[i].total;
        }
        setTotal(parseFloat((total).toFixed(2)));
      }, [cart]);
    const handleSelectPayment = () => {
        const payment = (document.querySelector('input[name="payment"]:checked') as HTMLInputElement)?.value;
        if (payment === "credit") {
            alert("You have selected Credit Card");
        } else if (payment === "paypal") {
            alert("You have selected Paypal");
        }
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr className="px-16 py-3">
                        <th colSpan={2}>Card Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Total Product Price :</th>
                        <td>$ {total}</td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Shipping Fee :</th>
                        <td>$ 3.0</td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Total Price :</th>
                        <td>$ {total + 3}</td>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Payment Method :</th>
                        <td><input type="radio" name="payment" value="credit" onClick={handleSelectPayment} /> Credit Card</td>
                        <td><input type="radio" name="payment" value="paypal" onClick={handleSelectPayment} /> Paypal</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const Order = () => { 
    const router = useRouter();
    const handlePlaceOrder = () => {
        alert("Your order has been placed!");
        router.push("/");
    }
    return (
        <div>
            <NavBar />
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center">Order</h1>
                <Buyer_Information />
                <Recipient_Information />
                <Card_Information />
                <button className="bg-green-500
                hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full
                mt-5" onClick={handlePlaceOrder}>Place Order</button>
            </div>
            <Footer />
        </div>
    );
};
export default Order;