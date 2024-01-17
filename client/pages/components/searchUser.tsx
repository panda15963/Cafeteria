import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./navbars/NavBar";
const searchUser = () => {
  const [name, setName] = useState("");  
  const [isNameValid, setIsNameValid] = useState(true);
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/searchuser", {
        name,
      });
      console.log(response);
      console.log(name);
    } catch (error: any) {
      console.log(error);
    }
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (value.match(/^[a-zA-Z ]*$/) && name === "name") {
      setIsNameValid(true);
      setName(value);
    } else {
      setIsNameValid(false);
    }
  }
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <form method="post" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
              <h1 className="text-5xl font-bold">Search User</h1>
              <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <input
                  type="text"
                  placeholder="Enter the name of the user you want to search"
                  className="border-2 border-gray-900 p-3 rounded-lg focus:outline-none focus:border-gray-500"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <p style={{ color: isNameValid ? "" : "red" }}>
                  {isNameValid ? "" : "Name should not contain any special character or number"}
                </p>
                <button
                  type="submit"
                  className="border-2 border-gray-900 p-2 rounded-lg"
                  onSubmit={handleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default searchUser;
