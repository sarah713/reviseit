import React from "react";

const FloydWarshalls = () => {
  const questions = [
    {
      question: "What is the purpose of the Floyd-Warshall algorithm?",
      options: [
        "To find the shortest path between all pairs of vertices in a weighted graph",
        "To perform a topological sort on a directed acyclic graph",
        "To find the minimum spanning tree of an undirected graph",
        "To detect cycles in a graph",
      ],
    },
    {
      question: "What type of graph does the Floyd-Warshall algorithm work on?",
      options: [
        "Weighted, directed graphs",
        "Unweighted, directed graphs",
        "Weighted, undirected graphs",
        "Unweighted, undirected graphs",
      ],
    },
    {
      question: "What is the time complexity of the Floyd-Warshall algorithm?",
      options: ["O(V^3)", "O(V^2)", "O(E^2)", "O(log(V))"],
    },
    {
      question:
        "Can the Floyd-Warshall algorithm handle negative-weight edges in a graph?",
      options: [
        "Yes, it can handle negative-weight edges",
        "No, it assumes all edge weights are non-negative",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
    {
      question:
        "What is the initial value assigned to the distance between vertices that are not directly connected?",
      options: ["Infinity", "0", "1", "-1"],
    },
    {
      question: "What is the key concept behind the Floyd-Warshall algorithm?",
      options: [
        "Dynamic programming",
        "Greedy algorithm",
        "Depth-first search (DFS)",
        "Breadth-first search (BFS)",
      ],
    },
    {
      question: "What is the final result of the Floyd-Warshall algorithm?",
      options: [
        "The shortest path between all pairs of vertices in the graph",
        "The longest path between all pairs of vertices in the graph",
        "The minimum weight spanning tree of the graph",
        "The topological ordering of the vertices in the graph",
      ],
    },
    {
      question:
        "What does the relaxation step in the Floyd-Warshall algorithm involve?",
      options: [
        "Updating the distance between two vertices if a shorter path is found",
        "Reversing the direction of the edges in the graph",
        "Checking if a vertex has been visited or not",
        "Removing edges with negative weights from the graph",
      ],
    },
    {
      question:
        "In the Floyd-Warshall algorithm, how many iterations are required to compute the shortest paths?",
      options: ["V", "V-1", "E", "E-1"],
    },
    {
      question:
        "What happens if the Floyd-Warshall algorithm encounters a negative-weight cycle?",
      options: [
        "There is no well-defined shortest path, and the algorithm reports a negative cycle",
        "The algorithm terminates and returns the shortest paths found so far",
        "The algorithm enters an infinite loop",
        "None of the above",
      ],
    },
  ];
  const answerMap = {
    0: "To find the shortest path between all pairs of vertices in a weighted graph",
    1: "Weighted, directed graphs",
    2: "O(V^3)",
    3: "Yes, it can handle negative-weight edges",
    4: "Infinity",
    5: "Dynamic programming",
    6: "The shortest path between all pairs of vertices in the graph",
    7: "Updating the distance between two vertices if a shorter path is found",
    8: "V",
    9: "There is no well-defined shortest path, and the algorithm reports a negative cycle",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Floyd Warshall Algorithm
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

export default FloydWarshalls;
