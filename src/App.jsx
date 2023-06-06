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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
