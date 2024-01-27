import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper } from "./sliderStyles";
import bg1 from "../../assets/Images/bg1.jpg";
import bg2 from "../../assets/Images/bg2.jpg";
import bg3 from "../../assets/Images/bg3.jpg";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div>
            <div className="wrap">
              <img src={bg1} alt="Slide 1" />
            </div>
          </div>
          <div>
            <div className="wrap">
              <img src={bg2} alt="Slide 2" />
            </div>
          </div>
          <div>
            <div className="wrap">
              <img src={bg3} alt="Slide 3" />
            </div>
          </div>
        </Slider>
      </Wrapper>
    </>
  );
};

export default HeroSlider;
