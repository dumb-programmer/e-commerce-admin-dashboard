import { useContext } from "react";
import InventoryDataContext from "../contexts/InventoryDataContext";

const useInventoryDataContext = () => useContext(InventoryDataContext);

export default useInventoryDataContext;
