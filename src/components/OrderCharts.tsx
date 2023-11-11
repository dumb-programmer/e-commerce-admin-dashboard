import ChartPeriodToggle from "./ChartPeriodToggle";
import { useSearchParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Rectangle,
} from "recharts";
import generateSampleData from "../utils/generateSampleData";

const datasetsByTimePeriod = generateSampleData("orders");

const TIME_PERIODS = ["daily", "weekly", "monthly", "yearly"];
const validateSearchParamsTimePeriod = (value: string | null) => {
  return (value && TIME_PERIODS.includes(value) && value) || "yearly";
};

const OrderCharts = () => {
  const params = useSearchParams();
  const timePeriod = validateSearchParamsTimePeriod(
    params[0].get("orders-time-period")
  );

  return (
    <div>
      <div className="chart-header">
        <h2>Orders</h2>
        <ChartPeriodToggle selected={timePeriod} name="orders-time-period" />
      </div>
      <div style={{ height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={datasetsByTimePeriod[timePeriod]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval={window.innerWidth > 600 ? 0 : "preserveStart"}
              tick={{ fontSize: "0.8rem" }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="orders"
              name="Orders"
              fill="#609EA2"
              activeBar={<Rectangle fill="gold" stroke="none" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderCharts;
