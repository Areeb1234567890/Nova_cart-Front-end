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
    deleteFromCart: (state, action) => {
      const productIdToDelete = action.payload;
      const indexToDelete = state.findIndex(
        (product) => product.id === productIdToDelete
      );

      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
        toast.success("Deleted from cart successfully");
      }
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const useCart = () => {
  const cart = useSelector((state) => state.cart);
  return cart;
};

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
