import { useState, useEffect } from "react";
import { useTheme } from "@/components/themeToggle/useTheme";
import { Bar } from "react-chartjs-2";
import type { ChartData, Point } from "chart.js";
import { lightOptions, darkOptions } from "./utils";

const barData: ChartData<"bar"> = {
  labels: [
    "Jan 2023",
    "Feb 2023",
    "Mar 2023",
    "Apr 2023",
    "May 2023",
    "Jun 2023",
    "Jul 2023",
    "Aug 2023",
    "Sep 2023",
    "Oct 2023",
    "Nov 2023",
    "Dec 2023",
  ],
  datasets: [
    {
      label: "Inflation (%)",
      data: [6.4, 6.0, 5.0, 4.9, 4.7, 4.8, 4.3, 3.9, 3.7, 3.5, 3.4, 3.2],
      backgroundColor: "#ef4444",
    },
    {
      label: "Unemployment (%)",
      data: [3.7, 3.6, 3.6, 3.5, 3.7, 3.6, 3.5, 3.5, 3.7, 3.8, 3.8, 3.7],
      backgroundColor: "#3b82f6",
    },
  ],
};

export const BarChart = ({
  // data,
  title,
}: {
  data: ChartData<"bar", (number | Point | null)[], unknown>;
  title: string;
}) => {
  const { theme } = useTheme();
  const [activeOptions, setActiveOptions] = useState(theme === "dark" ? darkOptions : lightOptions);
  useEffect(() => {
    setActiveOptions(theme === "dark" ? darkOptions : lightOptions);
  }, [theme]);
  activeOptions.plugins.title.text = title;
  return <Bar data={barData} options={activeOptions} />;
};

export default BarChart;
