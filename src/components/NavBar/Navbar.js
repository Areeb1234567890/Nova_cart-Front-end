import React, { useState } from "react";
import { NavWrap, NavCon, UserSec, Count } from "./NavbarStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartIcon from "../../assets/Images/Cart.png";
import ProfileIcon from "../../assets/Images/ProfileIcon.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { toast } from "react-toastify";
import { useCart } from "../../redux/sclices/cartSclice/cartSclice";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useCart();
  const _token = sessionStorage.getItem("authUser");
  const { isAdmin } = _token ? JSON.parse(_token) : {};

  console.log(cart);

  const logout = () => {
    sessionStorage.removeItem("authUser");
    navigate("/login");
    toast.success("Logout successfully");
  };

  return (
    <>
      <NavCon>
        <NavWrap>
          <Link to="/">
            <h1 className="Logo">Nova Cart</h1>
          </Link>

          <div className="NavLinks">
            <input type="text" placeholder="search" />
            <button>search</button>
          </div>

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
                  navigate("/cart");
                }}
              >
                {cart && cart.length > 0 ? (
                  <Count>
                    <span>{cart.length}</span>
                  </Count>
                ) : (
                  ""
                )}
                <img src={CartIcon} alt="cart" />
                <h4>Cart</h4>
              </div>

              {isAdmin === true ? (
                <>
                  <div
                    className="Cart"
                    id="fade-button"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <img src={ProfileIcon} alt="Profile" />
                    <h4>Admin</h4>
                  </div>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Orders</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/admin/userList");
                      }}
                    >
                      User List
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/admin/productList");
                      }}
                    >
                      Product List
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        logout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <div
                    className="Cart"
                    id="fade-button"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <img src={ProfileIcon} alt="Profile" />
                    <h4>Account</h4>
                  </div>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        logout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </UserSec>
          )}
        </NavWrap>
      </NavCon>
    </>
  );
};

export default Navbar;
