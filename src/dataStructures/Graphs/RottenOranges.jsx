import React from "react";

const RottenOranges = () => {
  const questions = [
    {
      question: "What is the Rotten Oranges problem?",
      options: [
        "A problem to find the shortest path between two vertices in a graph",
        "A problem to determine the connectivity of a graph",
        "A problem to simulate the spread of rotten oranges in a grid",
        "A problem to detect cycles in a graph",
      ],
    },
    {
      question:
        "What is the key idea behind solving the Rotten Oranges problem?",
      options: [
        "Using breadth-first search (BFS) algorithm",
        "Using depth-first search (DFS) algorithm",
        "Using dynamic programming",
        "Using greedy algorithm",
      ],
    },
    {
      question:
        "What data structure is commonly used to implement the solution for the Rotten Oranges problem?",
      options: ["Queue", "Stack", "Heap", "List"],
    },
    {
      question:
        "What is the time complexity of the solution for the Rotten Oranges problem?",
      options: ["O(N)", "O(log(N))", "O(N^2)", "O(N^3)"],
    },
    {
      question:
        "What is the initial step in solving the Rotten Oranges problem?",
      options: [
        "Finding the location of all rotten oranges",
        "Initializing all oranges as fresh",
        "Creating an empty queue",
        "None of the above",
      ],
    },
    {
      question:
        "How does the solution for the Rotten Oranges problem simulate the spread of rotten oranges?",
      options: [
        "By using the concept of levels in BFS",
        "By calculating the distance between oranges",
        "By applying a decay function to oranges",
        "By comparing the color of adjacent oranges",
      ],
    },
    {
      question:
        "What is the final result of the solution for the Rotten Oranges problem?",
      options: [
        "The minimum number of minutes needed to rot all oranges",
        "The maximum number of rotten oranges in the grid",
        "The average freshness level of oranges",
        "The total number of oranges in the grid",
      ],
    },
    {
      question:
        "Does the solution for the Rotten Oranges problem work on grids with obstacles?",
      options: [
        "No, it only works on obstacle-free grids",
        "Yes, it can handle grids with obstacles",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
  ];

  const answerMap = {
    0: "A problem to simulate the spread of rotten oranges in a grid",
    1: "Using breadth-first search (BFS) algorithm",
    2: "Queue",
    3: "O(N)",
    4: "Finding the location of all rotten oranges",
    5: "By using the concept of levels in BFS",
    6: "The minimum number of minutes needed to rot all oranges",
    7: "Yes, it can handle grids with obstacles",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Rotten Oranges
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

export default RottenOranges;
