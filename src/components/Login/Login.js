import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/sclices/authSlices/loginSlice";

const Login = () => {
  const value = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState(value);

  const handleLogin = (data) => {
    try {
      dispatch(loginUser({ credentials: data, navigate }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <div className="LoginWrap">
      <form
        action="POST"
        onSubmit={(e) => handleSubmit(e)}
        className="LoginCon"
      >
        <h1 style={{ marginBottom: "20px", fontFamily: "Areeb" }}>Login </h1>
        <input
          className="LoginInput"
          type="email"
          placeholder="Enter your email "
          name="email"
          onChange={(e) => handleInput(e)}
        />
        <input
          className="LoginInput"
          type="password"
          placeholder="Enter tour password"
          name="password"
          onChange={(e) => handleInput(e)}
        />
        <button type="submit" className="Btn-Login">
          Login
        </button>
        <h3 style={{ paddingTop: "15px" }}>(Admin : mohsinaac3@gmail.com)</h3>
        <h3>(Customer : areebmhsn@gmail.com)</h3>
        <h3>(Password for both : 12345)</h3>
      </form>
    </div>
  );
};

export default Login;
