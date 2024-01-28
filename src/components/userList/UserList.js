import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser, useDataUser } from "../../redux/sclices/userSlice/useSlice";
import { toast } from "react-toastify";
import "./tableStyle.css";

const UserList = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { GetUserResponse } = useDataUser();
  const [userData, setUserData] = useState(GetUserResponse.user);
  const [searchUser, setSearchUser] = useState("");

  console.log(GetUserResponse);

  const handleSearch = async () => {
    if (searchUser !== "") {
    } else {
      toast.error("Enter name to search");
    }
  };

  useEffect(() => {
    const callData = () => {
      dispatch(getUser());
    };
    callData();
  }, []);

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
            placeholder="Search for users"
          />
        </div>

        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>User E-mail</th>
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

export default UserList;
