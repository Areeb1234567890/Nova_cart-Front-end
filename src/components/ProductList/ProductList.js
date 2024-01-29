import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../userList/tableStyle.css";
import {
  getProduct,
  useDataProduct,
} from "../../redux/sclices/productSlices/getProduct";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { GetProductResponse } = useDataProduct();
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const handleSearch = async () => {
    if (searchUser !== "") {
    } else {
      toast.error("Enter name to search");
    }
  };

  useEffect(() => {
    const callData = async () => {
      await dispatch(getProduct());
    };
    callData();
  }, []);

  useEffect(() => {
    if (GetProductResponse && GetProductResponse.products) {
      setUserData(GetProductResponse.products);
    }
  }, [GetProductResponse]);

  return (
    <div>
      <div className="userTable">
        <div className="Top-Action">
          <input
            className="Search"
            type="text"
            onChange={(e) => {
              setSearchUser(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            value={searchUser}
            placeholder="Search for Product"
          />
          <button
            className="Edit"
            onClick={() => nevigate("/admin/addProduct")}
          >
            Add Products
          </button>
        </div>

        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.length > 0 ? (
              userData.map((Data, index) => {
                return (
                  <tr key={index}>
                    <td>{Data._id}</td>
                    <td>{Data.title}</td>
                    <td>{Data.price}</td>
                    <td>{Data.image}</td>
                    <td>
                      <button
                        // onClick={() => {
                        //   nevigate("/Update/" + Data._id);
                        // }}
                        className="Edit Table"
                      >
                        Edit
                      </button>

                      <button className="Edit Table Delete">Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h3>Nothing found :(</h3>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
