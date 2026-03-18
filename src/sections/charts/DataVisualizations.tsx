import useChartState from "./useChartState";
import LineChart from "./LineChart";
// import BarChart from "./BarChart";
// import PieChart from "./PieChart";
// import DoughnutChart from "./DoughnutChart";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const DataVisualizations = () => {
  const chartState = useChartState();

  return (
    <div
      className={cn(
        "rounded-2xl relative h-full w-full bg-(--demo-bg)",
        "flex flex-row justify-between gap-8 items-center",
      )}
    >
      <div className="w-60 p-2 flex flex-col gap-2">
        <div className="text-(--text)">Data Sets</div>
        <Separator />
        <div className="flex flex-col gap-2">
          {chartState.chartConfigs.map((config) => (
            <div
              key={config.title}
              className={cn(
                "text-(--text) cursor-pointer hover:text-blue-400",
                chartState.title === config.title ? "font-bold" : "",
              )}
              onClick={() => chartState.changeChart(config)}
            >
              {config.title}
            </div>
          ))}
        </div>
      </div>
      <div className="h-full flex-1">
        {/* {chartState.activeChart === "bar" && <BarChart data={chartState.data} />} */}
        {chartState.data && chartState.activeChart === "line" && (
          <LineChart data={chartState.data} title={chartState.title} />
        )}
        {/* {chartState.activeChart === "pie" && <PieChart data={chartState.data} />}
        {chartState.activeChart === "doughnut" && <DoughnutChart data={chartState.data} />} */}
      </div>
    </div>
  );
};

export default DataVisualizations;
