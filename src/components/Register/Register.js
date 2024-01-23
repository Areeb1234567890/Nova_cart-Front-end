import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="LoginWrap">
      <form action="POST" className="LoginCon">
        <h1 style={{ marginBottom: "20px", fontFamily: "Areeb" }}>Register </h1>
        <input
          className="LoginInput"
          type="text"
          placeholder="Enter your Name"
          name="name"
        />
        <input
          className="LoginInput"
          type="email"
          placeholder="Enter your email "
          name="email"
        />
        <input
          className="LoginInput"
          type="password"
          placeholder="Enter tour password"
          name="password"
        />
        <button type="submit" className="Btn-Login">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
