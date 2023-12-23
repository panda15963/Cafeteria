import Link from "next/link";
import { GiCoffeeCup } from "react-icons/gi";
import React from "react";
import MenuDetails from "./MenuDetails";
const NavBar = () => {  
  return (
    <nav className="bg-amber-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <GiCoffeeCup style={{ fontSize: "3em", color: "663300" }} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Coffee Shops
          </span>
        </Link>
        <MenuDetails />
      </div>
    </nav>
  );
};
export default NavBar;