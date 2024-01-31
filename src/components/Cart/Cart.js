import React, { useEffect, useState } from "react";
import { CartWrapper, ProductCart, CheckOut } from "./CartStyles";
import CartIcon from "../../assets/Images/Cart.png";
import DeleteIcon from "../../assets/Images/DeleteIcon.png";
import Spinner from "../../assets/Images/Spinner.svg";

import dummy from "../../assets/Images/ps5.jpg";
import { useCart } from "../../redux/sclices/cartSclice/cartSclice";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cart = useCart();

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
        <CartWrapper>
          <ProductCart>
            <div className="logo">
              <div className="img">
                <img src={CartIcon} alt="cartLogo" />
                <h3>Cart</h3>
              </div>
            </div>
            <div className="productsSec">
              {cart && cart.length > 0 ? (
                cart.map((data, index) => {
                  return (
                    <div className="Product" key={index}>
                      <div id="Pwrapper">
                        <img
                          src={data.image}
                          alt="pImg"
                          className="ProductImage"
                        />
                        <div>
                          <h3>{data.title}</h3>
                          <span>Sony</span>
                        </div>
                      </div>

                      <div className="Counter">
                        <div className="op">
                          <span>-</span>
                        </div>
                        <h3>1</h3>
                        <div className="op">
                          <span>+</span>
                        </div>
                      </div>

                      <div className="price">
                        <span>${data.price}</span>
                      </div>

                      <div className="Actions">
                        <input
                          type="checkbox"
                          name="checkBox"
                          className="checkBox"
                        />
                        <img
                          src={DeleteIcon}
                          alt="Delete"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <h3>No Items in Cart :(</h3>
                </>
              )}
            </div>
          </ProductCart>

          <CheckOut>
            <button className="btn">Continue to checkout</button>
          </CheckOut>
        </CartWrapper>
      )}
    </>
  );
};

export default Cart;
