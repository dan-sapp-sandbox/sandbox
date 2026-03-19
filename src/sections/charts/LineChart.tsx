import { Line } from "react-chartjs-2";
import type { ChartData, Point, ChartOptions } from "chart.js";
import { useTheme } from "@/components/themeToggle/useTheme";
import { lightOptions, darkOptions } from "./utils";

const LineChart = ({
  data,
  title,
  dataType,
}: {
  data: ChartData<"line", (number | Point | null)[], unknown>;
  title: string;
  dataType: string;
}) => {
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
    scales: {
      ...(theme === "dark" ? darkOptions.scales : lightOptions.scales),
      y: {
        ...(theme === "dark" ? darkOptions.scales.y : lightOptions.scales.y),
        ticks: {
          ...(theme === "dark" ? darkOptions.scales.y.ticks : lightOptions.scales.y.ticks),
          callback: (value: string | number) => {
            if (dataType === "currency") {
              const isBig = Number(value) > 1000;
              return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: isBig ? 0 : 2,
              }).format(Number(value));
            } else if (dataType === "percentage") {
              return `${value}%`;
            } else {
              return value;
            }
          },
        },
      },
    },
  };
  return <Line data={data} options={activeOptions} />;
};

export default LineChart;
