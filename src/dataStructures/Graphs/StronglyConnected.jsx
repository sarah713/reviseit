import React from "react";

const StronglyConnected = () => {
  const questions = [
    {
      question:
        "What is the purpose of the findStronglyConnectedComponents method in the StronglyConnectedComponents class?",
      options: [
        "To find and identify all the strongly connected components in the given graph",
        "To calculate the total number of vertices in the given graph",
        "To perform a topological sort on the given graph",
        "To find the shortest path between two vertices in the given graph",
      ],
    },
    {
      question:
        "Which algorithm is commonly used to find strongly connected components in a directed graph?",
      options: [
        "Kosaraju's algorithm",
        "Dijkstra's algorithm",
        "Prim's algorithm",
        "Bellman-Ford algorithm",
      ],
    },
    {
      question:
        "What data structure is typically used to store the graph representation for finding strongly connected components?",
      options: ["Adjacency list", "Adjacency matrix", "Heap", "Stack"],
    },
    {
      question:
        "What is the time complexity of finding strongly connected components using Kosaraju's algorithm?",
      options: ["O(V + E)", "O(V^2)", "O(E^2)", "O(log(V))"],
    },
    {
      question: "What is a strongly connected component in a directed graph?",
      options: [
        "A subgraph in which every vertex is reachable from every other vertex",
        "A subgraph that contains cycles",
        "A subgraph with the highest number of edges",
        "A subgraph with the highest number of vertices",
      ],
    },
    {
      question:
        "What is the key concept behind finding strongly connected components using Kosaraju's algorithm?",
      options: [
        "Depth-first search (DFS)",
        "Breadth-first search (BFS)",
        "Dijkstra's shortest path algorithm",
        "Topological sorting",
      ],
    },
    {
      question:
        "What is the first step in Kosaraju's algorithm to find strongly connected components?",
      options: [
        "Perform a depth-first search on the original graph and store the finishing times",
        "Reverse the direction of all the edges in the graph",
        "Perform a breadth-first search on the original graph and mark the visited vertices",
        "Sort the vertices in reverse order based on their degrees",
      ],
    },
    {
      question:
        "What is the final step in Kosaraju's algorithm to find strongly connected components?",
      options: [
        "Perform a depth-first search on the reversed graph, starting from the vertex with the highest finishing time",
        "Perform a breadth-first search on the reversed graph, starting from the vertex with the highest finishing time",
        "Perform a topological sort on the reversed graph",
        "Perform a depth-first search on the original graph, starting from the vertex with the highest finishing time",
      ],
    },
    {
      question:
        "What is the space complexity of finding strongly connected components using Kosaraju's algorithm?",
      options: ["O(V)", "O(E)", "O(V + E)", "O(1)"],
    },
    {
      question: "What can strongly connected components be used for?",
      options: [
        "Detecting cycles in a graph",
        "Finding the shortest path between two vertices",
        "Determining the minimum spanning tree of a graph",
        "Performing topological sorting",
      ],
    },
  ];
  const answerMap = {
    0: "To find and identify all the strongly connected components in the given graph",
    1: "Kosaraju's algorithm",
    2: "Adjacency list",
    3: "O(V + E)",
    4: "A subgraph in which every vertex is reachable from every other vertex",
    5: "Depth-first search (DFS)",
    6: "Perform a depth-first search on the original graph and store the finishing times",
    7: "Perform a depth-first search on the reversed graph, starting from the vertex with the highest finishing time",
    8: "O(V + E)",
    9: "Detecting cycles in a graph",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold mb-4 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-900">
        Strongly Connected Components
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

export default StronglyConnected;
