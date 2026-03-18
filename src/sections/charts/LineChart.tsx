import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import type { ChartData, Point, ChartOptions } from "chart.js";
import { useTheme } from "@/components/themeToggle/useTheme";
import { lightOptions, darkOptions } from "./utils";

const LineChart = ({ data, title }: { data: ChartData<"line", (number | Point | null)[], unknown>; title: string }) => {
  const { theme } = useTheme();
  const activeOptions: ChartOptions<"line"> = {
    ...(theme === "dark" ? darkOptions : lightOptions),
    plugins: {
      ...(theme === "dark" ? darkOptions.plugins : lightOptions.plugins),
      title: {
        ...(theme === "dark" ? darkOptions.plugins.title : lightOptions.plugins.title),
        text: title,
      },
    },
  };
  return <Line data={data} options={activeOptions} />;
};

export default LineChart;
