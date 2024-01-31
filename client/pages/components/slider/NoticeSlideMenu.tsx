import React from "react";
import Slider from "react-slick";
import data from "./CoffeeBeanMenuData";
import Link from "next/link";
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
const NoticeMenu = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  console.log(data);
  return (
    <div className="container">
      <h1 className="text-center text-4xl font-bold py-3">Notification Menu</h1>
      <Slider {...settings}>
        {data.map((data) => {
          return (
            <Link key={data.id} href={`/components/menudetails/${data.name}`}>
            <div className="img-body">
              <img
                className="img-fluid w-100"
                src={data.notification.image}
                alt={data.notification.alt}
              />
                <h2>{data.notification.title}</h2>
                <p>{data.notification.description}</p>
            </div>
          </Link>
          );
        })}
      </Slider>
    </div>
  );
};
export default NoticeMenu;
