import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  registerResponse: null,
};
const url = "http://localhost:4000/api/register";

const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ credentials, navigate }) => {
    try {
      console.log({ navigate });
      const response = await axios.post(`${url}`, credentials);
      if (response) {
        toast.success(response.data.msg);
        navigate("/login");
      }
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.registerResponse = action.payload;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { registerUser };

export default registerSlice.reducer;
