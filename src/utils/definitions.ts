interface InventorySampleData {
  daily: {
    name: string;
    inventory: number;
  }[];
  weekly: {
    name: string;
    inventory: number;
  }[];
  monthly: {
    name: string;
    inventory: number;
  }[];
  yearly: {
    name: string;
    inventory: number;
  }[];
}

interface OrdersSampleData {
  daily: {
    name: string;
    orders: number;
  }[];
  weekly: {
    name: string;
    orders: number;
  }[];
  monthly: {
    name: string;
    orders: number;
  }[];
  yearly: {
    name: string;
    orders: number;
  }[];
}

interface SalesSampleData {
  daily: {
    name: string;
    sales: number;
  }[];
  weekly: {
    name: string;
    sales: number;
  }[];
  monthly: {
    name: string;
    sales: number;
  }[];
  yearly: {
    name: string;
    sales: number;
  }[];
}

type TimePeriod = "daily" | "weekly" | "monthly" | "yearly";

export {
  type InventorySampleData,
  type OrdersSampleData,
  type SalesSampleData,
  type TimePeriod,
};
