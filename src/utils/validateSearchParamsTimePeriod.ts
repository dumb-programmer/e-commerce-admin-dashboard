import { TimePeriod } from "./definitions";

const TIME_PERIODS = ["daily", "weekly", "monthly", "yearly"];
const validateSearchParamsTimePeriod = (value: string | null): TimePeriod => {
  return (
    (value && TIME_PERIODS.includes(value) && (value as TimePeriod)) || "yearly"
  );
};

export default validateSearchParamsTimePeriod;
