import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./navbars/NavBar";
const searchUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/searchuser", { email });
      const password = response.data[0].password;
      const name = response.data[0].name;
      setName(name);
      setPassword(password);
    } catch (error: any) {
      console.log(error);
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
    const id = value.split("@")[0];
    if (name === "email")
      if (id.length > 15) {
        setIsEmailValid(false);
      } else if (list_regex.includes(id[id.length - 1])) {
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
        setEmail(value);
      }
  };
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-100 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-4 text-center">Search User</h2>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-2 border-2 rounded"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <p style={{ color: isEmailValid ? "" : "red" }}>
                {isEmailValid ? "" : "Email is not valid or empty"}
              </p>
              <p style={{ color: password && name ? "blue" : "" }}>
                {password ? "Password is " + password : ""} <br />
                {name ? "Name is " + name : ""}
              </p>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
                onSubmit={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default searchUser;
