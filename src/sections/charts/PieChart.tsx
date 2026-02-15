import React from "react";
import { Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

const data: ChartData<"pie"> = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "Users",
      data: [12, 19, 8, 5],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "User Distribution",
    },
  },
};

const PieChart: React.FC = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
