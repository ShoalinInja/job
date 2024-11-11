"use client"; // Mark this file as a Client Component

import { useState } from "react";

function Page() {
  const [arrayInput, setArrayInput] = useState<string>(""); // State to hold the input
  const [arrayValues, setArrayValues] = useState<number[]>([]); // State to hold the parsed array
  const [maxValue, setMaxValue] = useState<number | null>(null); // State for the maximum value
  const [showCode, setShowCode] = useState(false); // State to toggle visibility of code/message

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrayInput(event.target.value); // Update the input state
  };
  // Function to handle button click
  const handleButtonClick = () => {
    setShowCode((prevState) => !prevState); // Toggle the state
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

  const handleMaxValue = () => {
    // Calculate and display the maximum value from the array
    if (arrayValues.length > 0) {
      const max = Math.max(...arrayValues);
      setMaxValue(max); // Update the max value state
    } else {
      alert("Array is empty");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white">
      <h1 className="text-2xl mb-4">
        Write a program to find the maximum element in an array of integers.
      </h1>
      <h2 className="text-2xl mb-4">
        {showCode && (
          <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-100">
            <img
              src="/images/findmax.png"
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
        <button
          onClick={handleSubmit}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
        <button
          onClick={handleMaxValue}
          className="ml-2 p-2 bg-green-500 text-white rounded-md"
        >
          Find Max
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
      {maxValue !== null && (
        <div className="mt-4 text-xl">
          <h3 className="text-white">Maximum Value: {maxValue}</h3>
        </div>
      )}
    </div>
  );
}

export default Page;
