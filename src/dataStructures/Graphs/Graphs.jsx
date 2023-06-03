import React from "react";

const Graphs = () => {
  const questions = [
    {
      question: "What is topological sorting?",
      options: [
        "A linear ordering of the vertices of a directed acyclic graph (DAG)",
        "A sorting algorithm for integers",
        "A sorting algorithm for strings",
        "A way to sort elements in an array",
      ],
    },
    {
      question: "Which type of graph does topological sorting apply to?",
      options: [
        "Directed acyclic graph (DAG)",
        "Undirected graph",
        "Directed cyclic graph",
        "Complete graph",
      ],
    },
    {
      question: "What is the main purpose of topological sorting?",
      options: [
        "To find a feasible sequence for dependent tasks",
        "To sort elements in ascending order",
        "To perform quick searching in a graph",
        "To determine the shortest path in a graph",
      ],
    },
    {
      question:
        "In topological sorting, how are the vertices placed in the ordering?",
      options: [
        "Based on their dependencies",
        "Based on their alphabetical order",
        "Based on their distance from the source vertex",
        "Based on their weight or value",
      ],
    },
    {
      question:
        "Which data structure is commonly used in implementing topological sorting?",
      options: ["Stack", "Queue", "Binary tree", "Heap"],
    },
    {
      question:
        "What is the time complexity of topological sorting using Depth-First Search (DFS)?",
      options: ["O(V + E)", "O(VlogV)", "O(V^2)", "O(E^2)"],
    },
    {
      question: "Can a graph have multiple valid topological orderings?",
      options: [
        "No, a graph can have only one valid topological ordering",
        "Yes, a graph can have multiple valid topological orderings",
        "It depends on the number of vertices in the graph",
        "It depends on the type of the graph",
      ],
    },
    {
      question:
        "What happens if a directed graph contains cycles and we try to perform topological sorting?",
      options: [
        "Topological sorting is not possible for a graph with cycles",
        "The cycles are ignored and the sorting is performed",
        "The graph is automatically converted into an acyclic graph",
        "The sorting is performed, but the result may not be valid",
      ],
    },
    {
      question:
        "What is a topological ordering called when it contains all the vertices of a graph?",
      options: [
        "A complete topological ordering",
        "A perfect topological ordering",
        "A full topological ordering",
        "A total topological ordering",
      ],
    },
    {
      question:
        "Which algorithm is commonly used for topological sorting in practice?",
      options: [
        "Kahn's algorithm",
        "Breadth-First Search (BFS)",
        "Bellman-Ford algorithm",
        "Floyd-Warshall algorithm",
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">Topological Sort</h1>
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

export default Graphs;
