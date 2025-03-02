"use client";
import { useState } from "react";
import { buttonConfigType, evaluate } from "../utils";

export const useCalculatorState = () => {
  const [total, setTotal] = useState<number>(0);
  const [operators, setOperators] = useState<string[]>([]);
  const [numbers, setNumbers] = useState<string[]>([]);
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
        setNumbers((prevNumbers) => {
          const newNumbers = [...prevNumbers];
          newNumbers[prevNumbers.length - 1] += config.display;
          return newNumbers;
        });
      }
    }
  };

  return { total, numbers, operators, handleClick };
};
