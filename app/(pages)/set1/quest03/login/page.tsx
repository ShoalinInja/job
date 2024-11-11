"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill out both email and password");
      return;
    }

    // Retrieve the selected operator from local storage
    const selectedOperator = localStorage.getItem("selectedOperator");

    if (!selectedOperator) {
      alert("No operator selected during signup.");
      return;
    }

    // Handle login logic here (if required)

    // Redirect to the calculator page with the selected operator
    router.push(`/set1/quest03/login/calculator?operator=${selectedOperator}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-gray-800 p-4">
      <h1 className="text-2xl mb-4">Login to the Calculator App</h1>
      <form
        onSubmit={handleLogin}
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
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
