import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
} from "recharts";
import generateSampleData from "../utils/generateSampleData";
import ChartPeriodToggle from "./ChartPeriodToggle";
import { useSearchParams } from "react-router-dom";

const datasetsByTimePeriod = generateSampleData("sales");

const TIME_PERIODS = ["daily", "weekly", "monthly", "yearly"];
const validateSearchParamsTimePeriod = (value: string | null) => {
  return (value && TIME_PERIODS.includes(value) && value) || "yearly";
};

const SalesChart = () => {
  const params = useSearchParams();
  const timePeriod = validateSearchParamsTimePeriod(
    params[0].get("sales-time-period")
  );

  return (
    <div>
      <div className="chart-header">
        <h2>Sales</h2>
        <ChartPeriodToggle selected={timePeriod} name="sales-time-period" />
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
              dataKey="sales"
              name="Sales(in dollars)"
              fill="#64CCC5"
              activeBar={<Rectangle fill="gold" stroke="none" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
