import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import NavBar from "../navbars/NavBar";
import Footer from "../Footer";
import CoffeeBeanMenuData from "../slider/CoffeeBeanMenuData";
import Link from "next/link";
const CoffeeBeanMenu = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-center text-4xl font-bold mt-10 mb-10">
          Coffee Bean Menu
        </h1>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {CoffeeBeanMenuData.map((item, index) => {
            return (
              <Link key={item.id} href={`/components/menudetails/${item.name}`}>
                  <Card
                    key={index}
                    shadow="lg"
                    isPressable
                    className="border-4 border-black rounded-md shadow-lg"
                  >
                    <CardBody className="overflow-visible p-0 border-b-2 border-black">
                      <Image
                        src={item.image}
                        width="100%"
                        height="100%"
                        alt="coffee bean menu"
                        className="w-full object-cover"
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b>{item.name}</b>
                      <p className="text-default-500 font-bold">${item.price}</p>
                    </CardFooter>
                  </Card>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CoffeeBeanMenu;
