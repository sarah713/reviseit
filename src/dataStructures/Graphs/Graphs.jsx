import React from "react";
import NumberOfIslands from "./NumberOfIslands";
import TopologicalSort from "./TopologicalSort";
import { Link } from "react-router-dom";

const Graphs = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
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
        <Link
          to="/floydwarshall"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Floyd Warshall Algorithm
        </Link>
        <Link
          to="/prims"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Prims Algorithm
        </Link>
        <Link
          to="/floodfill"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Flood fill Algorithm
        </Link>
        <Link
          to="/rotoranges"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Rotten Oranges
        </Link>
        <Link
          to="/OtoX"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Surrouned Regions
        </Link>
        <Link
          to="/numOfEnclaves"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Number Of Enclaves
        </Link>
      </div>
    </div>
  );
};

export default Graphs;
