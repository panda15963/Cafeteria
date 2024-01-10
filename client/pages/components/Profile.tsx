import React from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";

const Profile = () => {
    return (
        <div>
        <NavBar />
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center">Profile</h1>
            <p className="text-center">This is your profile page</p>
            </div>
        </div>
        <Footer />
        </div>
    );
}
export default Profile;