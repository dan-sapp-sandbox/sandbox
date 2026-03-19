import useChartState from "./useChartState";
import LineChart from "./LineChart";
// import BarChart from "./BarChart";
// import PieChart from "./PieChart";
// import DoughnutChart from "./DoughnutChart";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import type { Theme } from "@/components/themeToggle/useTheme";

const DataVisualizations = ({ theme }: { theme: Theme }) => {
  const chartState = useChartState();
  return (
    <div
      className={cn(
        "rounded-2xl relative h-full w-full bg-(--demo-bg)",
        "flex flex-row justify-between gap-2 items-center",
      )}
    >
      <div className="w-60 p-2 flex flex-col gap-2">
        <div className="text-(--text)">Datasets</div>
        <Separator />
        <div className="flex flex-col gap-2">
          {chartState.chartConfigs.map((config) => {
            const isActive = chartState.activeCharts.some((title) => title === config.title);
            const textColor = isActive ? config.color : theme === "dark" ? "white" : "black";
            return (
              <div
                key={config.title}
                style={{ color: textColor, fontWeight: isActive ? "bold" : "normal" }}
                className="text-sm cursor-pointer hover:underline"
                onClick={() => chartState.changeChart(config)}
              >
                {config.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-full flex-1 mr-4">
        {chartState.data && (
          <LineChart data={chartState.data} title={chartState.title} dataType={chartState.dataType} />
        )}
      </div>
    </div>
  );
};

export default DataVisualizations;
