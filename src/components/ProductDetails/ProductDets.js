import React, { useEffect, useState } from "react";
import { DetailWrapper, ProductDisplaySec, ProductInfoSec } from "./DetsStyle";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../assets/Images/Spinner.svg";
import { addToCart } from "../../redux/sclices/cartSclice/cartSclice";
import { useDispatch } from "react-redux";

const ProductDets = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, price, id, description, brand, quantity } =
    location.state;
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const _token = sessionStorage.getItem("authUser");
  const { isAdmin } = _token ? JSON.parse(_token) : {};

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image, description, brand, count }));
  };

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
              <h2>${count * price}</h2>
              <h1>{title}</h1>
              <h3>{description}</h3>

              <div className="stockValues">
                <div className="Stock">
                  <h3>Items in stock : </h3>
                  <span>{quantity}</span>
                </div>
                <div className="Counter">
                  <div
                    className="op"
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    <span>-</span>
                  </div>
                  <h3>{count}</h3>
                  <div
                    className="op"
                    onClick={() => {
                      if (count < quantity) setCount(count + 1);
                    }}
                  >
                    <span>+</span>
                  </div>
                </div>
              </div>

              <div className="ButtonDiv">
                <button
                  className={`Btn ${
                    !_token || isAdmin === true ? "disable" : ""
                  }`}
                  disabled={isAdmin === true}
                  onClick={() => {
                    if (_token) {
                      handleAddToCart();
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className={`Btn buy ${
                    !_token || isAdmin === true ? "disable" : ""
                  }`}
                  disabled={!_token || isAdmin === true}
                  onClick={() => {
                    if (_token) {
                      navigate(`/adressDetails`, {
                        replace: true,
                        state: {
                          image: image,
                          title: title,
                          price: price,
                          quantity: count,
                          id: id,
                        },
                      });
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  Buy now
                </button>
              </div>
            </ProductInfoSec>
          </>
        )}
      </DetailWrapper>
    </>
  );
};

export default ProductDets;
