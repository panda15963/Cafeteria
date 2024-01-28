import React from "react";
import Link from "next/link";
import CoffeeBeanMenu from "../slider/CoffeeBeanMenuData";
import NavBar from "../navbars/NavBar";
import Footer from "../Footer";
import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = CoffeeBeanMenu.find((item) => item.name === id);
  const date = new Date();
  if (!product) {
    return <h1>Not Found</h1>;
  } else {
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="flex justify-center">
            <img src={product.image} alt={product.name} className="w-1/4" />
            <main className="my-8">
              <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              <table className="w-full">
                <tbody className="py-2 text-left">
                  <tr>
                    <td>Type of Product :</td>
                    <td>Coffee beans</td>
                  </tr>
                  <tr>
                    <td>Expiration Date :</td>
                    <td>
                      {date.getFullYear() + 1}-{date.getMonth() + 1}-
                      {date.getDate()}
                    </td>
                  </tr>
                  <tr>
                    <td>Amount : </td>
                    <td>300g/1 pack</td>
                  </tr>
                  <tr>
                    <td>Manufacturing Date :</td>
                    <td>
                      {date.getFullYear()}-{date.getMonth() + 1}-
                      {date.getDate()}
                    </td>
                  </tr>
                  <tr>
                    <td>Raw Material/Content :</td>
                    <td>100% Coffee Bean</td>
                  </tr>
                  <tr>
                    <td>Shipping Fee :</td>
                    <td>$3.0</td>
                  </tr>
                  <tr>
                    <td>Price :</td>
                    <td>${product.price}</td>
                  </tr>
                </tbody>
              </table>
              <main className="flex justify-center py-5">
                <Link href="/components/menudetails/CoffeeBeanMenu">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                    Add to Cart
                  </button>
                </Link>
                <Link href="/components/menudetails/CoffeeBeanMenu" className="px-5">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                    Buy Now
                  </button>
                </Link>
              </main>
            </main>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};
export default ProductDetails;
