export interface buttonConfigType {
  display: string;
  isOperator?: boolean;
  isClear?: boolean;
  isEquals?: boolean;
}

export const buttonConfig: buttonConfigType[] = [
  { display: "7" },
  { display: "8" },
  { display: "9" },
  { display: "/", isOperator: true },
  { display: "4" },
  { display: "5" },
  { display: "6" },
  { display: "x", isOperator: true },
  { display: "1" },
  { display: "2" },
  { display: "3" },
  { display: "-", isOperator: true },
  { display: "C", isClear: true },
  { display: "0" },
  { display: "=", isEquals: true },
  { display: "+", isOperator: true },
];

export const evaluate = (numbers: string[], operators: string[]): number => {
  //TODO: create error state for missing operand
  if (numbers.length === operators.length) return 0;

  const nums = numbers.map(Number);
  const orderOfOperations = ["x", "/", "+", "-"];

  const applyOperation = (
    index: number,
    operation: (a: number, b: number) => number,
  ) => {
    nums[index] = operation(nums[index], nums[index + 1]);
    nums.splice(index + 1, 1);
    operators.splice(index, 1);
  };

  for (const op of orderOfOperations) {
    let index;
    while ((index = operators.indexOf(op)) !== -1) {
      switch (op) {
        case "x":
          applyOperation(index, (a, b) => a * b);
          break;
        case "/":
          applyOperation(index, (a, b) => a / b);
          break;
        case "+":
          applyOperation(index, (a, b) => a + b);
          break;
        case "-":
          applyOperation(index, (a, b) => a - b);
          break;
      }
    }
  }

  return nums[0];
};
