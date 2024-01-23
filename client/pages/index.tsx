import React from "react"
import NavBar from "./components/navbars/NavBar"
import Footer from "./components/Footer"
import NoticeManu from "./components/slider/NoticeMenu"
import CoffeeBeanMenu from "./components/slider/CoffeeBeanMenu"

export default function Home() {
  return (
    <>
      <NavBar />
      <NoticeManu />
      <CoffeeBeanMenu />
      <Footer />
    </>
  )
}
