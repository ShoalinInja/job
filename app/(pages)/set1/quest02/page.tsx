"use client";

import { useState } from "react";

function Page() {
  const [arrayInput, setArrayInput] = useState<string>("");
  const [targetInput, setTargetInput] = useState<string>("");
  const [arrayValues, setArrayValues] = useState<number[]>([]);
  const [targetValue, setTargetValue] = useState<number | null>(null);
  const [result, setResult] = useState<string>("");
  const [showCode, setShowCode] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrayInput(event.target.value);
  };

  const handleTargetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetInput(event.target.value);
  };

  const handleSubmit = () => {
    try {
      const parsedArray = JSON.parse(arrayInput);
      if (Array.isArray(parsedArray)) {
        setArrayValues(parsedArray.map((num: string) => Number(num)));
      } else {
        alert("Please enter a valid array");
      }
    } catch (error) {
      alert("Invalid array format");
    }
  };

  const handleFindTarget = () => {
    const target = Number(targetInput);
    if (isNaN(target)) {
      alert("Please enter a valid target value.");
      return;
    }
    setTargetValue(target);
    let found = false;
    for (let i = 0; i < arrayValues.length; i++) {
      for (let j = i + 1; j < arrayValues.length; j++) {
        if (arrayValues[i] + arrayValues[j] === target) {
          setResult(
            `Target found: Indexes ${i} and ${j}, Values: ${arrayValues[i]} and ${arrayValues[j]}`
          );
          found = true;
          break;
        }
      }
      if (found) break;
    }
    if (!found) {
      setResult("No two numbers found that add up to the target.");
    }
  };

  const handleButtonClick = () => {
    setShowCode((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white">
      <h1 className="text-2xl mb-4">
        Solve the Two Sum problem where you are given an array of numbers and a
        target value. Your task is to find two numbers in the array that add up
        to the target value.
      </h1>
      <h2 className="text-2xl mb-4">
        {showCode && (
          <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-100">
            <img
              src="/images/findtarget.png"
              alt="Example"
              className="max-w-[600px] max-h-[800px] w-auto h-auto rounded-md"
            />
          </div>
        )}
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={arrayInput}
          onChange={handleInputChange}
          placeholder="Enter array like [1, 2, 3]"
          className="p-2 border rounded-md bg-gray-800 text-white"
        />
        <input
          type="text"
          value={targetInput}
          onChange={handleTargetChange}
          placeholder="Enter target value"
          className="ml-2 p-2 border rounded-md bg-gray-800 text-white"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
        <button
          onClick={handleFindTarget}
          className="ml-2 p-2 bg-green-500 text-white rounded-md"
        >
          Find Target
        </button>
        <button
          onClick={handleButtonClick}
          className="ml-2 p-2 bg-green-500 text-white rounded-md"
        >
          Show Code
        </button>
      </div>
      <div>
        {arrayValues.length > 0 && (
          <div>
            <h2>Array Values:</h2>
            <ul className="list-disc text-white">
              {arrayValues.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {result && (
        <div className="mt-4 text-xl">
          <h3 className="text-white">{result}</h3>
        </div>
      )}
    </div>
  );
}

export default Page;
