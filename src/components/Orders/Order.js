import React, { useEffect } from "react";
import "../userList/tableStyle.css";
import { useDispatch } from "react-redux";
import {
  getOrder,
  useOrderData,
} from "../../redux/sclices/orderSclice/getOrder";
const Order = () => {
  const dispatch = useDispatch();
  const { GetOrderResponse } = useOrderData();

  useEffect(() => {
    dispatch(getOrder());
  }, []);
  const userData = [
    {
      name: "Areeb Mohsin",
      email: "areebmhsn@gmail.com",
      total: "5000",
      orderId: "67bhgch788abf234vk289ah97h32456bj",
      number: "5",
    },
  ];

  return (
    <div>
      <div className="userTable">
        <div className="Top-Action">
          <h2 style={{ fontFamily: "Regular" }}>Orders</h2>
        </div>

        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Name</th>
              <th>User E-mail</th>
              <th>Order Price</th>
              <th>Number of products</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.length > 0 ? (
              userData.map((Data, index) => {
                return (
                  <tr key={index}>
                    <td>{Data.orderId}</td>
                    <td>{Data.name}</td>
                    <td>{Data.email}</td>
                    <td>{Data.total}</td>
                    <td>{Data.number}</td>

                    <td>
                      <button
                        // onClick={() => {
                        //   nevigate("/Update/" + Data._id);
                        // }}
                        className="Edit"
                      >
                        Details
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
    </div>
  );
};

export default Order;
