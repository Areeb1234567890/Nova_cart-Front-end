import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.find(
        (product) => product.id === productToAdd.id
      );

      if (!existingProduct) {
        state.push(productToAdd);
        toast.success("Added to Cart Successfully");
      } else {
        toast.info("Already added!!");
      }
    },
  },
});

export const useCart = () => {
  const cart = useSelector((state) => state.cart);
  return cart;
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
