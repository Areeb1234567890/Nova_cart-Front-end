import React, { useEffect, useState } from "react";
import "../AddProduct/Post.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../assets/Images/Spinner.svg";
import { toast } from "react-toastify";

const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Value = {
    title: "",
    description: "",
    price: "",
    file: "",
    qty: "",
    brand: "",
  };
  const [postData, setPostData] = useState(Value);

  const _token = sessionStorage.getItem("authUser");
  const { isAdmin, token } = _token ? JSON.parse(_token) : {};

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_GET_ONE_PRODUCT_API}/${id}`,
          {
            headers: {
              Authorization: `${token}`,
              checkAdmin: `${isAdmin}`,
            },
          }
        );
        setPostData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const Submithandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_UPDATE_PRODUCT_API}/${id}`,
        postData,
        {
          headers: {
            Authorization: `${token}`,
            checkAdmin: `${isAdmin}`,
          },
        }
      );
      toast.success(res.data.msg);
      navigate("/admin/productList");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const inputHandler = (e) => {
    const { name } = e.target;
    if (name === "file") {
      const file = e.target.files[0];
      setPostData({ ...postData, [name]: file });
    } else {
      const value = e.target.value;
      setPostData({ ...postData, [name]: value });
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div className="PostCon" onSubmit={(e) => Submithandler(e)}>
          <h1>Edit Product</h1>
          <form className="Create-Post">
            <input
              className="Post-Input"
              name="title"
              type="text"
              placeholder="Enter Title"
              value={postData.title}
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              value={postData.description}
              name="description"
              type="text"
              placeholder="Enter Description"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              name="price"
              value={postData.price}
              type="text"
              placeholder="Enter price"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              value={postData.qty}
              name="qty"
              type="text"
              placeholder="Enter quantity stock"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              className="Post-Input"
              name="brand"
              type="text"
              value={postData.brand}
              placeholder="Enter Brand name"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <button className="Btn-Post Submit" type="submit">
              Update
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditProduct;
