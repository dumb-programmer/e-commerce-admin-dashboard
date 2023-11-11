import { faker } from "@faker-js/faker";

interface TimePeriodData {
  daily: {
    labels: string[];
    data?: number[];
    backgroundColor: string;
  };
  weekly: {
    labels: string[];
    data?: number[];
    backgroundColor: string;
  };
  monthly: {
    labels: string[];
    data?: number[];
    backgroundColor: string;
  };
  yearly: {
    labels: string[];
    data?: number[];
    backgroundColor: string;
  };
}

export const datasetsByTimePeriod: TimePeriodData = {
  daily: {
    labels: Array.from({ length: new Date(2023, 10 + 1, 0).getDate() }).map(
      (_, idx) => `${idx + 1}`
    ),
    backgroundColor: "#CE5A67",
  },
  weekly: {
    labels: Array.from({ length: Math.round(Math.random() * 4.34524) }).map(
      (_, idx) => `${idx + 1}`
    ),
    backgroundColor: "#CE5A67",
  },
  monthly: {
    labels: Array.from({ length: 12 }).map((_, month) =>
      new Date(2023, month, 1).toLocaleString("en-US", { month: "long" })
    ),
    backgroundColor: "#CE5A67",
  },
  yearly: {
    labels: Array.from({ length: 23 }).map((_, index) => `${2000 + index}`),
    backgroundColor: "#CE5A67",
  },
};

datasetsByTimePeriod.daily.data = datasetsByTimePeriod.daily.labels.map(() =>
  faker.number.int({ min: 0, max: 100 })
);
datasetsByTimePeriod.weekly.data = datasetsByTimePeriod.weekly.labels.map(() =>
  faker.number.int({ min: 100, max: 2000 })
);
datasetsByTimePeriod.monthly.data = datasetsByTimePeriod.monthly.labels.map(
  () => faker.number.int({ min: 1000, max: 50000 })
);
datasetsByTimePeriod.yearly.data = datasetsByTimePeriod.yearly.labels.map(() =>
  faker.number.int({ min: 1000, max: 50000 })
);
