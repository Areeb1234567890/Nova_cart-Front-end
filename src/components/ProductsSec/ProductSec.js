import React, { useEffect, useState } from "react";
import { MainContainer, PImg } from "./PStyles";
import {
  getProduct,
  useDataProduct,
} from "../../redux/sclices/productSlices/getProduct";
import { useDispatch } from "react-redux";
import Spinner from "../../assets/Images/Spinner.svg";
import { useNavigate } from "react-router-dom";

const ProductSec = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <div className="spinner">
            <img src={Spinner} alt="spinner" />
          </div>
        ) : productData && productData.length > 0 ? (
          product && product.length > 0 ? (
            productData
              .filter(
                (data) =>
                  product &&
                  data.title.toLowerCase().includes(product.toLowerCase() || "")
              )
              .map((Data, index) => {
                return (
                  <div
                    key={index}
                    className="Product"
                    onClick={() => {
                      navigate(`/productDets/${Data._id}`, {
                        replace: true,
                        state: {
                          image: Data.image,
                          title: Data.title,
                          price: Data.price,
                          description: Data.description,
                          brand: Data.brand,
                          quantity: Data.qty,
                          id: Data._id,
                        },
                      });
                    }}
                  >
                    <PImg image={Data.image}></PImg>
                    <h3>{Data.title}</h3>
                    <h2 className="Price">${Data.price}</h2>
                  </div>
                );
              })
          ) : (
            productData.map((Data, index) => {
              return (
                <div
                  key={index}
                  className="Product"
                  onClick={() => {
                    navigate(`/productDets/${Data._id}`, {
                      replace: true,
                      state: {
                        image: Data.image,
                        title: Data.title,
                        price: Data.price,
                        description: Data.description,
                        brand: Data.brand,
                        quantity: Data.qty,
                        id: Data._id,
                      },
                    });
                  }}
                >
                  <PImg image={Data.image}></PImg>
                  <h3>{Data.title}</h3>
                  <h2 className="Price">${Data.price}</h2>
                </div>
              );
            })
          )
        ) : (
          <h3>Nothing found :(</h3>
        )}
      </MainContainer>
    </>
  );
};

export default ProductSec;
