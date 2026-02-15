import "./chartSetup";
import { useState } from "react";

const useChartState = () => {
  const chartOptions = [
    { id: "bar", name: "Bar" },
    { id: "line", name: "Line" },
    { id: "pie", name: "Pie" },
    { id: "doughnut", name: "Doughnut" },
  ];
  const [activeChart, setActiveChart] = useState("line");
  return { activeChart, setActiveChart, chartOptions };
};

export default useChartState;
