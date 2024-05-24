import React from "react";
import SliderImage from "./SliderImage";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
function PreSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider container">
        <h1>Previous Projects</h1>
        <Slider {...settings}>
          {SliderImage.map((item) => {
            return (
              <div className="slider-image">
                <img src={item.slide} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default PreSlider;
