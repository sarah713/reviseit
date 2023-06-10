import React from "react";

const HouseRobberII = () => {
  const questions = [
    {
      question: "What is the House Robber II problem?",
      options: [
        "A problem to find the maximum sum of non-adjacent elements in a circular array",
        "A problem to determine the connectivity of a graph",
        "A problem to simulate the robbery of houses in a neighborhood",
        "A problem to detect cycles in a graph",
      ],
    },
    {
      question:
        "What is the key idea behind solving the House Robber II problem?",
      options: [
        "Using dynamic programming and considering two scenarios",
        "Using a recursive backtracking algorithm",
        "Applying a greedy algorithm",
        "Sorting the houses in ascending order",
      ],
    },
    {
      question:
        "What is the time complexity of the solution for the House Robber II problem?",
      options: ["O(n)", "O(log(n))", "O(n^2)", "O(2^n)"],
    },
    {
      question:
        "What are the two scenarios considered in the solution for the House Robber II problem?",
      options: [
        "Robbing the first house or robbing the last house",
        "Robbing adjacent houses or robbing non-adjacent houses",
        "Robbing even-indexed houses or robbing odd-indexed houses",
        "Robbing houses in ascending order or robbing houses in descending order",
      ],
    },
    {
      question:
        "How does the solution for the House Robber II problem handle the circular nature of the array?",
      options: [
        "By applying the solution twice for different ranges",
        "By considering only the first half of the array",
        "By ignoring the circular aspect and solving it as a linear problem",
        "By rotating the array to a specific starting point",
      ],
    },
    {
      question:
        "What is the final result of the solution for the House Robber II problem?",
      options: [
        "The maximum sum of robbed houses",
        "The minimum sum of adjacent elements",
        "The total number of houses",
        "The number of non-adjacent houses robbed",
      ],
    },
    {
      question:
        "Does the solution for the House Robber II problem work for arrays with negative values?",
      options: [
        "Yes, it handles both positive and negative values",
        "No, it only works for arrays with positive values",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
  ];
  const answerMap = {
    0: "A problem to find the maximum sum of non-adjacent elements in a circular array",
    1: "Using dynamic programming and considering two scenarios",
    2: "O(n)",
    3: "Robbing the first house or robbing the last house",
    4: "By applying the solution twice for different ranges",
    5: "The maximum sum of robbed houses",
    6: "Yes, it handles both positive and negative values",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        House Robber II
      </h1>
      <div className="display block">
        <h3 className="text-accent font-bold">Approach</h3>
        <span className="block">
          Handle the edge case: If there is only one house in the array, return
          the amount of money in that house as the maximum amount that can be
          robbed.
        </span>
        <span className="block">
          Divide the problem into two cases: robbing all houses except the last
          one, or robbing all houses except the first one
        </span>
        <span className="block">
          For each case, use a dynamic programming approach to calculate the
          maximum amount of money that can be robbed.
        </span>
      </div>
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

export default HouseRobberII;
