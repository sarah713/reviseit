import React from "react";

const MaxSumNonAdjacent = () => {
  const questions = [
    {
      question: "What is the problem we are trying to solve?",
      options: [
        "Finding the maximum sum of adjacent elements",
        "Finding the minimum sum of non-adjacent elements",
        "Finding the maximum sum of non-adjacent elements",
        "Finding the longest increasing subsequence",
      ],
    },
    {
      question:
        "What is the key idea behind solving this problem using Dynamic Programming?",
      options: [
        "Breaking down the problem into smaller subproblems and reusing their solutions",
        "Applying a recursive backtracking algorithm",
        "Using a greedy algorithm",
        "Sorting the elements in ascending order",
      ],
    },
    {
      question:
        "What is the time complexity of the Dynamic Programming solution?",
      options: ["O(n)", "O(log(n))", "O(n^2)", "O(2^n)"],
    },
    {
      question: "What is the initial step in the Dynamic Programming solution?",
      options: [
        "Initializing the base cases",
        "Iterating over the array",
        "Calculating the sum of adjacent elements",
        "None of the above",
      ],
    },
    {
      question:
        "How does the Dynamic Programming solution ensure that adjacent elements are not included in the sum?",
      options: [
        "By keeping track of the maximum sum at each position",
        "By excluding every other element",
        "By sorting the elements",
        "By comparing adjacent elements",
      ],
    },
    {
      question: "What is the final result of the Dynamic Programming solution?",
      options: [
        "The maximum sum of non-adjacent elements",
        "The minimum sum of adjacent elements",
        "The total sum of all elements",
        "The number of non-adjacent elements",
      ],
    },
    {
      question:
        "Does the Dynamic Programming solution work for arrays with negative elements?",
      options: [
        "Yes, it handles both positive and negative elements",
        "No, it only works for arrays with positive elements",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
  ];
  const answerMap = {
    0: "Finding the maximum sum of non-adjacent elements",
    1: "Breaking down the problem into smaller subproblems and reusing their solutions",
    2: "O(n)",
    3: "Initializing the base cases",
    4: "By keeping track of the maximum sum at each position",
    5: "The maximum sum of non-adjacent elements",
    6: "Yes, it handles both positive and negative elements",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Max Sum of Non Adjacent elements
      </h1>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index}>
            <p className="mb-2">
              {index + 1}. {question.question}
            </p>
            <div className="flex flex-col w-max justify-start ">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className="btn mb-3 justify-start "
                  disabled
                >
                  <span className="capitalize text-primary">{option}</span>
                </button>
              ))}
            </div>
            <span className="text-sm text-success">answer: </span>
            <span className="text-sm ">{answerMap[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaxSumNonAdjacent;
