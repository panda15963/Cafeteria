import React, { useEffect, useState } from "react";
import Link from "next/link";
import CoffeeBeanMenu from "../slider/CoffeeBeanMenuData";
import NavBar from "../navbars/NavBar";
import Footer from "../Footer";
import { useRouter } from "next/router";
import { Progress } from "@nextui-org/react";
const ProductDetails = () => {
  const { id } = useRouter().query;
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
                <Link
                  href="/components/menudetails/CoffeeBeanMenu"
                  className="px-5"
                >
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                    Buy Now
                  </button>
                </Link>
              </main>
            </main>
          </div>
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <div className="flex justify-center">
            <div className="w-1/2 text-lg">
              <ul className="justify-center">
                <li className="py-2">
                  <p className="text-xl">{product?.description.description}</p>
                  <table className="w-full border-2 border-black">
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Origin :
                      </td>
                      <td>{product?.description.origin}</td>
                    </tr>
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Region :
                      </td>
                      <td>{product?.description.region}</td>
                    </tr>
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Variety :
                      </td>
                      <td>{product?.description.varietal}</td>
                    </tr>
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Altitude :
                      </td>
                      <td>{product?.description.altitude}</td>
                    </tr>
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Process :
                      </td>
                      <td>{product?.description.process}</td>
                    </tr>
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Grade :
                      </td>
                      <td>{product?.description.grade}</td>
                    </tr>
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Harvest Months :
                      </td>
                      <td>{product?.description.harvest_time}</td>
                    </tr>
                    <tr className="border-2 border-black">
                      <td className="font-bold border-2 border-black">
                        Acidity :
                      </td>
                      <td>
                        <Progress
                          label="Acidity"
                          value={product?.description.tasting_map.acidity}
                          color="primary"
                          className="w-full"
                          size="sm"
                        />
                        {product?.description.tasting_map.acidity}
                      </td>
                    </tr>
                  </table>
                  <div className="py-2">
                    <h2 className="font-bold">Roasting Point</h2>
                    <img
                      src={product?.description.roasting_point}
                      alt="Roasting Point"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};
export default ProductDetails;
