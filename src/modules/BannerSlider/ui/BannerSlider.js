import React from "react";
import "./BannerSlider.scss";
import Slider from "react-slick";
import slide1 from "../../../../public/assets/img/Eng.png";
import slide2 from "../../../../public/assets/img/ENG-3.png";
import slide3 from "../../../../public/assets/img/ENG-4.png";

export default function BannerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    draggable: false,
    autoplay: true
  };

  return (
    <div className="sub-slider__wrap">
      <Slider {...settings}>
        <div className="sub__slide">
          <h3 className="text-center font-bold  ">SPECIAL PROMOTION!</h3>
          <img src={slide1} />
          <a href="https://bet2u.com/#/promos/?slug=all" target="_blank">
            View
          </a>
        </div>
        <div className="sub__slide">
          <h3 className="text-center font-bold text-4xl ">
            BONUS 100% ON FIRST DEPOSIT
          </h3>
          <img src={slide2} />
          <a href="https://bet2u.com/#/promos/?slug=all" target="_blank">
            View
          </a>
        </div>
        <div className="sub__slide">
          <h3 className="text-center font-bold text-4xl ">
            FRIDAY 100% DEPOSIT BONUS
          </h3>
          <img src={slide3} />
          <a href="https://bet2u.com/#/promos/?slug=all" target="_blank">
            View
          </a>
        </div>
      </Slider>
    </div>
  );
}
