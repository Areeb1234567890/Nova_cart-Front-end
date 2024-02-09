import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  GetUserOrderResponse: null,
};
const url = `${process.env.REACT_APP_GET_USER_ORDER_API}`;

const getUserOrder = createAsyncThunk("user/getOrders", async () => {
  const _token = sessionStorage.getItem("authUser");
  const { isAdmin, token, userId } = _token ? JSON.parse(_token) : {};
  try {
    const response = await axios.get(`${url}/${userId}`, {
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

const UserOrderSlice = createSlice({
  name: "getUserData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.GetUserOrderResponse = action.payload;
    });
    builder.addCase(getUserOrder.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const useUserOrder = () => {
  const { GetUserOrderResponse, isLoading } = useSelector(
    (state) => state.userOrder
  );
  return {
    GetUserOrderResponse,
    isLoading,
  };
};
export { getUserOrder };

export default UserOrderSlice.reducer;
