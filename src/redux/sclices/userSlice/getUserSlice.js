import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  GetUserResponse: null,
};
const url = `${process.env.REACT_APP_GET_USER_API_URL}`;

const getUser = createAsyncThunk("auth/getUser", async () => {
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

const UserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.GetUserResponse = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const useDataUser = () => {
  const { GetUserResponse, isLoading } = useSelector((state) => state.getUser);
  return {
    GetUserResponse,
    isLoading,
  };
};
export { getUser };

export default UserSlice.reducer;
