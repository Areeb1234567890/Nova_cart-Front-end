import React, { useEffect, useState } from "react";
import "../AddProduct/Post.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderProduct } from "../../redux/sclices/orderSclice/orderProduct";
import Spinner from "../../assets/Images/Spinner.svg";

const AddressDets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { image, title, price, id, quantity } = location.state;
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};

  const Value = {
    productId: id,
    userId: userId,
    orderQuantity: quantity,
    totalPrice: quantity * price,
    house: "",
    street: "",
    city: "",
    province: "",
    country: "",
  };
  const [postData, setPostData] = useState(Value);

  const Submithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productId", postData.productId);
    formData.append("userId", postData.userId);
    formData.append("orderQuantity", postData.orderQuantity);
    formData.append("totalPrice", postData.totalPrice);
    formData.append("house", postData.house);
    formData.append("street", postData.street);
    formData.append("city", postData.city);
    formData.append("province", postData.province);
    formData.append("country", postData.country);
    
    try {
      dispatch(orderProduct({ credentials: formData, navigate }));
    } catch (error) {
      console.error(error);
    }
  };

  const inputHandler = (e) => {
    const { name } = e.target;
    if (name === "file") {
      const file = e.target.files[0];
      setPostData({ ...postData, [name]: file });
    } else {
      const value = e.target.value;
      setPostData({ ...postData, [name]: value });
    }
  };

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

          <div className="orderDets">
            <h2 style={{ fontFamily: "Regular", paddingBottom: "15px" }}>
              Order Summary
            </h2>
            <hr />
            <div className="product">
              <img src={image} alt="pImage" />
              <div>
                <h3 style={{ fontFamily: "Regular", marginBottom: "10px" }}>
                  {title}
                </h3>
                <span
                  style={{
                    fontFamily: "Regular",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  ${price}
                </span>
              </div>
            </div>
            <hr />
            <div className="payment">
              <div className="dets">
                <h3 className="sec">Orignal price</h3>
                <h3 className="sec">${price}</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Quantity</h3>
                <h3 className="sec">{quantity}</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Subtotal</h3>
                <h3 className="sec">${quantity * price}</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Discount</h3>
                <h3 className="sec">-$0.00</h3>
              </div>
              <hr />
              <div className="dets total">
                <h3 className="primary">Total</h3>
                <h3 className="primary">${quantity * price}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddressDets;
