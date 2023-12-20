import React from "react";
import Logo from "../../public/logo.svg";
export default function NavBar() {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-red-600 p-6">
                <Logo width={1000} height={100}/>
            </nav>
        </>
    )
}