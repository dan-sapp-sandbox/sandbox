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
  return (
    <Card className="w-full max-w-400 min-h-100 transition-colors duration-300">
      <CardContent className="h-full w-full p-0 flex flex-row justify-between">
        <div className="relative h-150 w-225 flex flex-col justify-center items-center p-4">
          <div className="absolute top-4 right-4">
            <Select value={chartState.activeChart} onValueChange={(value) => chartState.setActiveChart(value)}>
              <SelectTrigger className="w-[200px]">
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
        <div className="flex flex-col gap-12 p-8">
          <span className="text-2xl font-bold">Charts</span>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Chart Features:</span>
            <div className="ml-6">
              <span className="font-bold">Different Chart Types: </span>
              <div className="ml-6">
                <div className="">Bar</div>
                <div className="">Line</div>
              </div>
            </div>
            <div className="ml-6">
              <span className="font-bold">Allow import/export json, csv: </span>
              <span className="">WIP</span>
            </div>
            <div className="ml-6">
              <span className="font-bold">chart.js: </span>
              <span className="">WIP</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Used in previous projects:</span>
            <span className="ml-6">- ooni chart at EDF</span>
            <span className="ml-6">- sales data at various</span>
          </div>
          <div className="flex flex-row items-center gap-16">
            <div
              onClick={handleOpenGithubLink}
              className="flex flex-row items-center gap-2 cursor-pointer text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-200"
            >
              <span>Code</span>
              <ExternalLink className="size-5" />
            </div>
            <div
              // onClick={handleOpenGithubLink}
              className="flex flex-row items-center gap-2 cursor-pointer text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-200"
            >
              <span>Open app in new tab</span>
              <ExternalLink className="size-5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartsSection;
