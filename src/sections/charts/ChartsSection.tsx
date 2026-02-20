import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useChartState from "./useChartState";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ChartsSection = () => {
  const chartState = useChartState();
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/charts";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 transition-colors duration-300">
      <CardContent className="h-full w-full p-0 flex flex-col-reverse md:flex-row justify-between">
        <div className="relative h-65 md:h-150 w-full md:w-225 flex flex-col justify-center items-center p-2 md:p-4">
          <div className="absolute top-4 right-4">
            <Select value={chartState.activeChart} onValueChange={(value) => chartState.setActiveChart(value)}>
              <SelectTrigger className="w-25 md:w-50">
                <SelectValue placeholder="Chart Options" />
              </SelectTrigger>
              <SelectContent>
                {chartState.chartOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {chartState.activeChart === "bar" && <BarChart />}
          {chartState.activeChart === "line" && <LineChart />}
          {chartState.activeChart === "pie" && <PieChart />}
          {chartState.activeChart === "doughnut" && <DoughnutChart />}
        </div>
        <div className="flex flex-col gap-3 md:gap-12 p-3 md:p-8">
          <span className="text-lg md:text-2xl font-bold md-2 md:mb-4">Charts</span>
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-lg font-bold">Chart Features:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Different Chart Types: </span>
              <div className="ml-2 md:ml-6">
                <div className="text-sm md:text-base">Bar</div>
                <div className="text-sm md:text-base">Line</div>
              </div>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Allow import/export json, csv: </span>
              <span className="text-sm md:text-base">WIP</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">chart.js: </span>
              <span className="text-sm md:text-base">WIP</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-sm font-bold">Used in previous projects:</span>
            <span className="ml-2 md:ml-6 text-sm md:text-base">- ooni chart at EDF</span>
            <span className="ml-2 md:ml-6 text-sm md:text-base">- sales data at various</span>
          </div>
          <div className="flex flex-row items-center gap-16">
            <div onClick={handleOpenGithubLink} className={linkStyles}>
              <span className="text-xs md:text-sm">Code</span>
              <ExternalLink className="size-3 md:size-5" />
            </div>
            <div
              // onClick={handleOpenGithubLink}
              className={linkStyles}
            >
              <span className="text-xs md:text-sm">Open app in new tab</span>
              <ExternalLink className="size-3 md:size-5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartsSection;
