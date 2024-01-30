import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  deleteProductResponse: null,
};
const url = `${process.env.REACT_APP_DELETE_PRODUCT_API}`;

const deleteProduct = createAsyncThunk(
  "/getProduct",
  async ({ credentials, navigate }) => {
    const _token = sessionStorage.getItem("authUser");
    const { isAdmin, token } = _token ? JSON.parse(_token) : {};
    try {
      const response = await axios.delete(`${url}/${credentials}`, {
        headers: {
          Authorization: `${token}`,
          checkAdmin: `${isAdmin}`,
        },
      });
      toast.success(response.data.msg);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

const deleteProductSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deleteProductResponse = action.payload;
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { deleteProduct };

export default deleteProductSlice.reducer;
