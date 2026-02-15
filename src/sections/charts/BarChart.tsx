import React from "react";
import { Bar } from "react-chartjs-2";
import type { ChartData } from "chart.js";

const data: ChartData<"bar"> = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 7],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
    },
  ],
};

export const BarChart: React.FC = () => {
  return <Bar data={data} />;
};

export default BarChart;
