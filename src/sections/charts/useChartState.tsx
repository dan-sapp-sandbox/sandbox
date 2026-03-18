import "./chartSetup";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import type { ChartData, Point } from "chart.js";
import unemploymentData from "./UNRATE.csv?raw";
import housingData from "./MEHOINUSA672N.csv?raw";
import salaryData from "./ASPUS.csv?raw";

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

interface UnemploymentRecord {
  observation_date: string;
  UNRATE: number;
}
const convertUnemploymentData = (): ChartData<"line"> => {
  const jsonData = Papa.parse<UnemploymentRecord>(unemploymentData, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  }).data;
  const labels = jsonData.map((row) => formatDate(row.observation_date));
  return {
    labels,
    datasets: [
      {
        label: "Unemployment Rate (%)",
        data: jsonData.map((row) => row.UNRATE),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        fill: true,
        tension: 0.2, // smooth line
        pointRadius: 1,
      },
    ],
  };
};

interface HousingRecord {
  observation_date: string;
  MEHOINUSA672N: number;
}
const convertHousingData = (): ChartData<"line"> => {
  const jsonData = Papa.parse<HousingRecord>(housingData, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  }).data;
  const labels = jsonData.map((row) => formatDate(row.observation_date));
  return {
    labels,
    datasets: [
      {
        label: "Average House Sales Price ($)",
        data: jsonData.map((row) => row.MEHOINUSA672N),
        borderColor: "#3ba836",
        backgroundColor: "rgba(59, 168, 54, 0.3)",
        fill: true,
        tension: 0.2, // smooth line
        pointRadius: 1,
      },
    ],
  };
};

interface SalaryRecord {
  observation_date: string;
  ASPUS: number;
}
const convertSalaryData = (): ChartData<"line"> => {
  const jsonData = Papa.parse<SalaryRecord>(salaryData, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  }).data;
  const labels = jsonData.map((row) => formatDate(row.observation_date));
  return {
    labels,
    datasets: [
      {
        label: "Median Household Income ($)",
        data: jsonData.map((row) => row.ASPUS),
        borderColor: "#8437a6",
        backgroundColor: "rgba(132, 55, 166, 0.3)",
        fill: true,
        tension: 0.2, // smooth line
        pointRadius: 1,
      },
    ],
  };
};

interface IChartConfig {
  title: string;
  chartType: string;
  prepUtil: () => ChartData<any>;
}
const chartConfigs: IChartConfig[] = [
  { title: "Federal Unemployment", chartType: "line", prepUtil: convertUnemploymentData },
  { title: "Average House Sales Price", chartType: "line", prepUtil: convertHousingData },
  { title: "Median Household Income", chartType: "line", prepUtil: convertSalaryData },
];

const useChartState = () => {
  //TODO: enable choosing multiple data sets at once
  //TODO: enable changing to relevant chart types
  //TODO: enable show/hide legend

  const [title, setTitle] = useState(chartConfigs[0].title);
  const [activeChart, setActiveChart] = useState("line");
  const [data, setData] = useState<ChartData<"line", (number | Point | null)[], unknown>>();

  const changeChart = (chartConfig: IChartConfig) => {
    const chartData = chartConfig.prepUtil();
    setData(chartData);
    setActiveChart(chartConfig.chartType);
    setTitle(chartConfig.title);
  };

  useEffect(() => {
    changeChart(chartConfigs[0]);
  }, []);

  return { activeChart, setActiveChart, data, title, chartConfigs, changeChart };
};

export default useChartState;
