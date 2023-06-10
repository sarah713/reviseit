import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <Link
          to="/graphs"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Graphs
        </Link>
        <Link
          to="/dp"
          className="btn btn-ghost  rounded-btn text-accent  bg-neutral-focus"
        >
          Dynamic Programming
        </Link>
      </div>
    </div>
  );
};

export default Home;
