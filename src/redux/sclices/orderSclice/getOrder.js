import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  GetOrderResponse: null,
};
const url = `${process.env.REACT_APP_GET_ORDER_DETS_API}`;

const getOrder = createAsyncThunk("admin/getOrders", async () => {
  const _token = sessionStorage.getItem("authUser");
  const { isAdmin, token } = _token ? JSON.parse(_token) : {};
  try {
    const response = await axios.get(`${url}`, {
      headers: {
        Authorization: `${token}`,
        checkAdmin: `${isAdmin}`,
      },
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.data.msg);
  }
});

const OrderSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.GetOrderResponse = action.payload;
    });
    builder.addCase(getOrder.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const useOrderData = () => {
  const { GetOrderResponse, isLoading } = useSelector(
    (state) => state.getOrder
  );
  return {
    GetOrderResponse,
    isLoading,
  };
};
export { getOrder };

export default OrderSlice.reducer;
