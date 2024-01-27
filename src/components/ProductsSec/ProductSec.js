import React from "react";
import { MainContainer, PImg } from "./PStyles";
import ps5 from "../../assets/Images/ps5.jpg";

const ProductSec = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainContainer>
        <div className="Product">
          <PImg image={ps5}></PImg>
          <h3>ps5 jail-breack 10/10</h3>
          <h2 className="Price">$120</h2>
        </div>
        <div className="Product">
          <PImg image={ps5}></PImg>
          <h3>ps5 jail-breack 10/10</h3>
          <h2 className="Price">$120</h2>
        </div>
        <div className="Product">
          <PImg image={ps5}></PImg>
          <h3>ps5 jail-breack 10/10</h3>
          <h2 className="Price">$120</h2>
        </div>
        <div className="Product">
          <PImg image={ps5}></PImg>
          <h3>ps5 jail-breack 10/10</h3>
          <h2 className="Price">$120</h2>
        </div>
      </MainContainer>
    </>
  );
};

export default ProductSec;
