import React, { useEffect, useState } from "react";
import "../userList/tableStyle.css";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import {
  getOrder,
  useOrderData,
} from "../../redux/sclices/orderSclice/getOrder";
import Spinner from "../../assets/Images/Spinner.svg";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { GetOrderResponse } = useOrderData();
  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState();
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    dispatch(getOrder());
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (GetOrderResponse && GetOrderResponse.orders) {
      setOrderData(GetOrderResponse.orders);
    }
  }, [GetOrderResponse]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div className="userTable">
          <div className="Top-Action">
            <h2 style={{ fontFamily: "Regular" }}>Orders</h2>
            <input
              className="Search"
              type="text"
              onChange={(e) => {
                setSearchUser(e.target.value);
              }}
              value={searchUser}
              placeholder="Search Orders by Id"
            />
          </div>

          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Name</th>
                <th>User E-mail</th>
                <th>Order Price</th>
                <th>Order Date</th>
                <th>Delivered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderData && orderData.length > 0 ? (
                orderData
                  .filter((product) =>
                    product._id.toLowerCase().includes(searchUser.toLowerCase())
                  )
                  .sort((a, b) => {
                    if (a.deliverd && !b.deliverd) return 1;
                    if (!a.deliverd && b.deliverd) return -1;
                    return 0;
                  })
                  .map((Data, index) => {
                    return (
                      <tr key={index}>
                        <td>{Data._id}</td>
                        <td>{Data.user.name}</td>
                        <td>{Data.user.email}</td>
                        <td>${Data.totalPrice}</td>
                        <td>
                          {format(new Date(Data.createdAt), "MMM d, yyyy ")}
                        </td>
                        <td>
                          {Data.deliverd === true
                            ? "Delivered"
                            : "Not delivered"}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              navigate("/admin/order/" + Data._id, {
                                replace: true,
                                state: {
                                  data: Data,
                                },
                              });
                            }}
                            className="Edit"
                          >
                            Order Details
                          </button>
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <tr>
                  <td>Nothing found :(</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Order;
