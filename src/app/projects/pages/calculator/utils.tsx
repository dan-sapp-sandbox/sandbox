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
  console.log(numbers);
  console.log(operators);
  return 1;
};
