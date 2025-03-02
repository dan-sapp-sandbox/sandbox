"use client";
import { useState } from "react";
import { buttonConfig, buttonConfigType, evaluate } from "../utils";

function Calculator() {
  const [total, setTotal] = useState<number>(0);
  const [operators, setOperators] = useState<string[]>([]);
  const [numbers, setNumbers] = useState<string[]>([]);
  //TODO: decimal functionality
  //TODO: undo functionality
  //TODO: negative numbers functionality
  //TODO: history functionality

  const handleClick = (config: buttonConfigType) => {
    if (config.isClear) {
      setTotal(0);
      setNumbers([]);
      setOperators([]);
    } else if (config.isEquals) {
      const result: number = evaluate(numbers, operators);
      setTotal(result);
      setNumbers([]);
      setOperators([]);
    } else if (config.isOperator) {
      if (numbers.length !== operators.length) {
        setOperators(operators.concat(config.display));
      }
    } else {
      if (numbers.length === operators.length) {
        setNumbers(numbers.concat(config.display));
      } else {
        const newNumbers = [...numbers];
        const lastEntry = numbers[numbers.length - 1];
        newNumbers[numbers.length - 1] = lastEntry + config.display;
        setNumbers(newNumbers);
      }
    }
  };

  interface KeyPadBtnType {
    config: buttonConfigType;
  }
  const KeyPadBtn = ({ config }: KeyPadBtnType): JSX.Element => {
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
  return (
    <div className="mx-auto max-w-2xl min-w-80 mt-8 px-2 md:px-6 pb-16 md:pb-0">
      <div className="bg-blue-400 mx-auto p-3">
        <div className="bg-green-200 mx-auto p-4 h-24 flex flex-col">
          <div className="self-end">
            {total.toFixed(2)}
          </div>
          <div className="self-end">
            {numbers.map((x, i) =>
              `${numbers[i] || ""} ${operators[i] || ""} `
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8">
          {buttonConfig.map((config) => (
            <KeyPadBtn key={config.display} config={config}>
            </KeyPadBtn>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
