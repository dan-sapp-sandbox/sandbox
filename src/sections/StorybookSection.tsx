import { Card } from "@/components/Card";

const StorybookSection = () => {
  return (
    <Card>
      <div className="flex flex-col gap-12">
        <span className="text-2xl font-bold">Component Library</span>
        <span>Storybook</span>
        <span>Explain features</span>
        <span>Explain features</span>
        <span>Link to code</span>
      </div>
      <div className="bg-yellow-700 h-180 w-320 flex flex-col justify-center items-center">
        <span className="text-3xl">Storybook here</span>
      </div>
    </Card>
  );
};

export default StorybookSection;
