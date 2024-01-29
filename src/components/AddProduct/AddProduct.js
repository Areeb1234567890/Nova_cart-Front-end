import React, { useState } from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/sclices/productSlices/addProduct";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Value = {
    title: "",
    description: "",
    price: "",
    file: "",
  };
  const [postData, setPostData] = useState(Value);

  const Submithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("description", postData.description);
    formData.append("price", postData.price);
    formData.append("file", postData.file);
    try {
      dispatch(addProduct({ credentials: formData, navigate }));
    } catch (error) {
      console.error("Login failed:", error);
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
    <div className="PostCon" onSubmit={(e) => Submithandler(e)}>
      <h1>Add a New Product</h1>
      <form className="Create-Post">
        <input
          className="Post-Input"
          name="title"
          type="text"
          placeholder="Enter Title"
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          className="Post-Input"
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
          type="text"
          placeholder="Enter price"
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <input
          className="Post-Input file"
          name="file"
          type="file"
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <button className="Btn-Post Submit" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
