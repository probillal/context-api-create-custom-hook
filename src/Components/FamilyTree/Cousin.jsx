import React from "react";
import Special from "./Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h3>{name}</h3>
      {name === "Tom" && <Special asset={asset}></Special>}
      {name === "Motu" && <Special asset={asset}></Special>}
    </div>
  );
};

export default Cousin;
