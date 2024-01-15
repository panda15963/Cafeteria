import { useState } from "react";
import NavBar from './navbars/NavBar';
import Footer from "./Footer";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from '../contexts/UserContext';
const missingIDPW = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const searchIdPw = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/searchuser", {
                email,
                password,
            });
            console.log(response.data);
        } catch (error: any) {
            console.log(error);
        }
    }
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-amber-100 p-8 rounded shadow-md w-96">
                    <h2 className="text-xl font-bold mb-4 text-center">Find ID or Password</h2>
                    <form method="post" onSubmit={searchIdPw}>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="border w-full p-2 rounded"
                                defaultValue={email}
                                name="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Password</label>
                            <input
                                type="password"
                                className="border w-full p-2 rounded"
                                defaultValue={password}
                                name="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <button className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full">
                                Search
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default missingIDPW;