import React from "react";

const ProductForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);
    const newProduct = {
      name,
      price,
      quantity,
    };
    console.log(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" name="name" />
        <br />
        <input type="text" placeholder="Product Price" name="price" />
        <br />
        <input type="text" placeholder="Product Quantity" name="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
