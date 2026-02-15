import React from "react";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

const data: ChartData<"line"> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sales",
      data: [30, 45, 60, 50, 70],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Sales",
    },
  },
};

const LineChart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
