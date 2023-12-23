import Link from "next/link";
import { useState } from "react";
type menus = {
  name?: string;
  link?: string;
};
const mainmenu: menus[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Coffee Menu",
    link: "/menu",
  },
  {
    name: "Locations",
    link: "/locations",
  },
  {
    name: "Prices",
    link: "/prices",
  },
  {
    name: "Account",
    link: "/signin",
  },
];
const listItems = mainmenu.map((data) => (
  <li className="mt-3 md:mt-0 md:ml-6" key={data.name}>
    <Link href={data.link || ""} className="block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 bg-amber-100">
      {data.name}
    </Link>
  </li>
));
const MenuDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  type menus = {
    name?: string;
    link?: string;
  };
  const data: menus[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <>
      <nav className={isOpen ? ("flex") : (" hidden md:flex")}>
        <ul className="flex bg-amber-100 absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-20 left-0 md:top-0 md:flex">{listItems}</ul>
      </nav>
      <div className="md:hidden">
        <button className="flex justify-center items-center" onClick={toggleNavbar}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("hidden") : ("flex")}
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
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("flex") : ("hidden")}
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