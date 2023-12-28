import React from "react"
import NavBar from "./components/navbars/NavBar"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Hello, world!</h1>
      </div>
      <Footer />
    </>
  )
}
