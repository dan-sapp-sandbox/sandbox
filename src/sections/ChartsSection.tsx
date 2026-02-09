import { Card } from "@/components/Card";

const ChartsSection = () => {
  return (
    <Card>
      <div className="bg-emerald-900 h-180 w-320 flex flex-col justify-center items-center">
        <span className="text-3xl">Charts here</span>
      </div>
      <div className="flex flex-col items-end gap-12">
        <span className="text-2xl font-bold">Charts</span>
        <span>chart.js plotly.js</span>
        <span>Allow import/export json, csv</span>
        <span>Toggle between different charts</span>
        <span>Link to code</span>
      </div>
    </Card>
  );
};

export default ChartsSection;
