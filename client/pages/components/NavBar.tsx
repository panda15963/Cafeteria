import React from "react";
import Logo from "../../public/logo.svg";
export default function NavBar() {
    return (
        <>
            <nav className="bg-red-700">
                <div className="flex items-center">
                    <Logo width={180} height={130} />
                    <span className="text-white text-2xl font-bold ml-2">NextJS</span>

                </div>
            </nav>
        </>
    )
}