import { Line } from "react-chartjs-2";
import Card from "../components/Card";
import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  Title,
  Tooltip,
  LinearScale,
  PointElement,
} from "chart.js";
import { faker } from "@faker-js/faker";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const RevenueAnalysis = () => {
  return (
    <div>
      <h1>Revenue Analysis</h1>
      <section style={{ display: "flex", gap: "1rem" }}>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h2>Total Orders</h2>
            <p>100</p>
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h2>Total Sales</h2>
            <p>200,000$</p>
          </div>
        </Card>
      </section>
      <section style={{ marginTop: 50 }}>
        <h2>Charts</h2>
        <Line
          options={options}
          data={{
            labels: ["January", "Feburary", "March", "April"],
            datasets: [
              {
                label: "Headphones",
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: "red",
              },
              {
                label: "Laptop",
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: "green",
              },
              {
                label: "Shoes",
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: "blue",
              },
              {
                label: "PS5",
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: "purple",
              },
            ],
          }}
        />
      </section>
      <section>
        <h2>Revenue Data Table</h2>
      </section>
      <section>
        <h2>Revenue Trends and Comparisons Chart</h2>
      </section>
    </div>
  );
};

export default RevenueAnalysis;
