import React from "react";
import ProductSec from "../ProductsSec/ProductSec";
import { useLocation } from "react-router-dom";

const SearchProduct = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div>
      <ProductSec product={data} />
    </div>
  );
};

export default SearchProduct;
