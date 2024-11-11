"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [operator, setOperator] = useState("");
  const [error, setError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !password || !operator) {
      setError("Please fill out all fields");
      return;
    }

    // Save the operator in local storage
    localStorage.setItem("selectedOperator", operator);

    // Handle the signup logic here
    console.log("User Signed Up", { email, name, password, operator });

    // Mark as signed up
    setIsSignedUp(true);

    // Clear form after successful signup
    setEmail("");
    setName("");
    setPassword("");
    setOperator("");
    setError("");
  };

  const handleLoginClick = () => {
    router.push("/set1/quest03/login"); // Navigate to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-gray-800 p-4">
      <h1 className="text-2xl mb-4">Signup for the Calculator App</h1>
      {isSignedUp ? (
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-4">Signup Successful!</h2>
          <button
            onClick={handleLoginClick}
            className="p-2 bg-green-500 text-white rounded-md"
          >
            Login Now
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md space-y-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded-md bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded-md bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded-md bg-gray-700 text-white"
          />
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                value="add"
                checked={operator === "add"}
                onChange={() => setOperator("add")}
                className="mr-2"
              />
              Add
            </label>
            <label>
              <input
                type="radio"
                value="sub"
                checked={operator === "sub"}
                onChange={() => setOperator("sub")}
                className="mr-2"
              />
              Sub
            </label>
            <label>
              <input
                type="radio"
                value="mul"
                checked={operator === "mul"}
                onChange={() => setOperator("mul")}
                className="mr-2"
              />
              Mul
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md mt-4"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}

export default Page;
