import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
import DP from "./dataStructures/DP/DP";
import MaxSumNonAdjacent from "./dataStructures/DP/MaxSumNonAdjacent";
import Home from "./components/Home";
import HouseRobberII from "./dataStructures/DP/HouseRobberII";
import SurroundedRegions from "./dataStructures/Graphs/SurroundedRegions";
import NumberOfEnclaves from "./dataStructures/Graphs/NumberOfEnclaves";
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/dp" element={<DP />} />
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
          <Route path="/maxsum" element={<MaxSumNonAdjacent />} />
          <Route path="/houserob" element={<HouseRobberII />} />
          <Route path="/OtoX" element={<SurroundedRegions />} />
          <Route path="/numOfEnclaves" element={<NumberOfEnclaves />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
