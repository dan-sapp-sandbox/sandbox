import React from "react";
import { Doughnut } from "react-chartjs-2";
import type { ChartData } from "chart.js";

const data: ChartData<"doughnut"> = {
  labels: ["Desktop", "Mobile", "Tablet"],
  datasets: [
    {
      label: "Traffic Sources",
      data: [55, 35, 10],
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
      cutout: "60%", // donut thickness
    },
  ],
};

const DoughnutChart: React.FC = () => {
  return <Doughnut data={data} />;
};

export default DoughnutChart;
