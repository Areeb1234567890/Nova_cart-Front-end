import React, { useEffect, useState } from "react";
import { MainContainer, PImg } from "./PStyles";
import {
  getProduct,
  useDataProduct,
} from "../../redux/sclices/productSlices/getProduct";
import { useDispatch } from "react-redux";
import Spinner from "../../assets/Images/spinner.gif";

const ProductSec = () => {
  const dispatch = useDispatch();
  const { GetProductResponse, isLoading } = useDataProduct();
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

  return (
    <>
      <MainContainer>
        {isLoading ? (
          <img src={Spinner} alt="spinner" className="spinner" />
        ) : productData && productData.length > 0 ? (
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
