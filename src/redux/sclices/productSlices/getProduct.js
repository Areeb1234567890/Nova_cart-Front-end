import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  GetProductResponse: null,
};
const url = `${process.env.REACT_APP_GET_PRODUCT_API_URL}`;
const _token = sessionStorage.getItem("authUser");
const { isAdmin, token } = _token ? JSON.parse(_token) : {};

const getProduct = createAsyncThunk("/getProduct", async () => {
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

const getProductSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.GetProductResponse = action.payload;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const useDataProduct = () => {
  const { GetProductResponse, isLoading } = useSelector(
    (state) => state.getProduct
  );
  return {
    GetProductResponse,
    isLoading,
  };
};
export { getProduct };

export default getProductSlice.reducer;
