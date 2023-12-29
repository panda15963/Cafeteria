import { useState } from "react";
import axios from "axios";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(location.origin); 
    await axios.post(
      "http://localhost:3000/",
      {
        username: formData.username,
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
      { withCredentials: true }
    );
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-100 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border rounded"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
