import React from "react";
import axios from "axios";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import { useUser } from "../contexts/UserContext";
const updatesInputList = [
    {
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
    },
    {
        name: "name",
        type: "text",
        placeholder: "Name",
        required: true,
    },
    {
        name: "username",
        type: "text",
        placeholder: "Username",
        required: true,
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password",
        required: true,
    },
];
const { user } = useUser();
const updatesInputForm = updatesInputList.map((input) => (
    <div className="mb-4" key={input.name}>
        <label className="block mb-2">{input.name}</label>
        <input
            type={input.type}
            className="border w-full p-2 rounded"
            placeholder={input.placeholder}
            required={input.required}
        />
    </div>
));
const UpdateUser = () => {
    
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-amber-100 p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl mb-4 text-center">Update User</h2>
                    <form method="post">
                        {updatesInputForm}
                        <div className="mb-4">
                            <button
                                type="button"
                                className="bg-amber-500 text-white p-2 w-full rounded"
                                
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default UpdateUser;