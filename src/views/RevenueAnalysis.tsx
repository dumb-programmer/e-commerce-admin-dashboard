import Card from "../components/Card";

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
      <section>
        <h2>Charts</h2>
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
