import useChartState from "./useChartState";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DataVisualizations = () => {
  const chartState = useChartState();

  return (
    <>
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
    </>
  );
};

export default DataVisualizations;
