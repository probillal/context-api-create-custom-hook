import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h2>Products: {products.length}</h2>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default ProductTable;
