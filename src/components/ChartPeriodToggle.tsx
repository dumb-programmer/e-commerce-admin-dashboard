import { useLocation, useNavigate } from "react-router-dom";
import ToggleGroup from "./ToggleGroup";

const TIME_PERIODS = ["daily", "weekly", "monthly", "yearly"];

const ChartPeriodToggle = ({
  name,
  selected,
}: {
  name: string;
  selected: string;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ToggleGroup
      labels={TIME_PERIODS}
      selected={(TIME_PERIODS.includes(selected) && selected) || "yearly"}
      groupName={name}
      onChange={(value) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set(name, value);
        navigate(`${location.pathname}?${searchParams.toString()}`);
      }}
    />
  );
};

export default ChartPeriodToggle;
