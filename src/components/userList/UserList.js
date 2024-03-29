import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getUser,
  useDataUser,
} from "../../redux/sclices/userSlice/getUserSlice";
import { toast } from "react-toastify";
import "./tableStyle.css";
import Spinner from "../../assets/Images/Spinner.svg";

const UserList = () => {
  const dispatch = useDispatch();
  const { GetUserResponse } = useDataUser();
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const callData = async () => {
      await dispatch(getUser());
    };
    callData();
  }, []);

  useEffect(() => {
    if (GetUserResponse && GetUserResponse.user) {
      setUserData(GetUserResponse.user);
    }
  }, [GetUserResponse]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div className="userTable">
          <div className="Top-Action">
            <input
              className="Search"
              type="text"
              onChange={(e) => {
                setSearchUser(e.target.value);
              }}
              value={searchUser}
              placeholder="Enter email search"
            />
          </div>

          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User E-mail</th>
              </tr>
            </thead>
            <tbody>
              {userData && userData.length > 0 ? (
                userData
                  .filter((user) =>
                    user.email.toLowerCase().includes(searchUser.toLowerCase())
                  )
                  .map((Data, index) => {
                    return (
                      <tr key={index}>
                        <td>{Data._id}</td>
                        <td>{Data.name}</td>
                        <td>{Data.email}</td>
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

export default UserList;
