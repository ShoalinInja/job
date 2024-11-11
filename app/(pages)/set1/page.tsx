"use client";
// Next & React imports
import React from "react";
import { FileQuestion, LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation"; // Importing useRouter for navigation

function Page() {
  return (
    <div className="text-black dark:text-white relative overflow-hidden h-screen flex items-center justify-center">
      <div className="w-flex flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 space-x-0 md:space-x-5 px-5 md:px-20">
        {cards.map((card) => (
          <InformationCard
            key={card.title}
            title={card.title}
            path={card.path}
            description={card.description}
            Icon={card.Icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
function InformationCard({
  title,
  path,
  Icon,
  description,
}: {
  title: string;
  path: string;
  Icon: LucideIcon;
  description: string;
}) {
  const router = useRouter(); // Use useRouter from next/router

  const handleCardClick = () => {
    const pageUrl = `/set1/${path.replace(/\s+/g, "-").toLowerCase()}`;
    router.push(pageUrl); // Navigate to the generated URL
  };
  return (
    <div
      className="w-full flex flex-col justify-start items-start p-10 min-h-[320px] rounded-md bg-gradient-to-br from-white/20 to-white/[0.05] border border-neutral-500 backdrop-blur-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-neutral-300"
      onClick={handleCardClick} // Trigger navigation on click
    >
      <div className="bg-gradient-to-br from-ziverium-blue to-ziverium-blue/30 p-3 rounded-full border-2 border-neutral-500 mb-4">
        <Icon />
      </div>
      <h4 className="scroll-m-20 text-2xl text-neutral-300 font-medium mb-4">
        {title}
      </h4>
      <p className="text-lg font-light text-neutral-300">{description}</p>
    </div>
  );
}

const cards: Card[] = [
  {
    title: "Question 1: Find the Maximum Element",
    path: "quest01",
    description:
      "Write a program to find the maximum element in an array of integers. This problem is essential for understanding basic algorithmic concepts such as iteration and comparison.",
    Icon: FileQuestion,
  },
  {
    title: "Question 2: Two Sum",
    path: "quest02",
    description:
      "Solve the Two Sum problem where you are given an array of numbers and a target value. Your task is to find two numbers in the array that add up to the target value. This problem is a fundamental introduction to hashmaps and optimization techniques.",
    Icon: FileQuestion,
  },
  {
    title: "Question 3: Create a Login Page",
    path: "quest03",
    description:
      "Design and implement a login-based calculator where users sign up and select an operator during the signup process. This project involves dynamically adjusting calculator functionality based on user preferences.",
    Icon: FileQuestion,
  },
];
interface Card {
  title: string;
  path: string;
  description: string;
  Icon: LucideIcon;
}
