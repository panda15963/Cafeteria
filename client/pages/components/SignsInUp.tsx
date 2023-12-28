import React, { useState } from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import axios from "axios";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const axios = require("axios").default;

  const handleSignIn = async () => {
    axios.post("/api/auth/signin", { email, password });

  };

  const handleSignUp = async () => {
    axios.post("/api/auth/signup", { email, password });
  };

  return (
    <div>
      <NavBar />
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="bg-yellow-50 p-8 rounded shadow-md w-96 text-center">
          <h2 className="text-2xl mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <form>
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
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                type="button"
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={isSignIn ? handleSignIn : handleSignUp}
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              {isSignIn ? "New to our platform? " : "Already have an account? "}
              <button
                type="button"
                className="text-blue-500"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignIn;
