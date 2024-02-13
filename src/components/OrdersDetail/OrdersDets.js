import React, { useEffect, useState } from "react";
import "./order.css";
import { useLocation } from "react-router-dom";
import Spinner from "../../assets/Images/Spinner.svg";

const OrdersDets = () => {
  const _token = sessionStorage.getItem("authUser");
  const { isAdmin, userId } = _token ? JSON.parse(_token) : {};
  const location = useLocation();
  const { data } = location.state;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div className="main">
          <div className="Details">
            <div className="Address">
              <h1 style={{ fontFamily: "Regular" }}>Address:</h1>
              <div className="addets">
                <div>
                  <h3>House:</h3>
                  <input
                    className="data"
                    type="text"
                    value={data.address.house}
                  />
                </div>
                <div>
                  <h3>Street:</h3>
                  <input
                    className="data"
                    type="text"
                    value={data.address.street}
                  />
                </div>
                <div>
                  <h3>City:</h3>
                  <input
                    className="data"
                    type="text"
                    value={data.address.city}
                  />
                </div>
                <div>
                  <h3>Province:</h3>
                  <input
                    className="data"
                    type="text"
                    value={data.address.province}
                  />
                </div>
                <div>
                  <h3>Country:</h3>
                  <input
                    className="data"
                    type="text"
                    value={data.address.country}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="user">
              <h1 style={{ fontFamily: "Regular" }}>User Info:</h1>
              <div className="addets">
                <div>
                  <h3>Name:</h3>
                  <input className="data" type="text" value={data.user.name} />
                </div>
                <div>
                  <h3>E-mail:</h3>
                  <input className="data" type="text" value={data.user.email} />
                </div>
                <div>
                  <h3>User's Id:</h3>
                  <input
                    style={{ width: "220px" }}
                    className="data"
                    type="text"
                    value={data.user._id}
                  />
                </div>
              </div>
            </div>

            {isAdmin === true ? (
              <button className="Btn">Dispatched</button>
            ) : (
              <button className="Btn">Deliverd</button>
            )}
          </div>

          <div className="Products">
            <div className="wrapperP">
              <div className="ProductsDisplay">
                {data &&
                  data?.product.map((data, index) => {
                    return (
                      <div className="products" key={index}>
                        <img src={data.image} alt="pImage" />
                        <div>
                          <h3
                            style={{
                              fontFamily: "Regular",
                              marginBottom: "10px",
                            }}
                          >
                            {data.title}
                          </h3>
                          <span
                            style={{
                              fontFamily: "Regular",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          >
                            ${data.price}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <hr />
              <div className="Price">
                <div className="payment">
                  <div className="dets">
                    <h3 className="sec">Quantity</h3>
                    <h3 className="sec">{data.quantity}</h3>
                  </div>
                  <div className="dets">
                    <h3 className="sec">Subtotal</h3>
                    <h3 className="sec">${data.totalPrice}</h3>
                  </div>
                  <div className="dets">
                    <h3 className="sec">Discount</h3>
                    <h3 className="sec">-$0.00</h3>
                  </div>
                  <hr />
                  <div className="dets total">
                    <h3 className="primary">Total</h3>
                    <h3 className="primary">${data.totalPrice}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdersDets;
