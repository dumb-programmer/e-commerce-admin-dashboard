import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartPeriodToggle from "./ChartPeriodToggle";
import { useSearchParams } from "react-router-dom";
import { generateInventorySampleData } from "../utils/generateSampleData";
import validateSearchParamsTimePeriod from "../utils/validateSearchParamsTimePeriod";

const datasetsByTimePeriod = generateInventorySampleData();

const InventoryTrends = () => {
  const params = useSearchParams();
  const timePeriod = validateSearchParamsTimePeriod(
    params[0].get("inventory-time-period")
  );

  return (
    <div>
      <div className="chart-header">
        <h2>Inventory</h2>
        <ChartPeriodToggle selected={timePeriod} name="inventory-time-period" />
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
              dataKey="inventory"
              name="Inventory"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="none" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InventoryTrends;
