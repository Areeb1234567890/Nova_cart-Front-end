import React, { useEffect, useState } from "react";
import "../AddProduct/Post.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderProduct } from "../../redux/sclices/orderSclice/orderProduct";
import Spinner from "../../assets/Images/Spinner.svg";

const CartOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { cart, total, productsIds } = location.state;
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Value = {
    productId: productsIds,
    userId: userId,
    orderQuantity: cart.length,
    totalPrice: total,
    house: "",
    street: "",
    city: "",
    province: "",
    country: "",
  };
  const [postData, setPostData] = useState(Value);

  const Submithandler = (e) => {
    e.preventDefault();
    try {
      dispatch(orderProduct({ credentials: postData, navigate }));
    } catch (error) {
      console.error(error);
    }
  };

  const inputHandler = (e) => {
    console.log(postData);
    const { name } = e.target;
    if (name === "file") {
      const file = e.target.files[0];
      setPostData({ ...postData, [name]: file });
    } else {
      const value = e.target.value;
      setPostData({ ...postData, [name]: value });
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div className="OrderCon">
          <form className="addressForm" onSubmit={(e) => Submithandler(e)}>
            <h1 style={{ fontFamily: "Regular" }}>Confirm Adress Details</h1>
            <input
              className="Post-Input"
              name="house"
              type="text"
              required
              placeholder="Enter House address"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              name="street"
              type="text"
              required
              placeholder="Enter Street address"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              name="city"
              type="text"
              required
              placeholder="Enter City"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              name="province"
              required
              type="text"
              placeholder="Enter Province"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              name="country"
              type="text"
              required
              placeholder="Enter Country"
              onChange={(e) => {
                inputHandler(e);
              }}
            />

            <button className="Btn-Post Submit" type="submit">
              Confirm purchase
            </button>
          </form>

          <div className="productsDets">
            <div>
              <h2 style={{ fontFamily: "Regular", paddingBottom: "15px" }}>
                Order Summary
              </h2>
              <hr />
            </div>

            <div className="productsData">
              {cart &&
                cart.map((data, index) => {
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
            <div className="payment">
              <div className="dets">
                <h3 className="sec">Quantity</h3>
                <h3 className="sec">{cart?.length}</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Subtotal</h3>
                <h3 className="sec">${total}</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Discount</h3>
                <h3 className="sec">-$0.00</h3>
              </div>
              <hr />
              <div className="dets total">
                <h3 className="primary">Total</h3>
                <h3 className="primary">${total}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartOrder;
