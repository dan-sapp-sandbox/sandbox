import "./chartSetup";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import type { ChartData, Point } from "chart.js";
import unemploymentData from "./UNRATE.csv?raw";

interface UnemploymentRecord {
  observation_date: string;
  UNRATE: number;
}

export const jsonToLineChartData = (data: UnemploymentRecord[]): ChartData<"line"> => {
  return {
    labels: data.map((row) => row.observation_date),
    datasets: [
      {
        label: "Unemployment Rate (%)",
        data: data.map((row) => row.UNRATE),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        fill: true,
        tension: 0.2, // smooth line
        pointRadius: 1,
      },
    ],
  };
};

interface IChartConfig {
  csv: string;
  title: string;
  chartType: string;
}
const chartConfigs: IChartConfig[] = [{ csv: unemploymentData, title: "Federal Unemployment", chartType: "line" }];

const useChartState = () => {
  const chartOptions = [
    { id: "bar", name: "Bar" },
    { id: "line", name: "Line" },
    { id: "pie", name: "Pie" },
    { id: "doughnut", name: "Doughnut" },
  ];
  const [title, setTitle] = useState(chartConfigs[0].title);
  const [activeChart, setActiveChart] = useState("line");
  const [data, setData] = useState<ChartData<"line", (number | Point | null)[], unknown>>();

  const changeChart = (chartConfig: IChartConfig) => {
    const jsonData = Papa.parse<UnemploymentRecord>(chartConfig.csv, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    }).data;
    const chartData = jsonToLineChartData(jsonData);
    setData(chartData);
    setActiveChart(chartConfig.chartType);
    setTitle(chartConfig.title);
  };

  useEffect(() => {
    changeChart(chartConfigs[0]);
  }, []);

  return { activeChart, setActiveChart, chartOptions, data, title, chartConfigs, changeChart };
};

export default useChartState;
