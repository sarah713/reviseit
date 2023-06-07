import React from "react";

const PrimsAlgo = () => {
  const questions = [
    {
      question: "What is the purpose of Prim's algorithm?",
      options: [
        "To find the minimum spanning tree of a connected, weighted graph",
        "To perform a topological sort on a directed acyclic graph",
        "To find the shortest path between two vertices in a graph",
        "To detect cycles in a graph",
      ],
    },
    {
      question: "What type of graph does Prim's algorithm work on?",
      options: [
        "Weighted, undirected graphs",
        "Unweighted, directed graphs",
        "Weighted, directed graphs",
        "Unweighted, undirected graphs",
      ],
    },
    {
      question:
        "What is the time complexity of Prim's algorithm using a binary heap?",
      options: ["O((V + E) * log(V))", "O(V^2)", "O(E^2)", "O(log(V))"],
    },
    {
      question: "What is the key concept behind Prim's algorithm?",
      options: [
        "Greedy algorithm",
        "Dynamic programming",
        "Depth-first search (DFS)",
        "Breadth-first search (BFS)",
      ],
    },
    {
      question: "What is the initial step in Prim's algorithm?",
      options: [
        "Choose a starting vertex",
        "Initialize all vertices as unvisited",
        "Create an empty priority queue",
        "None of the above",
      ],
    },
    {
      question:
        "How does Prim's algorithm select the next edge to add to the minimum spanning tree?",
      options: [
        "By choosing the edge with the minimum weight that connects a visited vertex to an unvisited vertex",
        "By choosing the edge with the maximum weight that connects a visited vertex to an unvisited vertex",
        "By choosing the edge with the minimum weight that connects two visited vertices",
        "By choosing the edge with the maximum weight that connects two visited vertices",
      ],
    },
    {
      question: "What is the final result of Prim's algorithm?",
      options: [
        "The minimum spanning tree of the graph",
        "The shortest path between two vertices in the graph",
        "The topological ordering of the vertices in the graph",
        "The maximum flow in a network",
      ],
    },
    {
      question:
        "Does Prim's algorithm work on graphs with negative-weight edges?",
      options: [
        "No, it does not work on graphs with negative-weight edges",
        "Yes, it can handle negative-weight edges",
        "It depends on the specific implementation",
        "None of the above",
      ],
    },
    {
      question:
        "What happens if Prim's algorithm encounters a disconnected graph?",
      options: [
        "It will find the minimum spanning tree for each connected component separately",
        "The algorithm will terminate and return an error",
        "The algorithm will enter an infinite loop",
        "None of the above",
      ],
    },
    {
      question:
        "What data structure is commonly used to implement Prim's algorithm?",
      options: ["Priority queue", "Stack", "Queue", "List"],
    },
  ];
  const answerMap = {
    0: "To find the minimum spanning tree of a connected, weighted graph",
    1: "Weighted, undirected graphs",
    2: "O((V + E) * log(V))",
    3: "Greedy algorithm",
    4: "Choose a starting vertex",
    5: "By choosing the edge with the minimum weight that connects a visited vertex to an unvisited vertex",
    6: "The minimum spanning tree of the graph",
    7: "No, it does not work on graphs with negative-weight edges",
    8: "It will find the minimum spanning tree for each connected component separately",
    9: "Priority queue",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Prims Algorithm
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

export default PrimsAlgo;
