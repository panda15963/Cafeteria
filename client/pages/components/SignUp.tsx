import { useState } from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const router = useRouter();
  const sendDataToServer = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        email,
        password,
        username,
        name,
      });
      if (response.data.sqlMessage === undefined) {
        alert("User Created Successfully");
        setEmail("");
        setPassword("");
        setUserName("");
        setName("");
        router.push("SignIn");
        return;
      } else if (response.data.sqlMessage.includes("Duplicate entry")) {
        alert("User Already Exists");
        setEmail("");
        setPassword("");
        setUserName("");
        setName("");
        return;
      }
      alert("Error Occured");
      setEmail("");
      setPassword("");
      setUserName("");
      setName("");
    } catch (error) {
      console.log(error);
      setEmail("");
      setPassword("");
      setUserName("");
      setName("");
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const list_regex = [
      "!",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "+",
      "=",
      "_",
      "/",
      "?",
      "<",
      ">",
      ",",
      ".",
      ";",
      ":",
      '"',
      "'",
      "|",
      "{",
      "}",
      "[",
      "]",
      "~",
      "`",
    ];
    if (name === "email") {
      const id = value.split("@")[0];
      if (id.length > 15) {
        setIsEmailValid(false);
      } else if (list_regex.includes(id[id.length - 1])) {
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
        setEmail(value);
      }
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(value)) {
        setIsPasswordValid(false);
      } else if (value.length >= 8) {
        setIsPasswordValid(true);
        setPassword(value);
      } else if (value.split(" ").length > 1) {
        setIsPasswordValid(false);
      } else {
        setIsPasswordValid(true);
        setPassword(value);
      }
    } else if (name === "username") {
      if (value.length > 15) {
        setIsUserNameValid(false);
      } else if (list_regex.includes(value[value.length - 1])) {
        setIsUserNameValid(false);
      } else if (value.split(" ").length > 1) {
        setIsUserNameValid(false);
      } else {
        setIsUserNameValid(true);
        setUserName(value);
      }
    } else if (name === "name") {
      if (value.search(/[!@#$%^&*]/) >= 0 || value.search(/[0-9]/) >= 0) {
        setIsNameValid(false);
      } else if (value.split(" ").length > 1) {
        setIsNameValid(false);
      } else {
        setIsNameValid(true);
        setName(value);
      }
    }
  };
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-100 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-4 text-center font-bold">Sign Up</h2>
          <form method="post" onSubmit={sendDataToServer}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-sm font-medium mb-2 font-bold"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border-2 rounded"
                placeholder="Enter your username"
                defaultValue={username}
                onChange={handleChange}
                style={{ borderColor: isUserNameValid ? "black" : "red" }}
                required
              />
              <p style={{ color: isUserNameValid ? "" : "red" }}>
                {isUserNameValid
                  ? ""
                  : "Username should not contain any special character and length should be less than 15"}
              </p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-medium mb-2 font-bold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border-2 rounded"
                placeholder="Enter your Name"
                defaultValue={name}
                onChange={handleChange}
                style={{ borderColor: isNameValid ? "black" : "red" }}
                required
              />
              <p style={{ color: isNameValid ? "" : "red" }}>
                {isNameValid
                  ? ""
                  : "Name should not contain any special character or number"}
              </p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2 font-bold"
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
                {isEmailValid ? "" : "Email length should be less than 15"}
              </p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2 font-bold"
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
                  : "Password should contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"}
              </p>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
                onSubmit={sendDataToServer}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <Link href="SignIn" className="text-blue-500">
                Already a user? Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
