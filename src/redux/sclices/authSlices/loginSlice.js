import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  loginResponse: null,
};
const url = `${process.env.REACT_APP_LOGIN_API_URL}`;

const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ credentials, navigate }) => {
    try {
      const response = await axios.post(`${url}`, credentials);
      const { user, success, token, msg } = response.data;
      if (success) {
        const authUserData = JSON.stringify({
          token,
          userName: user.name,
          userId: user._id,
          isAdmin: user.isAdmin,
        });
        sessionStorage.setItem("authUser", authUserData);
        toast.success(msg);
        navigate("/");
      }
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginResponse = action.payload;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const useLogin = () => {
  const { loginResponse, isLoading } = useSelector((state) => state.auth);

  return {
    loginResponse,
    isLoading,
  };
};
export { loginUser };

export default authSlice.reducer;
