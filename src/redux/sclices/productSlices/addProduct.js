import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  productResponse: null,
};
const url = `${process.env.REACT_APP_ADD_PRODUCT_API_URL}`;

const addProduct = createAsyncThunk(
  "/addProduct",
  async ({ credentials, navigate }) => {
    const _token = sessionStorage.getItem("authUser");
    const { isAdmin, token } = _token ? JSON.parse(_token) : {};
    try {
      const response = await axios.post(`${url}`, credentials, {
        headers: {
          Authorization: `${token}`,
          checkAdmin: `${isAdmin}`,
        },
      });
      toast.success(response.data.msg);
      navigate("/admin/productList");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

const productSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productResponse = action.payload;
    });
    builder.addCase(addProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { addProduct };

export default productSlice.reducer;
