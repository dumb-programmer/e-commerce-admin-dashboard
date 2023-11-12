// import { PhotoIcon } from "@heroicons/react/24/outline";
// import { useRef } from "react";
// import ImageUpload from "../components/ImageUpload";

import React, { useState } from "react";
import useInventoryDataContext from "../hooks/useInventoryDataContext";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

const RegisterProduct = () => {
  const inventoryDataContext = useInventoryDataContext();
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    image: faker.image.urlLoremFlickr(),
  });
  const navigate = useNavigate();

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inventoryDataContext?.setInventory) {
      inventoryDataContext.setInventory((inventory) => [
        { id: crypto.randomUUID(), ...data },
        ...inventory,
      ]);
      navigate("/inventory");
    }
  };

  return (
    <div>
      <h1>Register Product</h1>
      <form style={{ marginTop: 20, maxWidth: 900 }} onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={data.description}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={data.price}
            onChange={handleInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={data.stock}
            onChange={handleInput}
          />
        </div>
        <div className="form-control">
          <label htmlFor="images">Images:</label>
          <input type="file" id="images" accept="image/*" multiple />
          {/* <ImageUpload /> */}
        </div>
        <div className="form-control">
          <button className="btn primary-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterProduct;
