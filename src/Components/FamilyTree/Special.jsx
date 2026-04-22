import React from "react";

const Special = ({ asset, name }) => {
  return (
    <div>
      <h3>Special: {name}</h3>
      <p>Asset: {asset}</p>
    </div>
  );
};

export default Special;
