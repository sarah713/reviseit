import React from "react";

function SurroundedRegions() {
  return (
    <div className="container mx-auto mt-8 display block">
      <h1 className="font-extrabold text-transparent text-2xl mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 outline-accent">
        House Robber II
      </h1>
      <h3 className="text-accent font-bold">Approach</h3>
      <span className="block">
        Initialize two arrays, dx and dy, representing the changes in row and
        column coordinates for the four possible directions: up, right, down,
        and left.
      </span>
      <span className="block">
        Create a 2D array vis of the same size as the input matrix to keep track
        of visited cells.
      </span>
      <span className="block">
        Traverse the first row and last row of the matrix. If a cell is an
        unvisited 'O', perform a depth-first search (DFS) from that cell to mark
        all connected 'O' cells as visited.
      </span>
      <span className="block">
        Traverse the first column and last column of the matrix. If a cell is an
        unvisited 'O', perform a DFS from that cell to mark all connected 'O'
        cells as visited.
      </span>
      <span className="block">
        After completing the DFS, traverse the entire matrix again. If a cell is
        an unvisited 'O', replace it with 'X' since it is surrounded by 'X'
        cells.
      </span>
      <span className="block">Return the modified matrix.</span>
    </div>
  );
}

export default SurroundedRegions;
