import { createContext } from "react";

interface Inventory {
  name: string;
  image: string;
  stock: number;
}
interface InventoryDataContext {
  inventory: Inventory[];
  setInventory: React.Dispatch<
    React.SetStateAction<
      {
        image: string;
        name: string;
        stock: number;
      }[]
    >
  >;
}

const InventoryDataContext = createContext<InventoryDataContext | null>(null);

export default InventoryDataContext;
