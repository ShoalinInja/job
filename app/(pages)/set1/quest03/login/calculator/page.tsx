"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

function CalculatorPage() {
  const searchParams = useSearchParams();
  const [operator, setOperator] = useState<string | null>(null);
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [result, setResult] = useState<number | string>("");

  useEffect(() => {
    const operatorFromUrl = searchParams.get("operator"); // Get operator from URL
    if (operatorFromUrl) {
      setOperator(operatorFromUrl);
    }
  }, [searchParams]);

  const handleCalculation = () => {
    if (operator && num1 !== "" && num2 !== "") {
      const n1 = parseFloat(num1 as string);
      const n2 = parseFloat(num2 as string);

      if (isNaN(n1) || isNaN(n2)) {
        setResult("Please enter valid numbers");
        return;
      }

      switch (operator) {
        case "add":
          setResult(n1 + n2);
          break;
        case "sub":
          setResult(n1 - n2);
          break;
        case "mul":
          setResult(n1 * n2);
          break;
        default:
          setResult("Invalid operator");
      }
    } else {
      setResult("Please fill in both numbers");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-gray-800 p-4">
      <h1 className="text-2xl mb-4">Calculator</h1>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="p-2 border rounded-md bg-gray-700 text-white"
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="ml-2 p-2 border rounded-md bg-gray-700 text-white"
        />
        <button
          onClick={handleCalculation}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Calculate
        </button>
      </div>
      {result && <h2 className="text-xl">{`Result: ${result}`}</h2>}
    </div>
  );
}

export default CalculatorPage;
