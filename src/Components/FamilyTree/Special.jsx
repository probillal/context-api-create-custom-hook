import React, { useContext } from "react";
import { assetContext } from "./FamilyTree";

const Special = ({ asset, name }) => {
  const newAsset = useContext(assetContext);
  return (
    <div>
      <h3>Special: {name}</h3>
      <p>Asset: {asset}</p>
      <p>Asset: {newAsset}</p>
    </div>
  );
};

export default Special;
