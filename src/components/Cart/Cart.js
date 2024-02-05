import React, { useEffect, useState } from "react";
import { CartWrapper, ProductCart, CheckOut } from "./CartStyles";
import CartIcon from "../../assets/Images/Cart.png";
import DeleteIcon from "../../assets/Images/DeleteIcon.png";
import Spinner from "../../assets/Images/Spinner.svg";
import { useCart } from "../../redux/sclices/cartSclice/cartSclice";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/sclices/cartSclice/cartSclice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartAmount, setCartAmount] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    const productPrices = cart.map((product) => product.price * product.count);
    const totalCartAmount = productPrices.reduce(
      (acc, price) => acc + price,
      0
    );
    setCartAmount(totalCartAmount);

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
                        <h3 style={{ fontFamily: "Regular" }}>Qty:</h3>
                        <h3>{data.count}</h3>
                      </div>

                      <div className="price">
                        <span>${data.price * data.count}</span>
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
                <h3 className="sec">${cartAmount}</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Discount</h3>
                <h3 className="sec">-$0.00</h3>
              </div>
              <div className="dets">
                <h3 className="primary">Total</h3>
                <h3 className="primary">${cartAmount}</h3>
              </div>
            </div>

            <button
              className="btn"
              onClick={() => {
                if (cart.length > 0) {
                  navigate(`/cartCheckout`, {
                    replace: true,
                    state: {
                      cart: cart,
                      total: cartAmount,
                      productsIds: cart.map((product) => product.id),
                    },
                  });
                } else {
                  alert("No items in cart");
                }
              }}
            >
              Continue to checkout
            </button>
          </CheckOut>
        </CartWrapper>
      )}
    </>
  );
};

export default Cart;
