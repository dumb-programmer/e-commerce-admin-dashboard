import { createContext } from "react";

interface Inventory {
  id: string;
  name: string;
  description: string;
  image: string;
  stock: number;
  price: number;
}
interface InventoryDataContext {
  inventory: Inventory[];
  setInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
}

const InventoryDataContext = createContext<InventoryDataContext | null>(null);

export default InventoryDataContext;
