import React from "react";

const NumberOfDistinctIslands = () => {
  const questions = [
    {
      question:
        "What is the purpose of the numOfDistinct method in the NumberOfDistinctIslands class?",
      options: [
        "Count the total number of distinct islands in the grid",
        "Calculate the area of all the islands in the grid",
        "Determine the largest island in the grid",
        "Find the number of connected components in the grid",
      ],
    },
    {
      question: "Why do we store the shape of each island in a HashSet?",
      options: [
        "To ensure uniqueness and avoid counting duplicate island shapes",
        "To easily retrieve and manipulate island shapes",
        "To speed up the search for distinct island shapes",
        "To save memory by eliminating redundant shape information",
      ],
    },
    {
      question:
        "What is the significance of subtracting the baseRow and baseCol from the row and col coordinates in the toString method?",
      options: [
        "To normalize the coordinates relative to the base island's position",
        "To calculate the area of each island shape",
        "To convert the coordinates into a string representation",
        "To identify the shape's position within the grid",
      ],
    },
    {
      question:
        "Why do we check if a cell has already been visited in the visited array before exploring it in the dfs method?",
      options: [
        "To prevent infinite loops and avoid redundant computations",
        "To speed up the search for distinct island shapes",
        "To ensure that we only consider unvisited cells as part of an island",
        "To optimize memory usage by skipping unnecessary checks",
      ],
    },
    {
      question:
        "What condition is checked to terminate the recursion in the dfs method?",
      options: [
        "If the current cell is out of bounds or marked as visited",
        "If the current cell is not part of an island",
        "If the current cell is adjacent to another island",
        "If the current cell is the base cell of the island shape",
      ],
    },
    {
      question:
        "Why are the four recursive calls made in the dfs method to explore the neighboring cells?",
      options: [
        "To recursively visit all adjacent cells of the current cell",
        "To calculate the area of each island shape",
        "To check if there are any adjacent islands",
        "To determine the boundary of the island shape",
      ],
    },
    {
      question:
        "Which data structure is used to store the distinct island shapes in the numOfDistinct method?",
      options: ["HashSet", "ArrayList", "Queue", "Stack"],
    },
    {
      question:
        "How is the visited array initialized in the numOfDistinct method?",
      options: [
        "All elements are set to 0",
        "All elements are set to 1",
        "It depends on the values in the grid",
        "It is not initialized explicitly",
      ],
    },
    {
      question:
        "What is the significance of the condition visited[i][j] == 0 && grid[i][j] == 1 in the nested loops of the numOfDistinct method?",
      options: [
        "It checks if a cell has already been visited",
        "It checks if a cell is part of an island",
        "It checks if a cell is adjacent to another island",
        "It checks if a cell is part of the distinct island shape",
      ],
    },
    {
      question:
        "What is the purpose of the dfs method in the NumberOfDistinctIslands class?",
      options: [
        "Count the number of distinct islands in the grid",
        "Explore the grid and merge adjacent land cells into islands",
        "Calculate the area of each island in the grid",
        "Find the largest island in the grid",
      ],
    },
    {
      question:
        "What are the parameters passed to the dfs method in the numOfDistinct method?",
      options: [
        "row, col, visited, shape, grid, baseRow, baseCol",
        "row, col, visited, shape, baseRow, baseCol",
        "row, col, shape, grid, baseRow, baseCol",
        "row, col, visited, shape, grid",
      ],
    },
    {
      question:
        "What condition is checked in the dfs method to terminate the recursion?",
      options: [
        "row < 0 || col < 0 || row >= m || col >= n",
        "visited[row][col] == 1",
        "grid[row][col] == 0",
        "row == baseRow && col == baseCol",
      ],
    },
    {
      question:
        "What does the toString method do in the NumberOfDistinctIslands class?",
      options: [
        "Converts the shape ArrayList into a String representation",
        "Converts the row and column indices into a single String",
        "Converts the visited array into a String representation",
        "Converts the grid array into a String representation",
      ],
    },
    {
      question:
        "How are the coordinates of each island shape added to the shape ArrayList in the dfs method?",
      options: [
        "Using the add method",
        "Using the put method",
        "Using the append method",
        "Using the push method",
      ],
    },
    {
      question:
        "What are the four recursive calls made in the dfs method to explore the neighboring cells?",
      options: [
        "dfs(row + 1, col), dfs(row - 1, col), dfs(row, col - 1), dfs(row, col + 1)",
        "dfs(row - 1, col), dfs(row + 1, col), dfs(row, col - 1), dfs(row, col + 1)",
        "dfs(row - 1, col), dfs(row + 1, col), dfs(row, col + 1), dfs(row, col - 1)",
        "dfs(row + 1, col), dfs(row - 1, col), dfs(row, col + 1), dfs(row, col - 1)",
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold mb-4 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-900">
        Number of Distinct Islands
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

export default NumberOfDistinctIslands;
