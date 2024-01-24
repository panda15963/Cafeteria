import React, { Component } from "react";
import Slider from "react-slick";
import data from "./CoffeeBeanMenuData";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <div className="next-slick-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
        </svg>
      </div>
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <div className="next-slick-arrow rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
        </svg>
      </div>
    </div>
  );
}
export default class CoffeeBeanMenu extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container">
        <h1 className="text-center text-4xl font-bold">Coffee Bean Menu</h1>
        <Slider {...settings}>
          {data.map((item: any) => (
            <div key={item.id}>
              <div className="coffee-bean-menu">
                <div className="border-b-4 border-gray-500">
                  <img src={item.image} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
