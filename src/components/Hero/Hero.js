import React, { useEffect, useState } from "react";
import ProductSec from "../ProductsSec/ProductSec";
import Slider from "../slider/Slider";
import Spinner from "../../assets/Images/Spinner.svg";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <img src={Spinner} alt="spinner" className="spinner" />
      ) : (
        <>
          <Slider />
          <ProductSec />
        </>
      )}
    </>
  );
};

export default Hero;
