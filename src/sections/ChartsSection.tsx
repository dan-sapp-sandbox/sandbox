import { SectionWrapper } from "./SectionWrapper";

const ChartsSection = () => {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
};

export default ChartsSection;
