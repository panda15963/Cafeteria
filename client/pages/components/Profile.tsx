import React, { useState } from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import { useUser } from "../contexts/UserContext";
import axios from "axios";
import router from "next/router";
const UpdateUser = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const { user, logout } = useUser();
  const handleDelete = () => {
    try {
      axios
        .delete("http://localhost:3001/api/deleteuser", {
          data: {
            id: user.id,
          },
        })
        .then((response) => {
          if (response.data.sqlMessage === undefined) {
            alert("User Deleted Successfully and you must login again!!");
            setName("");
            setUserName("");
            setEmail("");
            setPassword("");
            router.push("/");
            logout();
          } else {
            alert("Something went wrong");
            setName("");
            setUserName("");
            setEmail("");
            setPassword("");
          }
        });
    } catch (error: any) {
      console.log(error);
    }
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      axios
        .put("http://localhost:3001/api/updateuser", {
          name,
          username,
          email,
          password,
          id: user.id,
        })
        .then((response) => {
          if (response.data.sqlMessage === undefined) {
            alert("User Updated Successfully and you must login again!!");
            setName("");
            setUserName("");
            setEmail("");
            setPassword("");
            router.push("/");
            logout();
          } else if (response.data.sqlMessage.includes("Duplicate entry")) {
            alert("User Already Exists");
            setName("");
            setUserName("");
            setEmail("");
            setPassword("");
          } else {
            alert("Something went wrong");
            setName("");
            setUserName("");
            setEmail("");
            setPassword("");
          }
        });
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
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
      } else if (value === user.email) {
        setIsEmailValid(false);
      } else if (id.includes(" ")) {
        setIsEmailValid(false);
      } else if (value === "") {
        setIsEmailValid(false);
      } else if (value.split("@").length !== 2) {
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
      } else if (value === user.password) {
        setIsPasswordValid(false);
      } else if (value === "") {
        setIsEmailValid(false);
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
      } else if (value === user.username) {
        setIsUserNameValid(false);
      } else if (value === "") {
        setIsEmailValid(false);
      } else {
        setIsUserNameValid(true);
        setUserName(value);
      }
    } else if (name === "name") {
      if (value.search(/[!@#$%^&*]/) >= 0 || value.search(/[0-9]/) >= 0) {
        setIsNameValid(false);
      } else if (value === user.name) {
        setIsNameValid(false);
      } else if (value.split(" ").length > 3 || value.split(" ").length < 1 || value === "") {
        setIsNameValid(false);
      } else {
        setIsNameValid(true);
        setName(value);
      }
    }
  };
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-100 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-4 text-center">Update User</h2>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="border w-full p-2 rounded"
                defaultValue={name}
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
              <p style={{ color: isNameValid ? "" : "red" }}>
                {isNameValid ? "" : "Name is not valid or empty"}
              </p>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Username</label>
              <input
                type="text"
                className="border w-full p-2 rounded"
                defaultValue={username}
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                required
              />
              <p style={{ color: isUserNameValid ? "" : "red" }}>
                {isUserNameValid ? "" : "Username is not valid or empty"}
              </p>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="border w-full p-2 rounded"
                defaultValue={email}
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
              <p style={{ color: isEmailValid ? "" : "red" }}>
                {isEmailValid ? "" : "Email is not valid or empty"}
              </p>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                className="border w-full p-2 rounded"
                defaultValue={password}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
              <p style={{ color: isPasswordValid ? "" : "red" }}>
                {isPasswordValid ? "" : "Password is not valid or empty"}
              </p>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-amber-500 text-white p-2 w-full rounded"
              >
                Update
              </button>
            </div>
            <div className="mb-4">
              <button
                type="button"
                className="bg-amber-500 text-white p-2 w-full rounded"
                onClick={handleDelete}
              >
                Delete User
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UpdateUser;
