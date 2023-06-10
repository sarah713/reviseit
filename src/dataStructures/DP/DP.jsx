import React from "react";
import { Link } from "react-router-dom";

const DP = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <Link
          to="/maxsum"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Maximum sum of non-adjacent elements
        </Link>
        <Link
          to="/houserob"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          House Robber II
        </Link>
      </div>
    </div>
  );
};

export default DP;
