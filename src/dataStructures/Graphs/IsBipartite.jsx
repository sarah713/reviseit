import React from "react";

const IsBipartite = () => {
  const questions = [
    {
      question:
        "What is the purpose of the isBipartite method in the BipartiteCheck class?",
      options: [
        "To determine whether the given graph is bipartite or not",
        "To find the minimum spanning tree of the given graph",
        "To perform a topological sort on the given graph",
        "To calculate the number of connected components in the given graph",
      ],
    },
    {
      question:
        "Which data structure is used to keep track of the visited status and color of each vertex in the isBipartite method?",
      options: ["Array or HashMap", "Stack", "Queue", "HashSet"],
    },
    {
      question: "How is the graph represented in the isBipartite method?",
      options: [
        "Using an adjacency matrix or an adjacency list",
        "Using a binary heap",
        "Using a hash table",
        "Using a balanced search tree",
      ],
    },
    {
      question:
        "What is the purpose of the color array in the isBipartite method?",
      options: [
        "To assign colors to the vertices and check for bipartiteness",
        "To store the distances of the vertices from the source",
        "To keep track of the parent vertex for each vertex",
        "To mark the vertices as visited during the depth-first search",
      ],
    },
    {
      question:
        "What are the two possible colors used to color the vertices in the isBipartite method?",
      options: [
        "1 and -1",
        "Red and Blue",
        "Black and White",
        "Green and Yellow",
      ],
    },
    {
      question:
        "How are the colors assigned to the vertices during the depth-first search in the isBipartite method?",
      options: [
        "By alternating between the two colors for adjacent vertices",
        "By randomly assigning a color to each vertex",
        "By starting with a specific color and incrementing it for each subsequent vertex",
        "By assigning the same color to all vertices initially",
      ],
    },
    {
      question:
        "What condition is checked to detect if the graph is not bipartite in the isBipartite method?",
      options: [
        "If an adjacent vertex has the same color as the current vertex",
        "If an adjacent vertex has a different color than the current vertex",
        "If there are any cycles in the graph",
        "If the graph has more than two connected components",
      ],
    },
    {
      question: "What is the time complexity of the isBipartite method?",
      options: ["O(V + E)", "O(V^2)", "O(E^2)", "O(log(V))"],
    },
    {
      question: "What is the space complexity of the isBipartite method?",
      options: ["O(V)", "O(E)", "O(V + E)", "O(1)"],
    },
    {
      question:
        "What is the key concept behind determining bipartiteness using DFS in the isBipartite method?",
      options: [
        "Coloring the vertices and ensuring no adjacent vertices have the same color",
        "Counting the number of connected components in the graph",
        "Performing a topological sort on the graph",
        "Finding the shortest path between two vertices",
      ],
    },
  ];
  const answerMap = {
    0: "To determine whether the given graph is bipartite or not",
    1: "Array or HashMap",
    2: "Using an adjacency matrix or an adjacency list",
    3: "To assign colors to the vertices and check for bipartiteness",
    4: "1 and -1",
    5: "By alternating between the two colors for adjacent vertices",
    6: "If an adjacent vertex has the same color as the current vertex",
    7: "O(V + E)",
    8: "O(V)",
    9: "Coloring the vertices and ensuring no adjacent vertices have the same color",
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        Is Bipartite (DFS)
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

export default IsBipartite;
