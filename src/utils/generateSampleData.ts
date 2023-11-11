import { faker } from "@faker-js/faker";
import { days, months, weeks, years } from "../constants/timePeriods";

const generateSampleData = (key: string) => {
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

export default generateSampleData;
