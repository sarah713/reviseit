import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Graphs from "./dataStructures/Graphs/Graphs";
import TopologicalSort from "./dataStructures/Graphs/TopologicalSort";
import NumberOfIslands from "./dataStructures/Graphs/NumberOfIslands";
import NumberOfDistinctIslands from "./dataStructures/Graphs/NumberOfDistinctIslands";
import IsBipartite from "./dataStructures/Graphs/IsBipartite";
import StronglyConnected from "./dataStructures/Graphs/StronglyConnected";
import DijkstrasAlgo from "./dataStructures/Graphs/DijkstrasAlgo";
import Bellman from "./dataStructures/Graphs/Bellman";
import FloydWarshalls from "./FloydWarshalls";
import PrimsAlgo from "./dataStructures/Graphs/PrimsAlgo";
import FloodFill from "./dataStructures/Graphs/FloodFill";
import RottenOranges from "./dataStructures/Graphs/RottenOranges";
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/topoSort" element={<TopologicalSort />} />
            <Route path="/numOfIslands" element={<NumberOfIslands />} />
            <Route
              path="/numOfDistIslands"
              element={<NumberOfDistinctIslands />}
            />
            <Route path="/isBipartite" element={<IsBipartite />} />
            <Route path="/kosaraju" element={<StronglyConnected />} />
            <Route path="/dijkstra" element={<DijkstrasAlgo />} />
            <Route path="/bellman" element={<Bellman />} />
            <Route path="/floydwarshall" element={<FloydWarshalls />} />
            <Route path="/prims" element={<PrimsAlgo />} />
            <Route path="/floodfill" element={<FloodFill />} />
            <Route path="/rotoranges" element={<RottenOranges />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
