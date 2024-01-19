import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type ImageSliderProps = {
  images: string[];
};
const ImageSlider = ({ images }: ImageSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: images.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image}>
          <img src={image} alt="coffee"/>
        </div>
      ))}
    </Slider>
  );
};
export default ImageSlider;