import React, { useEffect, useState } from "react";
import { CartWrapper, ProductCart, CheckOut } from "./CartStyles";
import CartIcon from "../../assets/Images/Cart.png";
import DeleteIcon from "../../assets/Images/DeleteIcon.png";
import Spinner from "../../assets/Images/Spinner.svg";
import { useCart } from "../../redux/sclices/cartSclice/cartSclice";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const cart = useCart();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [cart]);

  const handleCheckboxClick = (index, { price }) => {
    const updatedSelectedItems = [...selectedItems];

    // Toggle the selected status for the clicked item
    updatedSelectedItems[index] = !updatedSelectedItems[index];

    // Calculate the total price of selected items
    const newTotal = updatedSelectedItems.reduce((sum, isSelected, idx) => {
      return isSelected ? sum + cart[idx].price : sum;
    }, 0);

    setTotal(newTotal);
    setSelectedItems(updatedSelectedItems);
  };

  const deleteProduct = (id) => {
    console.log(id, "frm del");
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
                          <h3>{data.title}</h3>
                          <span>Sony</span>
                        </div>
                      </div>

                      <div className="Counter">
                        <div
                          className="op"
                          onClick={() => {
                            if (count > 1) setCount(count - 1);
                          }}
                        >
                          <span>-</span>
                        </div>
                        <h3>{count}</h3>
                        <div
                          className="op"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          <span>+</span>
                        </div>
                      </div>

                      <div className="price">
                        <span>${count * data.price}</span>
                      </div>

                      <div className="Actions">
                        <input
                          type="checkbox"
                          name="checkBox"
                          checked={selectedItems[index]}
                          onChange={() =>
                            handleCheckboxClick(index, {
                              price: count * data.price,
                            })
                          }
                          className="checkBox"
                        />
                        <img
                          src={DeleteIcon}
                          alt="Delete"
                          onClick={() => {
                            deleteProduct(data._id);
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
                <h3 className="sec">${total}</h3>
              </div>
              <div className="dets">
                <h3 className="sec">Discount</h3>
                <h3 className="sec">-$0.00</h3>
              </div>
              <div className="dets">
                <h3 className="primary">Total</h3>
                <h3 className="primary">${total}</h3>
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
