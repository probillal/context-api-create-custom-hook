import React, { useState } from "react";

const ProductForm = ({ handleAddProducts }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);

    // Validation
    if (name.length === 0) {
      setError("Please provide a product name");
      return;
    } else if (price.length === 0) {
      setError("Please provide a price");
      return;
    } else if (price < 0) {
      setError("Prise can not a negative value");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    console.log(newProduct);
    handleAddProducts(newProduct);
  };
  return (
    <div>
      <h3>Add a product</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" name="name" />
        <br />
        <input type="text" placeholder="Product Price" name="price" />
        <br />
        <input type="text" placeholder="Product Quantity" name="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
