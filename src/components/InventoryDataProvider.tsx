import React, { useState } from "react";
import inventoryData from "../constants/inventoryData";
import InventoryDataContext from "../contexts/InventoryDataContext";

const InventoryDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [inventory, setInventory] = useState(inventoryData);
  return (
    <InventoryDataContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryDataContext.Provider>
  );
};

export default InventoryDataProvider;
