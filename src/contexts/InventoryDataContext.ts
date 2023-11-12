import { createContext } from "react";
import inventoryData from "../constants/inventoryData";

const InventoryDataContext = createContext(inventoryData);

export default InventoryDataContext;
