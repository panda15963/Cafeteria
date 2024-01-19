import Link from "next/link";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useUser } from "../../contexts/UserContext";
import Dropdown from "./Dropdown";
type menus = {
  name?: string;
  link?: string;
};
const mainmenu: menus[] = [
  {
    name: "Coffee Menu",
    link: "/components/coffeeMenu/mainPage",
  },
  {
    name: "Locations",
    link: "/components/Locations",
  },
];
const mainlistItems = mainmenu.map((data) => (
  <li className="mt-3 md:mt-0 md:ml-6" key={data.name}>
    <Link
      className="block text-lg text-black hover:text-gray-500 bg-amber-100 font-bold"
      href={data.link || ""}
    >
      {data.name}
    </Link>
  </li>
));
const MenuDetails = () => {
  const { user, logout } = useUser();
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className={isOpen ? "flex" : "hidden md:flex"}>
        <ul className="flex bg-amber-100 absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-20 left-0 md:top-0 md:flex">
          {mainlistItems}
          {user ? (
            <>
              <li className="mt-3 md:mt-0 md:ml-6" key="user">
                <Dropdown />
              </li>
              <li className="mt-3 md:mt-0 md:ml-6" key="logout">
                <Link
                  href="/components/Cart"
                  className="block text-xl py-2 text-black hover:text-gray-500 bg-amber-100 font-bold"
                >
                  <FaCartShopping />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="mt-3 md:mt-0 md:ml-6" key="signin">
                <Link
                  href="/components/SignIn"
                  className="block text-lg text-black hover:text-gray-500 bg-amber-100 font-bold"
                >
                  Sign In
                </Link>
              </li>
              <li className="mt-3 md:mt-0 md:ml-6" key="signup">
                <Link
                  href="/components/SignUp"
                  className="block text-lg text-black hover:text-gray-500 bg-amber-100 font-bold"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          className="flex justify-center items-center"
          onClick={toggleNavbar}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "hidden" : "flex"}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "flex" : "hidden"}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </>
  );
};
export default MenuDetails;
