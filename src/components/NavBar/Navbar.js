import React, { useEffect, useState } from "react";
import { NavWrap, NavCon, UserSec, Count } from "./NavbarStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartIcon from "../../assets/Images/Cart.png";
import ProfileIcon from "../../assets/Images/ProfileIcon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const _token = sessionStorage.getItem("authUser");
  const { userName } = _token ? JSON.parse(_token) : {};

  const logout = () => {
    sessionStorage.removeItem("authUser");
    navigate("/login");
  };

  return (
    <>
      <NavCon>
        <NavWrap>
          <Link to="/">
            <h1 className="Logo">Nova Cart</h1>
          </Link>

          {!_token ? (
            <UserSec>
              <Link
                className={location.pathname === "/login" ? "active" : ""}
                to="/login"
              >
                <button>Login</button>
              </Link>

              <Link
                className={location.pathname === "/register" ? "active" : ""}
                to="/register"
              >
                <button>Register</button>
              </Link>
            </UserSec>
          ) : (
            <UserSec>
              <div
                className="Cart"
                onClick={() => {
                  // handleClickCart();
                }}
              >
                {/* {Cart && Cart.length > 0 ? (
                  <Count>
                    <span>{Cart.length}</span>
                  </Count>
                ) : (
                  ""
                )} */}
                <img src={CartIcon} alt="cart" />
                <h4>Cart</h4>
              </div>

              <div className="Cart">
                <img src={ProfileIcon} alt="Profile" />
                <h4>{userName}</h4>
              </div>

              {/* <button onClick={() => logout()}>logout</button> */}
            </UserSec>
          )}
        </NavWrap>
      </NavCon>
    </>
  );
};

export default Navbar;
