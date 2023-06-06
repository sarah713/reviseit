import React from "react";
import NumberOfIslands from "./NumberOfIslands";
import TopologicalSort from "./TopologicalSort";
import { Link } from "react-router-dom";

const Graphs = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Link
          to="/topoSort"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Topological Sort
        </Link>
        <Link
          to="/numOfIslands"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Number of Islands
        </Link>
        <Link
          to="/numOfDistIslands"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Number of Distinct Islands
        </Link>
        <Link
          to="/isBipartite"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Is Bipartite (DFS)
        </Link>
        <Link
          to="/kosaraju"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Strongly Connected Components (Kosaraju's algo)
        </Link>
        <Link
          to="/dijkstra"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Dijkstra's Algorithm
        </Link>
        <Link
          to="/bellman"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Bellman Ford Algorithm
        </Link>
      </div>
    </div>
  );
};

export default Graphs;
