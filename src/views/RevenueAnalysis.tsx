import RevenueDataTable from "../components/RevenueDataTable";
import OrderCharts from "../components/OrderCharts";
import SalesChart from "../components/SalesChart";
import InventoryTrends from "../components/InventoryTrends";
import InformationalCards from "../components/InformationalCards";
import RevenueTrends from "../components/RevenueTrends";
import "../styles/RevenueAnalysis.css";

const RevenueAnalysis = () => {
  return (
    <div>
      <h1>Revenue Analysis</h1>
      <section style={{ display: "flex", gap: "1rem" }}>
        <InformationalCards />
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
        <h2>Revenue Trends</h2>
        <RevenueTrends />
      </section>
    </div>
  );
};

export default RevenueAnalysis;
