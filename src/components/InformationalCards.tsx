import Card from "./Card";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

const InformationalCards = () => {
  return (
    <>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div>
            <h5 style={{ color: "grey" }}>Total Orders</h5>
            <h2>200K</h2>
          </div>
          <div
            style={{
              padding: 5,
              height: 30,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              gap: 5,
              backgroundColor: "rgba(71, 230, 113,0.3)",
            }}
          >
            <ArrowUpIcon
              strokeWidth={"3px"}
              color="#02bf1b"
              height={15}
              width={20}
            />{" "}
            <p style={{ fontSize: "0.8rem" }}>12%</p>
          </div>
        </div>
      </Card>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div>
            <h5 style={{ color: "grey" }}>Sales</h5>
            <h2>$700K</h2>
          </div>
          <div
            style={{
              padding: 5,
              height: 30,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              gap: 5,
              backgroundColor: "rgba(232, 49, 49, 0.3)",
            }}
          >
            <ArrowDownIcon
              strokeWidth={"3px"}
              color="#d40000"
              height={15}
              width={20}
            />{" "}
            <p style={{ fontSize: "0.8rem" }}>2%</p>
          </div>
        </div>
      </Card>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div>
            <h5 style={{ color: "grey" }}>Profit</h5>
            <h2>800K</h2>
          </div>
          <div
            style={{
              padding: 5,
              height: 30,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              gap: 5,
              backgroundColor: "rgba(71, 230, 113,0.3)",
            }}
          >
            <ArrowUpIcon
              strokeWidth={"3px"}
              color="#02bf1b"
              height={15}
              width={20}
            />{" "}
            <p style={{ fontSize: "0.8rem" }}>20%</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default InformationalCards;
