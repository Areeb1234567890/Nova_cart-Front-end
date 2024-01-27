import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./sclices/authSlices/loginSlice";
import registerReducer from "./sclices/authSlices/registerSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});
