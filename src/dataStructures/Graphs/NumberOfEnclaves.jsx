import React from "react";

const NumberOfEnclaves = () => {
  const questions = [
    {
      question: "What is the 'Number of Enclaves' problem?",
      options: [
        "A problem to count the number of connected components in a graph",
        "A problem to determine the number of enclosed regions in a binary matrix",
        "A problem to find the number of edges in a directed graph",
        "A problem to calculate the total number of vertices in a graph",
      ],
    },
    {
      question:
        "What is the key idea behind solving the 'Number of Enclaves' problem?",
      options: [
        "Performing a graph traversal and marking visited nodes",
        "Applying a sorting algorithm on the graph nodes",
        "Using a backtracking algorithm to explore all possible paths",
        "Converting the problem into a matrix manipulation task",
      ],
    },
    {
      question:
        "What is the time complexity of the solution for the 'Number of Enclaves' problem?",
      options: ["O(N)", "O(log(N))", "O(N^2)", "O(2^N)"],
    },
    {
      question:
        "What are the main steps involved in solving the 'Number of Enclaves' problem?",
      options: [
        "Performing a DFS or BFS traversal and checking for boundary cells",
        "Sorting the nodes based on their values",
        "Using a union-find algorithm to merge connected components",
        "Applying a divide and conquer technique on the graph",
      ],
    },
    {
      question:
        "How are the boundary cells handled in the 'Number of Enclaves' problem?",
      options: [
        "They are marked as visited and excluded from the count",
        "They are included in the count and merged with other components",
        "They are removed from the graph",
        "They are marked for future processing",
      ],
    },
    {
      question:
        "What is the final result of the solution for the 'Number of Enclaves' problem?",
      options: [
        "The count of enclaves, which are enclosed regions in the graph",
        "The sum of all node values in the graph",
        "The total number of edges in the graph",
        "The maximum distance between any two nodes in the graph",
      ],
    },
    {
      question:
        "Does the solution for the 'Number of Enclaves' problem modify the original graph?",
      options: [
        "Yes, some modifications are made during the solution",
        "No, the original graph remains unchanged",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
  ];
  const answerMap = {
    0: "A problem to determine the number of enclosed regions in a binary matrix",
    1: "Performing a graph traversal and marking visited nodes",
    2: "O(N)",
    3: "Performing a DFS or BFS traversal and checking for boundary cells",
    4: "They are marked as visited and excluded from the count",
    5: "The count of enclaves, which are enclosed regions in the graph",
    6: "Yes, some modifications are made during the solution",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Number Of Enclaves
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

export default NumberOfEnclaves;
