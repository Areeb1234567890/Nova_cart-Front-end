import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddProduct from "./components/AddProduct/AddProduct";
import UserList from "./components/userList/UserList";
import ProductList from "./components/ProductList/ProductList";
import ProductDets from "./components/ProductDetails/ProductDets";
import AddressDets from "./components/AdressDets/AddressDets";
import Cart from "./components/Cart/Cart";
import CartOrder from "./components/CartCheckout/CartOrder";
import OrdersDets from "./components/OrdersDetail/OrdersDets";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import UserOrders from "./components/UserOrders/UserOrders";
import Order from "./components/Orders/Order";
import EditProduct from "./components/EditProduct/Editproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<SearchProduct />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin/orders" element={<Order />}></Route>
          <Route path="/orders/:id" element={<UserOrders />}></Route>
          <Route path="/edit/:id" element={<EditProduct />}></Route>
          <Route path="/admin/order/:id" element={<OrdersDets />}></Route>
          <Route path="/cartCheckout" element={<CartOrder />}></Route>
          <Route path="/adressDetails" element={<AddressDets />}></Route>
          <Route path="/admin/productList" element={<ProductList />}></Route>
          <Route path="/admin/addProduct" element={<AddProduct />}></Route>
          <Route path="/admin/userList" element={<UserList />}></Route>
          <Route path="/productDets/:id" element={<ProductDets />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
