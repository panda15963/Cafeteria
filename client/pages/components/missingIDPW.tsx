import { useState } from "react";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
import axios from "axios";
const missingIDPW = () => {
  const [name, setName] = useState("");
  const searchIdPw = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/api/missingidpw");
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-amber-100 p-8 rounded shadow-md w-96">
          <h2 className="text-xl font-bold mb-4 text-center">
            Find ID or Password
          </h2>
          <form method="post" onSubmit={searchIdPw}>
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
            </div>
            <p style={{ color: "red" }}>
              {name ? "" : "Name is not valid or empty"}
            </p>
            <div className="mb-4">
              <button
                className="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full"
                onSubmit={searchIdPw}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default missingIDPW;
