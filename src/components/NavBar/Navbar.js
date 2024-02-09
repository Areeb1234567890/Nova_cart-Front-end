import React, { useEffect, useState } from "react";
import {
  NavWrap,
  NavCon,
  UserSec,
  Count,
  Count2,
  Count3,
} from "./NavbarStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartIcon from "../../assets/Images/Cart.png";
import ProfileIcon from "../../assets/Images/ProfileIcon.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { toast } from "react-toastify";
import { useCart } from "../../redux/sclices/cartSclice/cartSclice";
import { useDispatch } from "react-redux";
import {
  getOrder,
  useOrderData,
} from "../../redux/sclices/orderSclice/getOrder";

const Navbar = () => {
  const _token = sessionStorage.getItem("authUser");
  const { isAdmin, userId } = _token ? JSON.parse(_token) : {};

  const [searchUser, setSearchUser] = useState("");
  const dispatch = useDispatch();
  const { GetOrderResponse } = useOrderData();

  useEffect(() => {
    if (_token) {
      dispatch(getOrder());
    }
  }, []);
  
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

  const handleSearch = () => {
    if (searchUser !== "") {
    } else {
      toast.error("Enter product name to search");
    }
  };

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
            <input
              type="text"
              placeholder="Search product"
              onChange={(e) => {
                setSearchUser(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              value={searchUser}
            />
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
              {isAdmin === true ? (
                ""
              ) : (
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
              )}

              {isAdmin === true ? (
                <>
                  <div
                    className="Cart"
                    id="fade-button"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    {GetOrderResponse?.orders &&
                    GetOrderResponse?.orders.length > 0 ? (
                      <Count2>
                        <span>{GetOrderResponse.orders.length}</span>
                      </Count2>
                    ) : (
                      ""
                    )}

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
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/admin/orders");
                      }}
                    >
                      Orders
                      {GetOrderResponse?.orders &&
                      GetOrderResponse?.orders.length > 0 ? (
                        <Count3>
                          <span>{GetOrderResponse.orders.length}</span>
                        </Count3>
                      ) : (
                        ""
                      )}
                    </MenuItem>
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
                      }}
                    >
                      My Orders
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
              )}
            </UserSec>
          )}
        </NavWrap>
      </NavCon>
    </>
  );
};

export default Navbar;
