import React from "react"
import NavBar from "./components/navbars/NavBar"
import Footer from "./components/Footer"
import ImageSlider from "./components/ImageSlider"
const coffeeImages = [
  "./images/coffeeBeans1.jpg",
  "./images/coffeeBeans2.jpg",
  "./images/coffeeBeans3.jpg",
  "./images/coffeeBeans4.jpg",
  "./images/coffeeBeans5.jpg",
  "./images/coffeeBeans6.jpg",
  "./images/coffeeBeans7.jpg",
  "./images/coffeeBeans8.jpg",
  "./images/coffeeBeans9.jpg",
  "./images/coffeeBeans10.jpg",
  "./images/coffeeBeans11.jpg",
  "./images/coffeeBeans12.jpg",
  "./images/coffeeBeans13.jpg",
  "./images/coffeeBeans14.jpg",
  "./images/coffeeBeans15.jpg",
  "./images/coffeeBeans16.jpg",
  "./images/coffeeBeans17.jpg",
  "./images/coffeeBeans18.jpg",
  "./images/coffeeBeans19.jpg",
  "./images/coffeeBeans20.jpg",
  "./images/coffeeBeans21.jpg",
  "./images/coffeeBeans22.jpg",
  "./images/coffeeBeans23.jpg",
  "./images/coffeeBeans24.jpg",
  "./images/coffeeBeans25.jpg",
  "./images/coffeeBeans26.jpg",
  "./images/coffeeBeans27.jpg",
  "./images/coffeeBeans28.jpg",
  "./images/coffeeBeans29.jpg",
  "./images/coffeeBeans30.jpg",
  "./images/coffeeBeans31.jpg",
  "./images/coffeeBeans32.jpg",
  "./images/coffeeBeans33.jpg",
  "./images/coffeeBeans34.jpg",
  "./images/coffeeBeans35.jpg",
  "./images/coffeeBeans36.jpg",
  "./images/coffeeBeans37.jpg",
  "./images/coffeeBeans38.jpg",
  "./images/coffeeBeans39.jpg",
  "./images/coffeeBeans40.jpg",
  "./images/coffeeBeans41.jpg",
  "./images/coffeeBeans42.jpg",
  "./images/coffeeBeans43.jpg",
  "./images/coffeeBeans44.jpg",
  "./images/coffeeBeans45.jpg",
  "./images/coffeeBeans46.jpg",
  "./images/coffeeBeans47.jpg",
  "./images/coffeeBeans48.jpg",
  "./images/coffeeBeans49.jpg",
  "./images/coffeeBeans50.jpg",
  "./images/coffeeBeans51.jpg",
  "./images/coffeeBeans52.jpg",
  "./images/coffeeBeans53.jpg",
  "./images/coffeeBeans54.jpg",
  "./images/coffeeBeans55.jpg",
]
export default function Home() {
  return (
    <>
      <NavBar />
      <ImageSlider images={coffeeImages} />
      <Footer />
    </>
  )
}
