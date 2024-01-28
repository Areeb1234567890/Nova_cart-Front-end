import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./sclices/authSlices/loginSlice";
import registerReducer from "./sclices/authSlices/registerSlice";
import userReducer from "./sclices/userSlice/useSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    getUser: userReducer,
  },
});
