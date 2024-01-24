import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./sclices/authSlices/loginSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
