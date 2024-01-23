import React, { useEffect, useRef, useState } from "react";
import { CartWrapper, ProductCart, Last, ProductAarea } from "./CartStyle";
import { useProductContext } from "../../Context/ProductContext";
const CartSec = (props) => {
  const { Cart } = useProductContext();
  const [selectedItems, setSelectedItems] = useState([]);
  const cartRef = useRef(null);

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

  const calculateTotalPrice = () => {
    return selectedItems.reduce(
      (total, isSelected, index) =>
        isSelected ? total + Cart[index].price : total,
      0
    );
  };

  const handleCheckboxClick = (index) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[index] = !updatedSelectedItems[index];
    setSelectedItems(updatedSelectedItems);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        props.closeCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return (
    <>
      <CartWrapper ref={cartRef} opencart={props.isOpen}>
        <div className="Top">
          <h2>My Cart</h2>
        </div>

        <ProductAarea>
          {Cart && Cart.length > 0 ? (
            Cart.map((items, index) => {
              return (
                <ProductCart key={index}>
                  <input
                    id="check"
                    type="checkbox"
                    checked={selectedItems[index]}
                    onChange={() => handleCheckboxClick(index)}
                  />
                  <img className="img" src={items.image} alt={items.title} />
                  <div className="text">
                    <h4>
                      <TruncateText text={items.title} limit={15} />
                    </h4>
                    <h5>${items.price}</h5>
                  </div>
                </ProductCart>
              );
            })
          ) : (
            <h3>nothing available</h3>
          )}
        </ProductAarea>

        <Last>
          <h2>Total: ${calculateTotalPrice()}</h2>
          <button>Checkout</button>
        </Last>
      </CartWrapper>
    </>
  );
};

export default CartSec;
