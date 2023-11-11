const days = Array.from({ length: new Date(2023, 10 + 1, 0).getDate() }).map(
  (_, idx) => `${idx + 1}`
);
const weeks = Array.from({ length: 4 }).map((_, idx) => `${idx + 1}`);
const months = Array.from({ length: 12 }).map((_, month) =>
  new Date(2023, month, 1).toLocaleString("en-US", { month: "long" })
);
const years = Array.from({ length: 23 }).map((_, index) => `${2000 + index}`);

export { days, weeks, months, years };
