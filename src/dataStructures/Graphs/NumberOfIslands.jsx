import React from "react";

const NumberOfIslands = () => {
  const questions = [
    {
      question: "What is the 'Number of Islands' problem?",
      options: [
        "Counting the total number of islands in an ocean",
        "Counting the number of connected components in a graph",
        "Calculating the area of all the islands in a map",
        "Finding the largest island in a given region",
      ],
    },
    {
      question:
        "Which data structure is commonly used to solve the 'Number of Islands' problem?",
      options: ["Stack", "Queue", "Array", "Graph"],
    },
    {
      question:
        "What is the key idea behind the solution approach for the 'Number of Islands' problem?",
      options: [
        "Depth-First Search (DFS)",
        "Breadth-First Search (BFS)",
        "Dynamic Programming",
        "Sorting",
      ],
    },
    {
      question:
        "How does the solution approach for the 'Number of Islands' problem work?",
      options: [
        "Iteratively explores the ocean in a spiral pattern",
        "Assigns a unique identifier to each island and counts the distinct identifiers",
        "Traverses the grid and merges adjacent land cells into islands",
        "Calculates the area of each land cell and sums them up",
      ],
    },
    {
      question:
        "What is the time complexity of the solution approach for the 'Number of Islands' problem?",
      options: ["O(N)", "O(NlogN)", "O(M * N)", "O(N^2)"],
    },
    {
      question:
        "In the solution approach for the 'Number of Islands' problem, what does a 'visited' array or matrix represent?",
      options: [
        "The size of each island in the grid",
        "The number of adjacent land cells for each cell in the grid",
        "The state of each cell indicating whether it has been visited or not",
        "The total count of islands discovered so far",
      ],
    },
    {
      question:
        "Which of the following is NOT a typical step in implementing the solution approach for the 'Number of Islands' problem?",
      options: [
        "Initializing the count of islands to zero",
        "Marking the current cell as visited",
        "Storing the coordinates of each island in a separate data structure",
        "Exploring the neighboring cells of the current cell",
      ],
    },
    {
      question:
        "Which of the following approaches is commonly used to determine the connectivity of adjacent cells in the 'Number of Islands' problem?",
      options: [
        "Depth-First Search (DFS)",
        "Breadth-First Search (BFS)",
        "Dijkstra's Algorithm",
        "Binary Search",
      ],
    },
    {
      question:
        "What is the purpose of the 'visited' array or matrix in the solution approach for the 'Number of Islands' problem?",
      options: [
        "To track the order of visiting each cell in the grid",
        "To store the size of each island discovered so far",
        "To mark the cells as visited to avoid redundant exploration",
        "To determine the number of neighboring land cells for each cell",
      ],
    },
    {
      question:
        "How does the solution approach handle diagonal neighbors while exploring adjacent cells in the 'Number of Islands' problem?",
      options: [
        "Diagonal neighbors are not considered in the solution approach",
        "Diagonal neighbors are explored separately using a different algorithm",
        "Diagonal neighbors are treated the same as horizontal and vertical neighbors",
        "Diagonal neighbors are marked as visited but not further explored",
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Number of Islands
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
                  <span className="capitalize text-accent">{option}</span>
                </button>
              ))}
            </div>
            <span className="text-sm text-success">answer: </span>
            <span className="text-sm ">
              A linear ordering of the vertices of a directed acyclic graph
              (DAG)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberOfIslands;
