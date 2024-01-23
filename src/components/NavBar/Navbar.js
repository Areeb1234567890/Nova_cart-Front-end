import React, { useEffect, useState } from "react";
import { NavWrap, NavCon, UserSec, Count } from "./NavbarStyles";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../../assets/Images/Cart.png";
import ProfileIcon from "../../assets/Images/ProfileIcon.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <>  
      <NavCon>
        <NavWrap>
          <Link to="/">
            <h1 className="Logo">Nova Cart</h1>
          </Link>

          <div className="NavLinks">
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              <h3>Home</h3>
            </Link>

            <Link
              className={location.pathname === "/About" ? "active" : ""}
              to="/About"
            >
              <h3>About</h3>
            </Link>
          </div>

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

          {/* <UserSec>
            <div
              className="Cart"
              onClick={() => {
                // handleClickCart();
              }}
            >
              {Cart && Cart.length > 0 ? (
                <Count>
                  <span>{Cart.length}</span>
                </Count>
              ) : (
                ""
              )} 
              <img src={CartIcon} alt="cart" />
            </div>

            <div className="Cart">
              <img src={ProfileIcon} alt="Profile" />
            </div>
          </UserSec> */}

        </NavWrap>
      </NavCon>
    </>
  );
};

export default Navbar;
