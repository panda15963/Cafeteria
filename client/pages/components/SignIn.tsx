import React, { useState } from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Perform your signin logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-100 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-4 text-center">Sign In</h2>
          <form onSubmit={handleSubmit}>
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
                Sign In
              </button>
            </div>
            <div className="text-center">
              <a href="SignUp" className="text-blue-500">
                New user? Sign up here
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignIn;
