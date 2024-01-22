import React from "react"
import NavBar from "./components/navbars/NavBar"
import Footer from "./components/Footer"
import ImageSlider from "./components/slider/ImageSlider"

export default function Home() {
  return (
    <>
      <NavBar />
      <ImageSlider />
      <Footer />
    </>
  )
}
