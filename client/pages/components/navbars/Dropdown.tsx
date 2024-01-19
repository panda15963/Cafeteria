// components/Dropdown.js
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "../../contexts/UserContext";
const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const getUserName = () => {
    const user_name = JSON.parse(localStorage.getItem("user") || "{}").name;
    return user_name;
  };
  const getNickName = () => {
    const user_name = JSON.parse(localStorage.getItem("user") || "{}").username;
    return user_name;
  };
  const { logout } = useUser();

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="block text-lg inline-flex font-bold text-black justify-center items-center px-2 hover:text-gray-500"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {getUserName()} ( {getNickName()} )
      </button>
      {isDropdownOpen && (
        <div
          className="text-center absolute mt-2 w-48 rounded-md shadow-lg bg-white"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              href="/components/Profile"
              className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              My Account
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={logout}
            >
              Log Out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
