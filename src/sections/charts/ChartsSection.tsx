import useChartState from "./useChartState";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Section from "../Section";

const ChartsSection = () => {
  const chartState = useChartState();
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/charts";
  const title = "Charts";
  const features = ["Different Chart Types: Line, etc", "Allow import/export json, csv: WIP", "chart.js: WIP"];
  const usedPreviously = [
    { where: "EarthDaily Federal", what: "OONI Chart" },
    { where: "Various", what: "Sales Data" },
  ];

  const Demo = () => (
    <div className="relative h-full w-full flex flex-col justify-center items-center p-2 md:p-4">
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
  );

  return (
    <Section
      title={title}
      Demo={Demo}
      features={features}
      usedPreviously={usedPreviously}
      githubUrl={githubURL}
      reversed={true}
    />
  );
};

export default ChartsSection;
