import { faker } from "@faker-js/faker";
import { days, months, weeks, years } from "../constants/timePeriods";
import {
  InventorySampleData,
  OrdersSampleData,
  SalesSampleData,
} from "./definitions";

const generateSampleData = (key: "inventory" | "orders" | "sales") => {
  return {
    daily: days.map((day) => ({
      name: day,
      [key]: faker.number.int({ min: 0, max: 100 }),
    })),
    weekly: weeks.map((week) => ({
      name: week,
      [key]: faker.number.int({ min: 100, max: 2000 }),
    })),
    monthly: months.map((month) => ({
      name: month,
      [key]: faker.number.int({ min: 1000, max: 50000 }),
    })),
    yearly: years.map((year) => ({
      name: year,
      [key]: faker.number.int({ min: 1000, max: 50000 }),
    })),
  };
};

const generateInventorySampleData = () => {
  return generateSampleData("inventory") as unknown as InventorySampleData;
};

const generateOrdersSampleData = () => {
  return generateSampleData("orders") as unknown as OrdersSampleData;
};

const generateSalesSampleData = () => {
  return generateSampleData("sales") as unknown as SalesSampleData;
};

export {
  generateInventorySampleData,
  generateSalesSampleData,
  generateOrdersSampleData,
};
