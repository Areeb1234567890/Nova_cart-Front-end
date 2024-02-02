import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./sclices/authSlices/loginSlice";
import registerReducer from "./sclices/authSlices/registerSlice";
import userReducer from "./sclices/userSlice/getUserSlice";
import productReducer from "./sclices/productSlices/addProduct";
import getProductReducer from "./sclices/productSlices/getProduct";
import deleteProductReducer from "./sclices/productSlices/deleteProduct";
import cartReducer from "./sclices/cartSclice/cartSclice";
import orderProductReducer from "./sclices/orderSclice/orderProduct";

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    getUser: userReducer,
    addProduct: productReducer,
    getProduct: getProductReducer,
    deleteProduct: deleteProductReducer,
    cart: cartReducer,
    order: orderProductReducer,
  },
});
