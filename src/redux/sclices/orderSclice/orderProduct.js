import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  orderResponse: null,
};
const url = `${process.env.REACT_APP_ORDER_PRODUCT_API}`;

const orderProduct = createAsyncThunk(
  "/orderProduct",
  async ({ credentials, navigate }) => {
    const _token = sessionStorage.getItem("authUser");
    const { isAdmin, token } = _token ? JSON.parse(_token) : {};
    console.log(credentials , "frm sclice")
    try {
      const response = await axios.post(`${url}`, credentials, {
        headers: {
          Authorization: `${token}`,
          checkAdmin: `${isAdmin}`,
        },
      });
      toast.success(response.data.msg);
      navigate("/");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

const orderProductSlice = createSlice({
  name: "orderProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(orderProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(orderProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderResponse = action.payload;
    });
    builder.addCase(orderProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { orderProduct };

export default orderProductSlice.reducer;
