import React from "react";
import NumberOfIslands from "./NumberOfIslands";
import TopologicalSort from "./TopologicalSort";
import { Link } from "react-router-dom";

const Graphs = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        <Link
          to="/topoSort"
          className="btn btn-ghost btn-sm rounded-btn text-primary bg-neutral-focus"
        >
          Topological Sort
        </Link>
        <Link
          to="/numOfIslands"
          className="btn btn-ghost btn-sm rounded-btn text-primary bg-neutral-focus"
        >
          Number of Islands I
        </Link>
      </div>
    </div>
  );
};

export default Graphs;
