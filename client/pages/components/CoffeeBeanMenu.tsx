import React from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";

const CoffeeBeanMenu = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Coffee Bean Menu</h1>
          <p className="mt-3 text-2xl">
            This is the coffee bean menu page.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default CoffeeBeanMenu;