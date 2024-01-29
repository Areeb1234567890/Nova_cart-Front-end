import React, { useEffect, useState } from "react";
import { MainContainer, PImg } from "./PStyles";
import ps5 from "../../assets/Images/ps5.jpg";
import {
  getProduct,
  useDataProduct,
} from "../../redux/sclices/productSlices/getProduct";
import { useDispatch } from "react-redux";

const ProductSec = () => {
  const dispatch = useDispatch();
  const { GetProductResponse } = useDataProduct();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const callData = async () => {
      await dispatch(getProduct());
    };
    callData();
  }, []);

  useEffect(() => {
    if (GetProductResponse && GetProductResponse.products) {
      setProductData(GetProductResponse.products);
    }
  }, [GetProductResponse]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainContainer>
        {productData && productData.length > 0 ? (
          productData.map((Data, index) => {
            return (
              <div key={index} className="Product">
                <PImg image={Data.image}></PImg>
                <h3>{Data.title}</h3>
                <h2 className="Price">${Data.price}</h2>
              </div>
            );
          })
        ) : (
          <h3>Nothing found :(</h3>
        )}
      </MainContainer>
    </>
  );
};

export default ProductSec;
