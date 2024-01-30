import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../userList/tableStyle.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  getProduct,
  useDataProduct,
} from "../../redux/sclices/productSlices/getProduct";
import { deleteProduct } from "../../redux/sclices/productSlices/deleteProduct";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { GetProductResponse } = useDataProduct();
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = async () => {
    if (searchUser !== "") {
    } else {
      toast.error("Enter name to search");
    }
  };

  const handleDelete = (Data) => {
    try {
      dispatch(deleteProduct({ credentials: Data }));
      setOpen(false);
    } catch (error) {
      console.error("Delete failed:", error);
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
                      <button className="Edit Table">Edit</button>

                      <button
                        className="Edit Table Delete"
                        onClick={handleOpen}
                      >
                        Delete
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style} className="ModalBody">
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Are You Sure?
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            If you delete the product it will not be restored!!
                          </Typography>
                          <div className="buttons">
                            <Button
                              className="Edit Table"
                              onClick={handleClose}
                            >
                              Cancel
                            </Button>
                            <Button
                              className="Edit Table Delete"
                              onClick={() => {
                                handleDelete(Data._id);
                              }}
                            >
                              Yes
                            </Button>
                          </div>
                        </Box>
                      </Modal>
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

export default ProductList;
