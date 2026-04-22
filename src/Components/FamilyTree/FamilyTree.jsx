import React, { createContext } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const assetContext = createContext("");

const FamilyTree = () => {
  const asset = "Diamond";
  const newAsset = "Gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <assetContext.Provider value={newAsset}>
        <Grandpa asset={asset}></Grandpa>
      </assetContext.Provider>
    </div>
  );
};

export default FamilyTree;
