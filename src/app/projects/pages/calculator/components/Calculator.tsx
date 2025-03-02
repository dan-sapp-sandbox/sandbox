"use client";
import { buttonConfig, buttonConfigType } from "../utils";
import { useCalculatorState } from "../hooks/useCalculatorState";

interface KeyPadBtnProps {
  config: buttonConfigType;
}

const Calculator = () => {
  const { total, numbers, operators, handleClick } = useCalculatorState();
  const KeyPadBtn = ({ config }: KeyPadBtnProps): JSX.Element => {
    return (
      <button
        className={`${
          config.isOperator ? "bg-gray-400" : "bg-gray-300"
        } col-span-3 m-1 py-3 rounded-md shadow-md hover:bg-gray-200`}
        onClick={() => handleClick(config)}
      >
        <span className="text-5xl">
          {config.display}
        </span>
      </button>
    );
  };
  //TODO: decimal functionality
  //TODO: undo functionality
  //TODO: negative numbers functionality
  //TODO: history functionality
  return (
    <div className="mx-auto max-w-2xl min-w-80 mt-8 px-2 md:px-6 pb-16 md:pb-0">
      <div className="bg-blue-400 mx-auto p-3">
        <div className="bg-green-200 mx-auto p-4 h-24 flex flex-col">
          <div className="self-end">
            {total}
          </div>
          <div className="self-end">
            {numbers.map((x, i) =>
              `${numbers[i] || ""} ${operators[i] || ""} `
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8">
          {buttonConfig.map((config) => (
            <KeyPadBtn key={config.display} config={config} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
