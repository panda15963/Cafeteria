import { useState } from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import axios from "axios";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const getDataFromServer = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/signin", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);      
      setEmail("");
      setPassword("");
      console.log(response);
    } catch (error:any) {
      console.log(error);
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":        
        if (value.includes("@") && value.includes(".")) {
          setIsEmailValid(true);
          setEmail(value);
        } else{
          setIsEmailValid(false);
        }
        break;
      case "password":
        if (value.length >= 8) {
          setIsPasswordValid(true);
          setPassword(value);
        } else {
          setIsPasswordValid(false);
        }
        break;
    }
  };
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-100 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-4 text-center">Sign In</h2>
          <form method="post" onSubmit={getDataFromServer}>
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
                className="w-full p-2 border-2 rounded"
                placeholder="Enter your email"
                defaultValue={email}
                onChange={handleChange}
                style={{ borderColor: isEmailValid ? "black" : "red" }}
                required
              />
              <p style={{ color: isEmailValid ? "" : "red" }}>
                {isEmailValid ? "" : "Email is not valid or empty"}
              </p>
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
                className="w-full p-2 border-2 rounded"
                placeholder="Enter your password"
                defaultValue={password}
                onChange={handleChange}
                style={{ borderColor: isPasswordValid ? "black" : "red" }}
                required
              />
              <p style={{ color: isPasswordValid ? "" : "red" }}>
                {isPasswordValid
                  ? ""
                  : "Password should be at least 8 characters long"}
              </p>
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
              <a href="SignUp" className="text-blue-500" onChange={getDataFromServer}>
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