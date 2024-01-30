import React, { useEffect, useState } from "react";
import { DetailWrapper, ProductDisplaySec, ProductInfoSec } from "./DetsStyle";
import { useLocation } from "react-router-dom";
import Spinner from "../../assets/Images/Spinner.svg";

const ProductDets = () => {
  const location = useLocation();
  const { image, title, price, id, description } = location.state;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <DetailWrapper>
        {isLoading ? (
          <div className="spinner">
            <img src={Spinner} alt="spinner" />
          </div>
        ) : (
          <>
            <ProductDisplaySec image={image}></ProductDisplaySec>
            <ProductInfoSec>
              <h2>${price}</h2>
              <h1>{title}</h1>
              <div className="dets">
                <p>Free deliver on all the products</p>
              </div>
              <h3>{description}</h3>
              <div className="ButtonDiv">
                <button className="Btn">Add to Cart</button>
              </div>
            </ProductInfoSec>
          </>
        )}
      </DetailWrapper>
    </>
  );
};

export default ProductDets;
