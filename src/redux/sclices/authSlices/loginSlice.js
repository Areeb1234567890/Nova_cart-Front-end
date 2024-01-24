import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
