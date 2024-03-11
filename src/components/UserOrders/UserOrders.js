import React, { useEffect, useState } from "react";
import "../userList/tableStyle.css";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import {
  getUserOrder,
  useUserOrder,
} from "../../redux/sclices/orderSclice/getUserOrder";
import Spinner from "../../assets/Images/Spinner.svg";
import { useNavigate } from "react-router-dom";

const UserOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { GetUserOrderResponse } = useUserOrder();
  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    dispatch(getUserOrder());
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (GetUserOrderResponse && GetUserOrderResponse) {
      setOrderData(GetUserOrderResponse);
    }
  }, [GetUserOrderResponse]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div className="userTable">
          <div className="Top-Action">
            <h2 style={{ fontFamily: "Regular" }}>My Orders</h2>
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
                orderData.map((Data, index) => {
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
                        {Data.deliverd === true ? "Delivered" : "Not delivered"}
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

export default UserOrders;
