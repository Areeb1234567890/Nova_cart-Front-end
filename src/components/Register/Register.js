import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/sclices/authSlices/registerSlice";

const Register = () => {
  const value = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    try {
      dispatch(registerUser({ credentials: data, navigate }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="LoginWrap">
      <form
        action="POST"
        className="LoginCon"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 style={{ marginBottom: "20px", fontFamily: "Areeb" }}>Register </h1>
        <input
          className="LoginInput"
          type="text"
          placeholder="Enter your Name"
          name="name"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <input
          className="LoginInput"
          type="email"
          placeholder="Enter your email "
          name="email"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <input
          className="LoginInput"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button type="submit" className="Btn-Login">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
