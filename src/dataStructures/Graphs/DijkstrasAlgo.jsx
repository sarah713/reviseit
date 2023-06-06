import React from "react";

const DijkstrasAlgo = () => {
  const questions = [
    {
      question: "What is the purpose of Dijkstra's algorithm?",
      options: [
        "To find the shortest path between two vertices in a weighted graph",
        "To perform a topological sort on a directed acyclic graph",
        "To find the minimum spanning tree of an undirected graph",
        "To detect cycles in a graph",
      ],
    },
    {
      question: "What type of graph does Dijkstra's algorithm work on?",
      options: [
        "Weighted, directed graphs",
        "Unweighted, directed graphs",
        "Weighted, undirected graphs",
        "Unweighted, undirected graphs",
      ],
    },
    {
      question:
        "What data structure is commonly used in the implementation of Dijkstra's algorithm?",
      options: ["Priority queue", "Stack", "Queue", "Heap"],
    },
    {
      question: "What is the time complexity of Dijkstra's algorithm?",
      options: ["O((V + E) log V)", "O(V^2)", "O(E^2)", "O(log(V))"],
    },
    {
      question:
        "What is the initial distance value assigned to the source vertex in Dijkstra's algorithm?",
      options: ["0", "Infinity", "1", "-1"],
    },
    {
      question:
        "How does Dijkstra's algorithm select the next vertex to visit during each iteration?",
      options: [
        "It chooses the vertex with the minimum distance from the source",
        "It chooses the vertex with the maximum distance from the source",
        "It chooses the vertex with the minimum weight edge",
        "It chooses the vertex in random order",
      ],
    },
    {
      question: "What is the key concept behind Dijkstra's algorithm?",
      options: [
        "Greedy algorithm",
        "Dynamic programming",
        "Depth-first search (DFS)",
        "Breadth-first search (BFS)",
      ],
    },
    {
      question:
        "What does the relaxation step in Dijkstra's algorithm involve?",
      options: [
        "Updating the distance of a vertex if a shorter path is found",
        "Reversing the direction of the edges in the graph",
        "Checking if a vertex has been visited or not",
        "Removing edges with negative weights from the graph",
      ],
    },
    {
      question: "What is the final result of Dijkstra's algorithm?",
      options: [
        "The shortest path from the source vertex to all other vertices in the graph",
        "The longest path from the source vertex to all other vertices in the graph",
        "The minimum weight spanning tree of the graph",
        "The topological ordering of the vertices in the graph",
      ],
    },
    {
      question:
        "Can Dijkstra's algorithm handle negative weight edges in a graph?",
      options: [
        "No, it assumes all edge weights are non-negative",
        "Yes, it can handle negative weight edges",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
  ];
  const answerMap = {
    0: "To find the shortest path between two vertices in a weighted graph",
    1: "Weighted, directed graphs",
    2: "Priority queue",
    3: "O((V + E) log V)",
    4: "Infinity",
    5: "It chooses the vertex with the minimum distance from the source",
    6: "Greedy algorithm",
    7: "Updating the distance of a vertex if a shorter path is found",
    8: "The shortest path from the source vertex to all other vertices in the graph",
    9: "No, it assumes all edge weights are non-negative",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Dijkstra's Algorithm
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

export default DijkstrasAlgo;
