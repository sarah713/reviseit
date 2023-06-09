import React from "react";

const FloodFill = () => {
  const questions = [
    {
      question: "What is the purpose of the Flood Fill algorithm?",
      options: [
        "To determine the connectivity of a graph",
        "To perform image segmentation",
        "To find the shortest path between two vertices in a graph",
        "To detect cycles in a graph",
      ],
    },
    {
      question:
        "In which type of problems is the Flood Fill algorithm commonly used?",
      options: [
        "Image processing and computer vision",
        "Sorting and searching algorithms",
        "Graph traversal and path finding",
        "Network flow and optimization",
      ],
    },
    {
      question: "What is the key concept behind the Flood Fill algorithm?",
      options: [
        "Graph traversal",
        "Greedy algorithm",
        "Dynamic programming",
        "Backtracking",
      ],
    },
    {
      question:
        "What is the typical application of the Flood Fill algorithm in image processing?",
      options: [
        "Filling regions with a specific color",
        "Removing noise from images",
        "Edge detection",
        "Object recognition",
      ],
    },
    {
      question:
        "What data structure is commonly used to implement the Flood Fill algorithm?",
      options: ["Stack", "Queue", "Heap", "List"],
    },
    {
      question: "What is the time complexity of the Flood Fill algorithm?",
      options: ["O(N)", "O(log(N))", "O(N^2)", "O(N^3)"],
    },
    {
      question: "What is the initial step in the Flood Fill algorithm?",
      options: [
        "Choosing a starting point",
        "Initializing all pixels as unvisited",
        "Creating an empty stack or queue",
        "None of the above",
      ],
    },
    {
      question:
        "How does the Flood Fill algorithm determine the region to fill?",
      options: [
        "By comparing the color of adjacent pixels",
        "By calculating the brightness of each pixel",
        "By measuring the distance between pixels",
        "By applying a threshold value",
      ],
    },
    {
      question: "What is the final result of the Flood Fill algorithm?",
      options: [
        "A filled region or connected component",
        "The shortest path between two vertices in the graph",
        "The maximum flow in a network",
        "The minimum spanning tree of the graph",
      ],
    },
    {
      question: "Does the Flood Fill algorithm work on directed graphs?",
      options: [
        "No, it is designed for undirected graphs",
        "Yes, it can handle both directed and undirected graphs",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
    {
      question:
        "What is the general approach for implementing the Flood Fill algorithm?",
      options: [
        "Using a recursive depth-first search (DFS)",
        "Using an iterative breadth-first search (BFS)",
        "Using a backtracking algorithm",
        "Using a divide and conquer strategy",
      ],
    },
  ];
  const answerMap = {
    0: "To perform image segmentation",
    1: "Image processing and computer vision",
    2: "Graph traversal",
    3: "Filling regions with a specific color",
    4: "Stack",
    5: "O(N)",
    6: "Choosing a starting point",
    7: "By comparing the color of adjacent pixels",
    8: "A filled region or connected component",
    9: "No, it is designed for undirected graphs",
    10: "Using a recursive depth-first search (DFS)",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        FloodFill Algorithm
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

export default FloodFill;
