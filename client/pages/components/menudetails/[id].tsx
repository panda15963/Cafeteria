import React from "react";
import Link from "next/link";
import CoffeeBeanMenu from "../slider/CoffeeBeanMenuData";
import NavBar from "../navbars/NavBar";
import Footer from "../Footer";
import { useRouter } from "next/router";
import { Progress } from "@nextui-org/progress";
const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = CoffeeBeanMenu.find((item) => item.name === id);
  const date = new Date();
  const add_cart = () => {
    console.log("add_cart");
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="flex justify-center">
          <img src={product?.image} alt={product?.name} className="w-1/4" />
          <main className="my-8">
            <h2 className="text-2xl font-bold mb-4">{product?.name}</h2>
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
                  <td>${product?.price}</td>
                </tr>
              </tbody>
            </table>
            <main className="flex justify-center py-5">
              <button
                onClick={add_cart}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Add to Cart
              </button>
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
                  <tbody className="py-2">
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
                        Tasting Notes :
                      </td>
                      <td>
                        <Progress
                          value={product?.description.tasting_map.acidity}
                          maxValue={100}
                          size="md"
                          classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator:
                              "bg-gradient-to-r from-yellow-400 to-yellow-800",
                            label:
                              "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",
                          }}
                          label="Acidity"
                          radius="sm"
                          showValueLabel={true}
                        />
                        <Progress
                          value={product?.description.tasting_map.sweetness}
                          maxValue={100}
                          size="md"
                          classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator:
                              "bg-gradient-to-r from-yellow-400 to-yellow-800",
                            label:
                              "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",
                          }}
                          label="Sweetness"
                          radius="sm"
                          showValueLabel={true}
                        />
                        <Progress
                          value={product?.description.tasting_map.body}
                          maxValue={100}
                          size="md"
                          classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator:
                              "bg-gradient-to-r from-yellow-400 to-yellow-800",
                            label:
                              "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",
                          }}
                          label="Balance"
                          radius="sm"
                          showValueLabel={true}
                        />
                        <Progress
                          value={product?.description.tasting_map.flavor}
                          maxValue={100}
                          size="md"
                          classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator:
                              "bg-gradient-to-r from-yellow-400 to-yellow-800",
                            label:
                              "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",
                          }}
                          label="Body"
                          radius="sm"
                          showValueLabel={true}
                        />
                        <Progress
                          value={product?.description.tasting_map.bitterness}
                          maxValue={100}
                          size="md"
                          classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator:
                              "bg-gradient-to-r from-yellow-400 to-yellow-800",
                            label:
                              "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",
                          }}
                          label="Flavor"
                          radius="sm"
                          showValueLabel={true}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="py-5">
                  <h2 className="font-bold">Roasting Point</h2>
                  <img
                    src={product?.description.roasting_point}
                    alt="Roasting Point"
                  />
                </div>
                <div className="py-5">
                  <h2 className="font-bold">Region Map</h2>
                  <img
                    src={product?.description.region_map}
                    alt="Region Map"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetails;
