import React from "react";

const Bellman = () => {
  const questions = [
    {
      question: "What is the purpose of the Bellman-Ford algorithm?",
      options: [
        "To find the shortest path between a single source vertex and all other vertices in a weighted graph",
        "To perform a topological sort on a directed acyclic graph",
        "To find the minimum spanning tree of an undirected graph",
        "To detect cycles in a graph",
      ],
    },
    {
      question: "What type of graph does the Bellman-Ford algorithm work on?",
      options: [
        "Weighted, directed graphs",
        "Unweighted, directed graphs",
        "Weighted, undirected graphs",
        "Unweighted, undirected graphs",
      ],
    },
    {
      question: "What is the time complexity of the Bellman-Ford algorithm?",
      options: ["O(V * E)", "O(V^2)", "O(E^2)", "O(log(V))"],
    },
    {
      question:
        "Can the Bellman-Ford algorithm handle graphs with negative-weight cycles?",
      options: [
        "No, it cannot handle negative-weight cycles",
        "Yes, it can handle negative-weight cycles",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
    {
      question:
        "What is the initial distance value assigned to the source vertex in the Bellman-Ford algorithm?",
      options: ["0", "Infinity", "1", "-1"],
    },
    {
      question:
        "What does the relaxation step in the Bellman-Ford algorithm involve?",
      options: [
        "Updating the distance of a vertex if a shorter path is found",
        "Reversing the direction of the edges in the graph",
        "Checking if a vertex has been visited or not",
        "Removing edges with negative weights from the graph",
      ],
    },
    {
      question: "What is the key concept behind the Bellman-Ford algorithm?",
      options: [
        "Dynamic programming",
        "Greedy algorithm",
        "Depth-first search (DFS)",
        "Breadth-first search (BFS)",
      ],
    },
    {
      question: "What is the final result of the Bellman-Ford algorithm?",
      options: [
        "The shortest path from the source vertex to all other vertices in the graph",
        "The longest path from the source vertex to all other vertices in the graph",
        "The minimum weight spanning tree of the graph",
        "The topological ordering of the vertices in the graph",
      ],
    },
    {
      question:
        "In the Bellman-Ford algorithm, how many iterations are required to guarantee the shortest paths?",
      options: ["V-1", "E", "V", "E-1"],
    },
    {
      question:
        "What happens if the Bellman-Ford algorithm encounters a negative-weight cycle?",
      options: [
        "There is no shortest path, and the algorithm reports a negative cycle",
        "The algorithm terminates and returns the shortest paths found so far",
        "The algorithm enters an infinite loop",
        "None of the above",
      ],
    },
  ];
  const answerMap = {
    0: "To find the shortest path between a single source vertex and all other vertices in a weighted graph",
    1: "Weighted, directed graphs",
    2: "O(V * E)",
    3: "Yes, it can handle negative-weight cycles",
    4: "Infinity",
    5: "Updating the distance of a vertex if a shorter path is found",
    6: "Dynamic programming",
    7: "The shortest path from the source vertex to all other vertices in the graph",
    8: "V-1",
    9: "There is no shortest path, and the algorithm reports a negative cycle",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Bellman Floyd Algorithm
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

export default Bellman;
