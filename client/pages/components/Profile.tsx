import React from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import { useUser } from "../contexts/UserContext";
import axios from "axios";
const UpdateUser = () => {
    const { user } = useUser();
    const updatesInputList = [
        {
            name: "Name",
            type: "text",
            placeholder: "Enter your name",
            required: true,
        },
        {
            name: "Username",
            type: "text",
            placeholder: "Enter your username",
            required: true,
        },
        {
            name: "Email",
            type: "email",
            placeholder: "Enter your email",
            required: true,
        },
        {
            name: "Password",
            type: "password",
            placeholder: "Enter your password",
            required: true,
        }
    ];
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries());
        console.log(formData);
        axios.post("http://localhost:3001/api/updateuser", formData)
        .then((res) => {
            console.log(res);
        })        
    }
    const updatesInputForm = updatesInputList.map((input) => (
        <div className="mb-4" key={input.name}>
            <label className="block mb-2">{input.name}</label>
            <p className="block mb-2 text-red-500">
                {"Your " + input.name.toLowerCase() + " is " + user[input.name.toLowerCase()]}
            </p>                
            <input
                type={input.type}
                className="border w-full p-2 rounded"
                placeholder={input.placeholder}
                required={input.required}
            />
        </div>
    ));
    console.log(user);
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-amber-100 p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl mb-4 text-center">Update User</h2>
                    <form method="post">
                        {updatesInputForm}
                        <div className="mb-4">
                        </div>
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