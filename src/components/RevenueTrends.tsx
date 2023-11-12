import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { months } from "../constants/timePeriods";
import { faker } from "@faker-js/faker";

const data = months.map((month) => ({
  name: month,
  electronics: faker.number.int({ min: 5000, max: 10000 }),
  homeAndKitchen: faker.number.int({ min: 8000, max: 20000 }),
  booksAndStationery: faker.number.int({ min: 200, max: 5000 }),
}));

const RevenueTrends = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <div style={{ height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval={window.innerWidth > 600 ? 0 : "preserveStart"}
              tick={{ fontSize: "0.8rem" }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="electronics" name="Electronics" stroke="#5b2ffa" />
            <Line
              dataKey="homeAndKitchen"
              name="Home and Kitchen"
              stroke="#14f7f7"
            />
            <Line
              dataKey="booksAndStationery"
              name="Books and Stationery"
              stroke="#d466ff"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueTrends;
