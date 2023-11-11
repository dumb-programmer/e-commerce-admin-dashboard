import Card from "../components/Card";
import RevenueDataTable from "../components/RevenueDataTable";
import OrderCharts from "../components/OrderCharts";
import SalesChart from "../components/SalesChart";
import InventoryTrends from "../components/InventoryTrends";
import "../styles/RevenueAnalysis.css";

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
            <h3>Total Orders</h3>
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
            <h3>Total Sales</h3>
            <p>200,000$</p>
          </div>
        </Card>
      </section>
      <section>
        <OrderCharts />
        <SalesChart />
        <InventoryTrends />
      </section>
      <section>
        <h2>Revenue Data Table</h2>
        <RevenueDataTable />
      </section>
      <section>
        <h2>Revenue Trends and Comparisons Chart</h2>
      </section>
    </div>
  );
};

export default RevenueAnalysis;
