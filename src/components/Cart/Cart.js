import React, { useEffect, useState } from "react";
import { CartWrapper, ProductCart, CheckOut } from "./CartStyles";
import CartIcon from "../../assets/Images/Cart.png";
import DeleteIcon from "../../assets/Images/DeleteIcon.png";
import Spinner from "../../assets/Images/Spinner.svg";
import { useCart } from "../../redux/sclices/cartSclice/cartSclice";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/sclices/cartSclice/cartSclice";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const cart = useCart();

  const TruncateText = ({ text, limit }) => {
    const truncate = (text, limit) => {
      const words = text.split(" ");
      if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
      }
      return text;
    };

    return <>{truncate(text, limit)}</>;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [cart]);

  const deleteProduct = (id) => {
    dispatch(deleteFromCart(id));
  };

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
                          <h3>
                            <TruncateText text={data.title} limit={6} />
                          </h3>
                          <span>{data.brand}</span>
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
                        <img
                          src={DeleteIcon}
                          alt="Delete"
                          className="Remove"
                          onClick={() => {
                            deleteProduct(data.id);
                          }}
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
            <h2>Promo Code</h2>
            <div className="PromoSec">
              <input type="text" placeholder="Type here..." />
              <button className="btn primary">Apply</button>
            </div>
            <hr />

            <div className="billing">
              <div className="dets">
                <h3 className="sec">Subtotal</h3>
                <h3 className="sec">$1500</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Discount</h3>
                <h3 className="sec">-$0.00</h3>
              </div>
              <div className="dets">
                <h3 className="primary">Total</h3>
                <h3 className="primary">$1500</h3>
              </div>
            </div>
            <button className="btn">Continue to checkout</button>
          </CheckOut>
        </CartWrapper>
      )}
    </>
  );
};

export default Cart;
