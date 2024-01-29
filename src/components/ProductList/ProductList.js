import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../userList/tableStyle.css";

const ProductList = () => {
  const nevigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const handleSearch = async () => {
    if (searchUser !== "") {
    } else {
      toast.error("Enter name to search");
    }
  };

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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.length > 0 ? (
              userData.map((Data, index) => {
                return (
                  <tr key={index}>
                    <td>{Data._id}</td>
                    <td>{Data.name}</td>
                    <td>{Data.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          nevigate("/Update/" + Data._id);
                        }}
                        className="Edit"
                      >
                        Edit
                      </button>
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
